    document.addEventListener('DOMContentLoaded', () => {

      // 1. Motion Preference Check
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // 2. Initialize Lenis Smooth Scroll (If motion is enabled & library loaded)
      let lenis = null;
      if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.5
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      // 3. Initialize AOS (Animate On Scroll)
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 650,
          once: true,
          offset: 80,
          disable: prefersReducedMotion
        });
      }

      // 4. Auto-Hiding Navbar Behavior
      const header = document.getElementById('site-header');
      let lastScrollY = window.scrollY;

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Add shadow/solid background when scrolled
        if (currentScrollY > 20) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }

        // Hide on scroll down, show on scroll up
        const isFocusInsideHeader = header.contains(document.activeElement);
        const isNavOpen = document.getElementById('nav-menu').classList.contains('is-open');

        if (currentScrollY > 100 && currentScrollY > lastScrollY && !isFocusInsideHeader && !isNavOpen) {
          header.classList.add('header-hidden');
        } else {
          header.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
      }, { passive: true });

      // Ensure header stays visible when focus enters
      header.addEventListener('focusin', () => {
        header.classList.remove('header-hidden');
      });

      // 5. Mobile Navigation Menu Toggle & Accessibility
      const mobileToggle = document.getElementById('mobile-nav-toggle');
      const toggleIcon = document.getElementById('toggle-icon');
      const navMenu = document.getElementById('nav-menu');
      const navBackdrop = document.getElementById('nav-backdrop');
      const navLinks = document.querySelectorAll('.nav-link');

      function openMobileNav() {
        mobileToggle.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('is-open');
        navBackdrop.classList.add('is-active');
        toggleIcon.className = 'bi bi-x-lg';
        document.body.style.overflow = 'hidden';
      }

      function closeMobileNav() {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        navBackdrop.classList.remove('is-active');
        toggleIcon.className = 'bi bi-list';
        document.body.style.overflow = '';
      }

      mobileToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('is-open');
        if (isOpen) closeMobileNav(); else openMobileNav();
      });

      navBackdrop.addEventListener('click', closeMobileNav);

      // Close menu on link click or Escape key
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          closeMobileNav();
        });
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
          closeMobileNav();
          mobileToggle.focus();
        }
      });

      // 6. Property Catalog Responsive Carousel Controls
      const catalogPrev = document.getElementById('catalog-prev');
      const catalogNext = document.getElementById('catalog-next');
      const catalogStatus = document.getElementById('catalog-status');
      const catalogCards = document.querySelectorAll('.catalog-card');
      let currentCardIndex = 0;

      function updateCatalogView() {
        const isMobileTablet = window.innerWidth < 768;

        if (!isMobileTablet) {
          // Reset inline styles on desktop
          catalogCards.forEach(card => card.style.display = 'flex');
          catalogPrev.disabled = true;
          catalogNext.disabled = true;
          catalogStatus.textContent = 'Showing all 3 property categories';
          return;
        }

        // On mobile/tablet, cycle single cards
        catalogCards.forEach((card, index) => {
          if (index === currentCardIndex) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });

        catalogPrev.disabled = currentCardIndex === 0;
        catalogNext.disabled = currentCardIndex === catalogCards.length - 1;

        const cardTitle = catalogCards[currentCardIndex].querySelector('.catalog-card-title').textContent;
        catalogStatus.textContent = `Showing category ${currentCardIndex + 1} of ${catalogCards.length}: ${cardTitle}`;
      }

      catalogPrev.addEventListener('click', () => {
        if (currentCardIndex > 0) {
          currentCardIndex--;
          updateCatalogView();
        }
      });

      catalogNext.addEventListener('click', () => {
        if (currentCardIndex < catalogCards.length - 1) {
          currentCardIndex++;
          updateCatalogView();
        }
      });

      window.addEventListener('resize', updateCatalogView);
      updateCatalogView();

      // 7. Accessible FAQ Accordion Logic
      const faqButtons = document.querySelectorAll('.faq-button');

      faqButtons.forEach(button => {
        button.addEventListener('click', () => {
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
          const panelId = button.getAttribute('aria-controls');
          const panel = document.getElementById(panelId);

          // Close all open FAQ panels
          faqButtons.forEach(otherBtn => {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherPanelId = otherBtn.getAttribute('aria-controls');
            const otherPanel = document.getElementById(otherPanelId);
            if (otherPanel) {
              otherPanel.setAttribute('aria-hidden', 'true');
            }
          });

          // Toggle clicked item
          if (!isExpanded) {
            button.setAttribute('aria-expanded', 'true');
            panel.setAttribute('aria-hidden', 'false');
          }
        });
      });

      // 8. Contact Form Handling (Demo Mode)
      const contactForm = document.getElementById('enquiry-form');
      const formFeedback = document.getElementById('form-feedback');

      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!contactForm.checkValidity()) {
          contactForm.reportValidity();
          return;
        }

        // Display Demo Success Message
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong><i class="bi bi-check-circle"></i> Request Received!</strong><br>
          Thank you for reaching out. This is a front-end demonstration form. In a live environment, your inquiry will be transmitted to our client advisory team.
        `;

        contactForm.reset();

        setTimeout(() => {
          formFeedback.style.display = 'none';
        }, 8000);
      });

      // 9. Placeholder Legal Link Handler (Prevents page jump)
      const legalLinks = [document.getElementById('tos-link'), document.getElementById('privacy-link')];
      legalLinks.forEach(link => {
        if (link) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This is a placeholder link for demonstration purposes.');
          });
        }
      });

    });

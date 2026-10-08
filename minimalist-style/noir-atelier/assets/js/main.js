    document.addEventListener('DOMContentLoaded', async () => {
      
      // 1. Set Copyright Year Dynamically
      const yearEl = document.getElementById('currentYear');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      // 2. Initialize Lenis Smooth Scroll defensively
      let lenis = null;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (window.Lenis && !prefersReducedMotion) {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      // 3. Initialize AOS (Animate On Scroll) defensively
      if (window.AOS) {
        AOS.init({
          duration: 700,
          easing: 'ease-out-cubic',
          once: true,
          disable: prefersReducedMotion
        });
      }

      // 4. Header Auto-Hide / Show Behavior on Scroll with Threshold
      const header = document.getElementById('siteHeader');
      let lastScrollY = window.scrollY;
      const scrollThreshold = 15;

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Always show near page top or if header has keyboard focus
        if (currentScrollY <= 80 || header.contains(document.activeElement)) {
          header.classList.remove('header-hidden');
          lastScrollY = currentScrollY;
          return;
        }

        const delta = currentScrollY - lastScrollY;

        if (Math.abs(delta) > scrollThreshold) {
          if (delta > 0) {
            // Scrolling down -> hide
            header.classList.add('header-hidden');
          } else {
            // Scrolling up -> reveal
            header.classList.remove('header-hidden');
          }
          lastScrollY = currentScrollY;
        }
      }, { passive: true });

      // Keep header visible when receiving focus inside header
      header.addEventListener('focusin', () => {
        header.classList.remove('header-hidden');
      });

      // 5. Accessible Mobile Overlay Menu
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileNavOverlay = document.getElementById('mobileNavOverlay');
      const menuIcon = document.getElementById('menuIcon');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function toggleMobileMenu(open) {
        const isOpen = open !== undefined ? open : mobileNavOverlay.classList.contains('is-active') === false;
        mobileNavOverlay.classList.toggle('is-active', isOpen);
        mobileNavOverlay.setAttribute('aria-hidden', !isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        
        if (isOpen) {
          menuIcon.className = 'bi bi-x-lg';
          document.body.style.overflow = 'hidden';
        } else {
          menuIcon.className = 'bi bi-list';
          document.body.style.overflow = '';
        }
      }

      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
      }

      // Close mobile menu when clicking a link
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMobileMenu(false));
      });

      // Close mobile menu on Escape key press
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('is-active')) {
          toggleMobileMenu(false);
          mobileMenuBtn.focus();
        }
      });

      // 6. Native Anchor Click Handling with Lenis Alignment
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#' || !targetId) return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            if (lenis) {
              lenis.scrollTo(targetElement, { offset: -70 });
            } else {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
    });

    // Hairline module enhancement with a static SVG fallback in the markup.
    try {
      const hairlineModule = await import('https://esm.sh/@lucasmarkes/hairline@1.0.0');
      if (hairlineModule && hairlineModule.createHairline) {
        const container = document.getElementById('hairlineContainer');
        if (container) {
          container.innerHTML = '';
          hairlineModule.createHairline(container, {
            theme: 'dark',
            strokeColor: '#f4f3ef',
            interactive: true,
            density: 12,
            lineWidth: 1
          });
        }
      }
    } catch (err) {
      console.info('Hairline module load skipped or unavailable. Preserving static SVG fallback.', err);
    }

});

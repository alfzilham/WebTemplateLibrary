    import { terrain } from "https://esm.sh/@lucasmarkes/hairline";

    const hairlineFigure = document.querySelector("#hairline-figure");
    if (hairlineFigure && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try {
        terrain(hairlineFigure, {
          intensity: 0.65,
          theme: "light",
          label: "Interactive editorial wireframe illustration"
        });
      } catch (err) {
        console.warn("Hairline initialization notice:", err);
      }
    }

  <script>
    document.addEventListener('DOMContentLoaded', () => {

      /* ----------------------------------------------------------------------
         1. LENIS SMOOTH SCROLL INITIALIZATION
         ---------------------------------------------------------------------- */
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!isReducedMotion && typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
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

        // Smooth scroll for anchor clicks
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
              e.preventDefault();
              const targetEl = document.querySelector(targetId);
              if (targetEl) {
                lenis.scrollTo(targetEl, { offset: -60 });
              }
            }
          });
        });
      }

      /* ----------------------------------------------------------------------
         2. AOS REVEAL ANIMATIONS INITIALIZATION
         ---------------------------------------------------------------------- */
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          once: true,
          offset: 100,
          disable: () => isReducedMotion
        });
      }

      /* ----------------------------------------------------------------------
         3. SMART NAVBAR SCROLL DIRECTION DETECTION
         ---------------------------------------------------------------------- */
      const header = document.getElementById('site-header');
      let lastScrollY = window.scrollY;
      let mobileMenuOpen = false;

      function updateHeader() {
        const currentScrollY = window.scrollY;

        // Near top: always visible
        if (currentScrollY <= 60) {
          header.classList.remove('is-hidden');
        } 
        // Scrolling DOWN -> hide header (unless mobile menu is open)
        else if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileMenuOpen) {
          header.classList.add('is-hidden');
        } 
        // Scrolling UP -> reveal header
        else if (currentScrollY < lastScrollY) {
          header.classList.remove('is-hidden');
        }

        lastScrollY = currentScrollY;
      }

      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateHeader();
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });

      /* ----------------------------------------------------------------------
         4. MOBILE NAVIGATION DRAWER
         ---------------------------------------------------------------------- */
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
      const menuIcon = document.getElementById('menu-icon');
      const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn');

      function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        mobileNavOverlay.classList.toggle('is-open', mobileMenuOpen);
        mobileMenuBtn.setAttribute('aria-expanded', mobileMenuOpen);

        if (mobileMenuOpen) {
          menuIcon.className = 'bi bi-x-lg';
          header.classList.remove('is-hidden');
          document.body.style.overflow = 'hidden';
        } else {
          menuIcon.className = 'bi bi-list';
          document.body.style.overflow = '';
        }
      }

      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
      }

      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (mobileMenuOpen) toggleMobileMenu();
        });
      });

      // Escape key listener for menu closure
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuOpen) {
          toggleMobileMenu();
        }
      });

    });
  </script>


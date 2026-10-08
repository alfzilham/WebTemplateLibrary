    document.addEventListener('DOMContentLoaded', () => {

      /* 1. LENIS SMOOTH SCROLL INITIALIZATION */
      let lenis;
      if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      /* 2. AOS ANIMATIONS INITIALIZATION */
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 750,
          easing: 'ease-out-cubic',
          once: true,
          disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        });
      }

      /* 3. AUTO-HIDE NAVBAR ON SCROLL */
      const navbar = document.getElementById('navbar');
      let lastScrollY = window.scrollY;

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const mobileNav = document.getElementById('mobile-navigation');
        const isMobileOpen = mobileNav.classList.contains('is-open');

        // Do not hide navbar if menu is open or top of page or focused
        if (currentScrollY > 60 && !isMobileOpen && !navbar.contains(document.activeElement)) {
          if (currentScrollY > lastScrollY) {
            navbar.classList.add('navbar--hidden');
          } else {
            navbar.classList.remove('navbar--hidden');
          }
        } else {
          navbar.classList.remove('navbar--hidden');
        }
        lastScrollY = currentScrollY;
      }, { passive: true });

      /* 4. ACCESSIBLE MOBILE MENU TOGGLE */
      const menuToggle = document.getElementById('menu-toggle');
      const mobileNav = document.getElementById('mobile-navigation');
      const menuIcon = document.getElementById('menu-icon');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function toggleMenu(open) {
        const isOpen = open !== undefined ? open : !mobileNav.classList.contains('is-open');
        mobileNav.classList.toggle('is-open', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
        mobileNav.setAttribute('aria-hidden', !isOpen);

        if (isOpen) {
          menuIcon.className = 'bi bi-x-lg';
          menuToggle.setAttribute('aria-label', 'Close navigation menu');
          document.body.style.overflow = 'hidden';
        } else {
          menuIcon.className = 'bi bi-list';
          menuToggle.setAttribute('aria-label', 'Open navigation menu');
          document.body.style.overflow = '';
        }
      }

      menuToggle.addEventListener('click', () => toggleMenu());

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
          toggleMenu(false);
          menuToggle.focus();
        }
      });

      /* 5. INTERACTIVE FEATURE ROWS */
      const featureRows = document.querySelectorAll('.feature-row');
      featureRows.forEach(row => {
        row.addEventListener('click', () => {
          featureRows.forEach(r => {
            r.classList.remove('active');
            r.setAttribute('aria-pressed', 'false');
          });
          row.classList.add('active');
          row.setAttribute('aria-pressed', 'true');
        });

        row.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            row.click();
          }
        });
      });

      /* 6. HAIRLINE DECORATIVE ISOMETRIC RENDERER (PLAIN DOM / CANVAS) */
      const canvas = document.getElementById('hairline-canvas');
      if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const ctx = canvas.getContext('2d');
        let angle = 0;

        function drawHairlineIsoCube() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height / 2);

          const size = 45;
          ctx.strokeStyle = '#FF4A0A';
          ctx.lineWidth = 1.5;

          // Isometric rotation simulation
          const cosA = Math.cos(angle);
          const sinA = Math.sin(angle);

          // Top face
          ctx.beginPath();
          ctx.moveTo(0, -size);
          ctx.lineTo(size * 0.86, -size * 0.5 + sinA * 5);
          ctx.lineTo(0, 0 + sinA * 5);
          ctx.lineTo(-size * 0.86, -size * 0.5 + sinA * 5);
          ctx.closePath();
          ctx.stroke();

          // Left face
          ctx.beginPath();
          ctx.moveTo(-size * 0.86, -size * 0.5 + sinA * 5);
          ctx.lineTo(0, 0 + sinA * 5);
          ctx.lineTo(0, size + sinA * 5);
          ctx.lineTo(-size * 0.86, size * 0.5 + sinA * 5);
          ctx.closePath();
          ctx.stroke();

          // Right face
          ctx.beginPath();
          ctx.moveTo(0, 0 + sinA * 5);
          ctx.lineTo(size * 0.86, -size * 0.5 + sinA * 5);
          ctx.lineTo(size * 0.86, size * 0.5 + sinA * 5);
          ctx.lineTo(0, size + sinA * 5);
          ctx.closePath();
          ctx.stroke();

          ctx.restore();
          angle += 0.02;
          requestAnimationFrame(drawHairlineIsoCube);
        }

        drawHairlineIsoCube();
      }

    });

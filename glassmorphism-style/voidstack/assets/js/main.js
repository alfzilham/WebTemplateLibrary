    document.addEventListener('DOMContentLoaded', () => {
      
      /* ------------------------------------------------------------------------
         1. LENIS SMOOTH SCROLLING
         ------------------------------------------------------------------------ */
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.0
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          const targetElem = document.querySelector(targetId);
          if (targetElem) {
            e.preventDefault();
            lenis.scrollTo(targetElem, { offset: -20 });
            closeMobileMenu();
          }
        });
      });

      /* ------------------------------------------------------------------------
         2. AOS INITIALIZATION
         ------------------------------------------------------------------------ */
      AOS.init({
        duration: 900,
        offset: 80,
        once: true,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      });

      /* ------------------------------------------------------------------------
         3. NAVBAR SCROLL BEHAVIOR (Hide on Scroll Down, Show on Scroll Up)
         ------------------------------------------------------------------------ */
      const header = document.getElementById('site-header');
      let lastScrollY = window.scrollY;
      const scrollThreshold = 15;

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
          header.classList.add('nav-scrolled');
        } else {
          header.classList.remove('nav-scrolled');
        }

        if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
          return;
        }

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scroll Down -> Hide
          header.classList.add('nav-hidden');
        } else {
          // Scroll Up -> Show
          header.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
      });

      /* ------------------------------------------------------------------------
         4. ACCESSIBLE MOBILE MENU DRAWER
         ------------------------------------------------------------------------ */
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileCloseBtn = document.getElementById('mobile-close-btn');
      const mobileDrawer = document.getElementById('mobile-drawer');
      const drawerOverlay = document.getElementById('drawer-overlay');
      const drawerLinks = document.querySelectorAll('.drawer-nav-link');

      function openMobileMenu() {
        mobileDrawer.classList.add('is-open');
        drawerOverlay.classList.add('is-open');
        mobileBtn.setAttribute('aria-expanded', 'true');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      function closeMobileMenu() {
        mobileDrawer.classList.remove('is-open');
        drawerOverlay.classList.remove('is-open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      mobileBtn.addEventListener('click', openMobileMenu);
      mobileCloseBtn.addEventListener('click', closeMobileMenu);
      drawerOverlay.addEventListener('click', closeMobileMenu);

      // Accessibility: Escape key closes menu
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
          closeMobileMenu();
        }
      });

      drawerLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });

      /* ------------------------------------------------------------------------
         5. HERO TERRAIN INTERACTIVE CANVAS (POINTER-DRIVEN ISOMETRIC MESH)
         ------------------------------------------------------------------------ */
      const canvas = document.getElementById('terrain-canvas');
      if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
        let isHovered = false;

        // Resize handler
        window.addEventListener('resize', () => {
          width = canvas.width = canvas.offsetWidth;
          height = canvas.height = canvas.offsetHeight;
        });

        // Pointer movement inside Hero
        const heroElem = document.getElementById('hero');
        heroElem.addEventListener('mousemove', (e) => {
          const rect = canvas.getBoundingClientRect();
          mouse.targetX = e.clientX - rect.left;
          mouse.targetY = e.clientY - rect.top;
          isHovered = true;
        });

        heroElem.addEventListener('mouseleave', () => {
          isHovered = false;
          mouse.targetX = width / 2;
          mouse.targetY = height / 2;
        });

        // Grid parameters
        const cols = 36;
        const rows = 22;
        let time = 0;

        function drawTerrain() {
          ctx.clearRect(0, 0, width, height);

          // Smooth interpolation for pointer
          mouse.x += (mouse.targetX - mouse.x) * 0.05;
          mouse.y += (mouse.targetY - mouse.y) * 0.05;

          time += 0.015;

          const gridWidth = width * 1.2;
          const gridHeight = height * 0.9;
          const startX = (width - gridWidth) / 2;
          const startY = height * 0.1;

          const cellW = gridWidth / cols;
          const cellH = gridHeight / rows;

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 1;

          // Draw Horizontal Wave Lines
          for (let r = 0; r <= rows; r++) {
            ctx.beginPath();
            for (let c = 0; c <= cols; c++) {
              const posX = startX + c * cellW;
              const baseY = startY + r * cellH;

              // Wave calculation
              const distToMouse = Math.hypot(posX - mouse.x, baseY - mouse.y);
              const mouseInfluence = Math.max(0, (1 - distToMouse / 280)) * 25;

              const wave = Math.sin(c * 0.25 + time + r * 0.2) * 12 + Math.cos(r * 0.3 + time) * 8;
              const finalY = baseY + wave - mouseInfluence;

              if (c === 0) {
                ctx.moveTo(posX, finalY);
              } else {
                ctx.lineTo(posX, finalY);
              }
            }
            ctx.stroke();
          }

          // Draw Vertical Perspective Lines
          for (let c = 0; c <= cols; c += 2) {
            ctx.beginPath();
            for (let r = 0; r <= rows; r++) {
              const posX = startX + c * cellW;
              const baseY = startY + r * cellH;

              const distToMouse = Math.hypot(posX - mouse.x, baseY - mouse.y);
              const mouseInfluence = Math.max(0, (1 - distToMouse / 280)) * 25;

              const wave = Math.sin(c * 0.25 + time + r * 0.2) * 12 + Math.cos(r * 0.3 + time) * 8;
              const finalY = baseY + wave - mouseInfluence;

              if (r === 0) {
                ctx.moveTo(posX, finalY);
              } else {
                ctx.lineTo(posX, finalY);
              }
            }
            ctx.stroke();
          }

          requestAnimationFrame(drawTerrain);
        }

        // Pause animation when hero is offscreen
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              requestAnimationFrame(drawTerrain);
            }
          });
        });
        observer.observe(heroElem);
      }
    });

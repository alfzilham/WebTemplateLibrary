document.addEventListener('DOMContentLoaded', () => {
      // Initialize Lenis Smooth Scroll
      let lenis = null;
      if (typeof Lenis !== 'undefined') {
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

      // Initialize AOS Entrance Animations
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 700,
          easing: 'ease-out-cubic',
          once: true,
          offset: 60,
          disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        });
      }

      const mobileToggle = document.getElementById('mobile-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const toggleIcon = document.getElementById('toggle-icon');

      if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
          const isActive = mobileMenu.classList.toggle('active');
          mobileToggle.setAttribute('aria-expanded', isActive);
          if (isActive) {
            toggleIcon.className = 'bi bi-x-lg';
            document.body.style.overflow = 'hidden';
          } else {
            toggleIcon.className = 'bi bi-list';
            document.body.style.overflow = '';
          }
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            toggleIcon.className = 'bi bi-list';
            document.body.style.overflow = '';
          });
        });
      }

      const accordionHeaders = document.querySelectorAll('.accordion-header');

      accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
          const item = header.parentElement;
          const isActive = item.classList.contains('active');

          // Close all accordion items
          document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            const content = i.querySelector('.accordion-content');
            content.style.maxHeight = null;
          });

          // Open clicked item if it was closed
          if (!isActive) {
            item.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
            const content = item.querySelector('.accordion-content');
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      });

      // Ensure active accordion starts expanded correctly
      const activeInitial = document.querySelector('.accordion-item.active .accordion-content');
      if (activeInitial) {
        activeInitial.style.maxHeight = activeInitial.scrollHeight + 'px';
      }

      const canvas = document.getElementById('hairline-canvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;

        function resizeCanvas() {
          const rect = canvas.parentElement.getBoundingClientRect();
          canvas.width = rect.width * window.devicePixelRatio;
          canvas.height = rect.height * window.devicePixelRatio;
          width = canvas.width;
          height = canvas.height;
          ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Mouse tracking inside hero visual
        canvas.addEventListener('mousemove', (e) => {
          const rect = canvas.getBoundingClientRect();
          mouseX = (e.clientX - rect.left) / rect.width - 0.5;
          mouseY = (e.clientY - rect.top) / rect.height - 0.5;
        });

        canvas.addEventListener('mouseleave', () => {
          mouseX = 0;
          mouseY = 0;
        });

        // Interactive 3D Wireframe Terrain Mesh Generator (Hairline style)
        let time = 0;
        const rows = 24;
        const cols = 24;

        function renderTerrain() {
          const displayWidth = canvas.width / window.devicePixelRatio;
          const displayHeight = canvas.height / window.devicePixelRatio;

          ctx.clearRect(0, 0, displayWidth, displayHeight);

          // Smooth interpolation for mouse
          targetX += (mouseX - targetX) * 0.05;
          targetY += (mouseY - targetY) * 0.05;

          time += 0.015;

          const centerX = displayWidth / 2;
          const centerY = displayHeight / 2 + 30;
          const cellWidth = displayWidth / cols * 1.3;
          const cellHeight = displayHeight / rows * 0.9;

          ctx.strokeStyle = '#0A0A0A';
          ctx.lineWidth = 1;

          // Drawing 3D Isometric Wireframe Lines
          for (let r = 0; r < rows; r++) {
            ctx.beginPath();
            for (let c = 0; c < cols; c++) {
              // Calculate wave displacement
              const distFromCenter = Math.sqrt(Math.pow(r - rows / 2, 2) + Math.pow(c - cols / 2, 2));
              const z = Math.sin(time + distFromCenter * 0.4 + targetX * 5) * 18 * Math.cos(targetY * 3);

              // Isometric Projection Logic
              const isoX = centerX + (c - r) * (cellWidth * 0.45) + targetX * 60;
              const isoY = centerY + (c + r) * (cellHeight * 0.28) - z + targetY * 40;

              if (c === 0) {
                ctx.moveTo(isoX, isoY);
              } else {
                ctx.lineTo(isoX, isoY);
              }
            }
            ctx.stroke();
          }

          // Vertical mesh grid lines
          for (let c = 0; c < cols; c += 2) {
            ctx.beginPath();
            for (let r = 0; r < rows; r++) {
              const distFromCenter = Math.sqrt(Math.pow(r - rows / 2, 2) + Math.pow(c - cols / 2, 2));
              const z = Math.sin(time + distFromCenter * 0.4 + targetX * 5) * 18 * Math.cos(targetY * 3);

              const isoX = centerX + (c - r) * (cellWidth * 0.45) + targetX * 60;
              const isoY = centerY + (c + r) * (cellHeight * 0.28) - z + targetY * 40;

              if (r === 0) {
                ctx.moveTo(isoX, isoY);
              } else {
                ctx.lineTo(isoX, isoY);
              }
            }
            ctx.stroke();
          }

          requestAnimationFrame(renderTerrain);
        }

        renderTerrain();
      }

      const newsletterForm = document.getElementById('newsletterForm');
      if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const input = newsletterForm.querySelector('input');
          const button = newsletterForm.querySelector('button');

          if (input.value) {
            button.innerText = 'SUBSCRIBED ✓';
            button.style.backgroundColor = 'var(--color-yellow)';
            button.style.color = 'var(--color-black)';
            input.value = '';
            input.disabled = true;
          }
        });
      }
    });

/**
 * Verdant Care — Main Application Script
 * Features: Lenis Smooth Scroll, Hairline Interactive Integration, AOS Init, Auto-hiding Navbar, Carousel logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==========================================================================
     1. LENIS SMOOTH SCROLL INITIALIZATION
     ========================================================================== */
  let lenis = null;

  if (!prefersReducedMotion && typeof Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 0.65,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* ==========================================================================
     2. AOS ANIMATIONS INITIALIZATION
     ========================================================================== */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      offset: 60,
      once: true,
      mirror: false,
      disable: prefersReducedMotion,
    });

    // Recalculate after images/fonts load so content is not left in AOS's
    // initial hidden state when the page is opened from a local static server.
    window.addEventListener("load", () => AOS.refreshHard(), { once: true });

    // If AOS cannot calculate positions, reveal the page instead of leaving
    // every data-aos element invisible indefinitely.
    window.setTimeout(() => {
      const animatedElements = document.querySelectorAll("[data-aos]");
      const hasAnimatedContent = document.querySelector("[data-aos].aos-animate");

      if (!hasAnimatedContent) {
        animatedElements.forEach((element) => element.classList.add("aos-animate"));
      }
    }, 1800);
  } else {
    // Keep the page usable if the optional animation CDN is unavailable.
    document.querySelectorAll("[data-aos]").forEach((element) => {
      element.classList.add("aos-animate");
    });
  }

  /* ==========================================================================
     3. HAIRLINE INTERACTIVE VISUAL INTEGRATION
     ========================================================================== */
  async function initHairline() {
    if (prefersReducedMotion) return;

    const targetEl = document.getElementById("hairline-figure");
    if (!targetEl) return;

    try {
      // Dynamic module import from esm.run
      const hairlineModule = await import("https://esm.run/@lucasmarkes/hairline");
      
      // Attempt terrain or fall back to default DOM figure if available
      if (hairlineModule && typeof hairlineModule.terrain === "function") {
        hairlineModule.terrain(targetEl).update({
          intensity: 0.4,
          theme: "dark",
          label: "Interactive abstract lawn terrain visual",
        });
      } else if (hairlineModule && typeof hairlineModule.default === "function") {
        hairlineModule.default(targetEl);
      }
    } catch (err) {
      // Graceful fallback: Render subtle CSS SVG interactive fallback pattern
      console.info("Hairline CDN module note: fallback background active.", err);
      renderHairlineFallback(targetEl);
    }
  }

  function renderHairlineFallback(container) {
    container.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none" style="opacity: 0.25;">
        <path d="M0,100 Q125,180 250,100 T500,100 V500 H0 Z" fill="none" stroke="#c9f36a" stroke-width="1.5" stroke-dasharray="4 4" />
        <path d="M0,200 Q125,280 250,200 T500,200 V500 H0 Z" fill="none" stroke="#c9f36a" stroke-width="1" />
        <path d="M0,300 Q125,380 250,300 T500,300 V500 H0 Z" fill="none" stroke="#c9f36a" stroke-width="0.75" />
      </svg>
    `;
  }

  initHairline();

  /* ==========================================================================
     4. NAVBAR AUTO-HIDE & SCROLL BEHAVIOR
     ========================================================================== */
  const header = document.getElementById("site-header");
  let lastScrollY = window.scrollY;
  const scrollThreshold = 16;
  let isMenuOpen = false;

  function updateNavbar(scrollY) {
    if (isMenuOpen) return;

    // Toggle border/backdrop class
    if (scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }

    // Hide / Show on scroll direction
    const delta = scrollY - lastScrollY;

    if (scrollY <= scrollThreshold) {
      header.classList.remove("is-hidden");
    } else if (delta > 8) {
      // Scrolling down
      header.classList.add("is-hidden");
    } else if (delta < -8) {
      // Scrolling up
      header.classList.remove("is-hidden");
    }

    lastScrollY = scrollY;
  }

  if (lenis) {
    lenis.on("scroll", (e) => {
      updateNavbar(e.scroll);
    });
  } else {
    window.addEventListener("scroll", () => {
      updateNavbar(window.scrollY);
    }, { passive: true });
  }

  /* ==========================================================================
     5. MOBILE NAVIGATION DRAWER & ACCESSIBILITY
     ========================================================================== */
  const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
  const mobileNavDrawer = document.getElementById("mobile-navigation");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link, .mobile-close-cta");

  function openMobileMenu() {
    isMenuOpen = true;
    mobileToggleBtn.setAttribute("aria-expanded", "true");
    mobileToggleBtn.setAttribute("aria-label", "Close navigation menu");
    mobileNavDrawer.setAttribute("aria-hidden", "false");
    mobileNavDrawer.classList.add("is-open");
    header.classList.remove("is-hidden");
    header.classList.add("menu-open");
    document.body.style.overflow = "hidden";
    if (lenis) lenis.stop();
  }

  function closeMobileMenu() {
    isMenuOpen = false;
    mobileToggleBtn.setAttribute("aria-expanded", "false");
    mobileToggleBtn.setAttribute("aria-label", "Open navigation menu");
    mobileNavDrawer.setAttribute("aria-hidden", "true");
    mobileNavDrawer.classList.remove("is-open");
    header.classList.remove("menu-open");
    document.body.style.overflow = "";
    if (lenis) lenis.start();
  }

  mobileToggleBtn.addEventListener("click", () => {
    if (isMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close drawer when clicking navigation links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) closeMobileMenu();
    });
  });

  // Close drawer on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      closeMobileMenu();
    }
  });

  /* ==========================================================================
     6. SERVICES CAROUSEL HORIZONTAL SCROLL CONTROLS
     ========================================================================== */
  const serviceTrack = document.getElementById("service-track");
  const prevBtn = document.getElementById("service-prev");
  const nextBtn = document.getElementById("service-next");

  if (serviceTrack && prevBtn && nextBtn) {
    const scrollAmount = 360;

    prevBtn.addEventListener("click", () => {
      serviceTrack.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      serviceTrack.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  /* ==========================================================================
     7. SMOOTH ANCHOR LINK INTERACTION
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(targetEl, { offset: -80 });
        } else {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* Active navigation section highlighting */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  function highlightActiveNav() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightActiveNav, { passive: true });
});

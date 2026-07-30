// =============================================================================
// EDGEHOLME — GLOBAL JS
// Nav, scroll animations, shared utilities
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {

  // — Navigation scroll effect
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // — Mobile menu
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
      // Animate bars
      const bars = hamburger.querySelectorAll('span');
      if (open) {
        bars[0].style.transform = 'rotate(45deg) translate(4px, 4.5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(4px, -4.5px)';
      } else {
        bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
      }
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.querySelectorAll('span').forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
      });
    });
  }

  // — Active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav__link, .nav__mobile .nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    } else if (href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
    }
  });

  // — Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // — Accordion
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
      // Open this one if it was closed
      if (!isOpen) item.classList.add('open');
    });
  });

  // — Newsletter form (Google Sheets endpoint)
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxwAnQYCICK73zLxX4E9LF5C88-dnLb2GgCXxFaqH7_VS8Y7IWxBSyo9j3M1V2nYwUG-Q/exec';

  document.querySelectorAll('.js-newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input   = form.querySelector('input[type="email"]');
      const btn     = form.querySelector('button');
      const success = form.nextElementSibling;
      const email   = input?.value.trim();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        input.style.borderColor = 'rgba(200,90,90,0.6)';
        input.focus();
        return;
      }

      const orig = btn.textContent;
      btn.textContent = '...';
      btn.disabled = true;

      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'email=' + encodeURIComponent(email),
      }).finally(() => {
        form.style.display = 'none';
        if (success) success.style.display = 'block';
      });
    });
  });

  // — Trade / Contact form validation (no backend — structured for later integration)
  document.querySelectorAll('.js-trade-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = form.querySelectorAll('[required]');
      let valid = true;

      required.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = 'rgba(200,90,90,0.5)';
          valid = false;
        }
      });

      if (!valid) {
        form.querySelector('[required]').focus();
        return;
      }

      const btn     = form.querySelector('[type="submit"]');
      const success = form.querySelector('.form-success');
      btn.textContent = 'Submitting...';
      btn.disabled = true;

      // TODO: POST to backend / Klaviyo / HubSpot when ready
      setTimeout(() => {
        form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(f => f.value = '');
        if (success) { success.style.display = 'block'; }
        btn.textContent = 'Application Received';
      }, 800);
    });
  });

});

// — Gallery component (used on product pages)
function initGallery() {
  const mainImg  = document.querySelector('.gallery__main img');
  const thumbs   = document.querySelectorAll('.gallery__thumb');
  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const src = thumb.querySelector('img')?.src;
      if (src) {
        mainImg.style.opacity = '0';
        setTimeout(() => { mainImg.src = src; mainImg.style.opacity = '1'; }, 180);
        mainImg.style.transition = 'opacity 0.18s ease';
      }
    });
  });
  if (thumbs[0]) thumbs[0].classList.add('active');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  initGallery();
}

/* ============================================================
   MYLA'S COLLECTIONS — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Loader ---- */
  window.addEventListener('load', function () {
    setTimeout(function () {
      var loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
    }, 1100);
  });

  /* ---- Navbar scroll state ---- */
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  function closeMenu() { links.classList.remove('open'); toggle.classList.remove('open'); }
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Contact form (demo handler) ---- */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('formNote');
      if (!form.name.value.trim() || !form.email.value.trim()) {
        form.reportValidity();
        return;
      }
      if (note) note.hidden = false;
      form.querySelector('button[type="submit"]').textContent = 'Sent ✦';
      setTimeout(function () { form.reset(); }, 400);
    });
  }

  /* ---- Footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

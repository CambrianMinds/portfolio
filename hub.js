/* hub.js — Theme persistence + a11y niceties for the portfolio hub.
 * No dependencies. Pairs with styles.css and index.html.
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio-theme';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var labelEl = toggle ? toggle.querySelector('[data-theme-label]') : null;

  function preferredTheme() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch (e) { /* localStorage unavailable */ }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    if (labelEl) {
      labelEl.textContent = theme === 'dark' ? 'Light' : 'Dark';
    }
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  // Apply on load (before paint via inline style is ideal, but this runs early enough)
  applyTheme(preferredTheme());

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* noop */ }
    });
  }
})();
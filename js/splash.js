// Intro splash shown once per visit on the landing page — dismisses on click or after a short delay.
(function () {
  const splash = document.getElementById('splash');
  if (!splash) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.style.overflow = 'hidden';

  function dismiss() {
    if (splash.classList.contains('hide')) return;
    splash.classList.add('hide');
    document.body.style.overflow = '';
    setTimeout(() => splash.remove(), reduceMotion ? 0 : 650);
  }

  splash.addEventListener('click', dismiss);
  document.addEventListener('keydown', dismiss, { once: true });
  setTimeout(dismiss, reduceMotion ? 0 : 2400);
})();

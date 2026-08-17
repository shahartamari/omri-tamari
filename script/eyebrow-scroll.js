document.addEventListener('DOMContentLoaded', function () {
  const eyebrow = document.querySelector('.hero-content .eyebrow');

  if (!eyebrow) return;

  const revealEyebrow = function () {
    if (eyebrow.getBoundingClientRect().top < window.innerHeight * 0.9) {
      eyebrow.classList.add('is-visible');
    }
  };

  revealEyebrow();
  window.addEventListener('scroll', revealEyebrow, { passive: true });
});

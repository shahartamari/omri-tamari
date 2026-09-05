document.addEventListener('DOMContentLoaded', function () {
  const eyebrow = document.querySelector('.hero-content .eyebrow');
  const headings = document.querySelectorAll('h2,h1');

  const revealVisibleElements = function () {
    if (eyebrow && eyebrow.getBoundingClientRect().top < window.innerHeight * 0.9) {
      eyebrow.classList.add('is-visible');
    }

    headings.forEach(function (heading) {
      if (heading.getBoundingClientRect().top < window.innerHeight * 0.9) {
        heading.classList.add('is-visible');
      }
    });
  };

  headings.forEach(function (heading) {
    heading.classList.add('heading-reveal');
  });

  revealVisibleElements();
  window.addEventListener('scroll', revealVisibleElements, { passive: true });
});

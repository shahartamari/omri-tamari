document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.home-slideshow').forEach(function (slideshow) {
    const images = slideshow.querySelectorAll('.home-slideshow__image');
    const prevButton = slideshow.querySelector('.home-slideshow__button.prev');
    const nextButton = slideshow.querySelector('.home-slideshow__button.next');
    let currentIndex = 0;
    let autoplayTimer;

    function showImage(index) {
      images.forEach(function (img, i) {
        img.classList.toggle('active', i === index);
      });
    }

    function restartAutoplay() {
      clearTimeout(autoplayTimer);
      autoplayTimer = setTimeout(function () {
        goTo(currentIndex + 1);
      }, 3000);
    }

    function goTo(index) {
      currentIndex = (index + images.length) % images.length;
      showImage(currentIndex);
      restartAutoplay();
    }

    prevButton.addEventListener('click', function () {
      goTo(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
      goTo(currentIndex + 1);
    });

    slideshow.addEventListener('mouseenter', function () {
      clearTimeout(autoplayTimer);
    });

    slideshow.addEventListener('mouseleave', restartAutoplay);

    goTo(0);
  });
});

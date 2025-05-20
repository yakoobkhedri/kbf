document.addEventListener('DOMContentLoaded', function() {
  const myCarousel = document.getElementById('carouselExampleIndicators');
  const nextButton = document.getElementById('nextButton');
  const carousel = new bootstrap.Carousel(myCarousel, { interval: false });

  myCarousel.addEventListener('slid.bs.carousel', function(event) {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const currentIndex = Array.from(document.querySelectorAll('.carousel-item')).indexOf(
      document.querySelector('.carousel-item.active')
    );

    // غیرفعال کردن دکمه "بعدی" اگر در آخرین اسلاید هستیم
    if (currentIndex === totalItems - 1) {
      nextButton.disabled = true;
      nextButton.classList.add('disabled');
    } else {
      nextButton.disabled = false;
      nextButton.classList.remove('disabled');
    }
  });
});
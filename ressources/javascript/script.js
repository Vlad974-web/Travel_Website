const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');

// Pour le menu
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
});

// Slide video navigation
  const sliderNav = function (manual) {
    // Quand tu click sur slide la couleur s'allume
    btns.forEach((btn) => {
      btn.classList.remove('active');
    })

    slides.forEach((slide) => {
      slide.classList.remove('active');
    })

    // Mettre couleur sur slide
  btns[manual].classList.add('active');
  slides[manual].classList.add('active');
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    sliderNav(i);
  });
});
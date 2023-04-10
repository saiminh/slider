/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const initSlider = () => {
  const sliders = document.querySelectorAll('.slider');
  if (sliders.length == 0) return;
  sliders.forEach(slider => {
    const sliderNext = slider.querySelector('.slider-control-next');
    const sliderPrev = slider.querySelector('.slider-control-prev');
    const slides = slider.querySelectorAll('.slide');
    let slideWidth = slides[0].offsetWidth;
    let fullWidth = slideWidth * slides.length;
    if (slides.length == 1) {
      sliderNext.style.display = 'none';
      sliderPrev.style.display = 'none';
    }
    sliderNext.addEventListener('click', () => {
      nextHandler(slider, slideWidth, fullWidth);
    });
    sliderPrev.addEventListener('click', () => {
      prevHandler(slider, slideWidth, fullWidth);
    });
    window.addEventListener('resize', () => {
      slideWidth = slides[0].offsetWidth;
      fullWidth = slideWidth * slides.length;
    });
  });
};
const nextHandler = (slider, slideWidth, fullWidth) => {
  let scrollX = slider.querySelector('.slider-slides').scrollLeft;
  if (scrollX + slideWidth < fullWidth) {
    slider.querySelector('.slider-slides').scrollTo({
      top: 0,
      left: scrollX + slideWidth,
      behavior: 'smooth'
    });
  } else {
    slider.querySelector('.slider-slides').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
};
const prevHandler = (slider, slideWidth, fullWidth) => {
  let scrollX = slider.querySelector('.slider-slides').scrollLeft;
  if (scrollX == 0) {
    slider.querySelector('.slider-slides').scrollTo({
      top: 0,
      left: fullWidth - slideWidth,
      behavior: 'smooth'
    });
  } else {
    slider.querySelector('.slider-slides').scrollTo({
      top: 0,
      left: scrollX - slideWidth,
      behavior: 'smooth'
    });
  }
};
document.addEventListener('DOMContentLoaded', function () {
  initSlider();
});
/******/ })()
;
//# sourceMappingURL=view.js.map
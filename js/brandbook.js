const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider__container');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let sliderIndex = 0;
const sliderSpeed = 300; // milliseconds

function moveSlider() {
  slider.style.transition = `transform ${sliderSpeed}ms ease-in-out`;
  slider.style.transform = `translateX(-${sliderIndex * 100}%)`;
}

function handleLeftArrowClick() {
  sliderIndex = Math.max(sliderIndex - 1, 0);
  moveSlider();
}

function handleRightArrowClick() {
  sliderIndex = Math.min(sliderIndex + 1, slider.children.length - 1);
  moveSlider();
}

leftArrow.addEventListener('click', handleLeftArrowClick);
rightArrow.addEventListener('click', handleRightArrowClick);

// Auto-slide every 5 seconds
// setInterval(() => {
//   handleRightArrowClick();
// }, 5000);
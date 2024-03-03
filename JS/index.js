// let index = 0;
// let transitionDelay = 2000;

// let sliderContainer = document.querySelector('.sliderContainer');
// let slides = sliderContainer.querySelectorAll('.slides');

// for(let slide of slides){
//     slide.style.transition = `all ${transitionDelay/1000}s linear`;
// }

// showSlide(index);

// function showSlide(slideNumber){
//     slides.forEach((slide, i)=>{
//         slide.style.display = i == slideNumber ? 'block' : 'none';
//     });
//     index++;

//     if(index >=  slides.length){
//         index = 0;
//     }
// }

// setInterval(()=> showSlide(index), transitionDelay);

const slider = document.querySelector('.sliderContainer');
const slides = slider.querySelectorAll('.slides');
 
// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;
 
// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
}, 2000);
const slider = document.querySelector('.slider');
const content = document.querySelector('.slider__content');
const control = document.querySelector('.control');
const BTN_SLIDER = document.querySelectorAll('.control__label');
const sliderLine = document.querySelector('.slider__images');
const btnCustom = document.querySelectorAll('.control__custom-btn');
const text = ['Лысый мужик!', 'Маленький мальчик!', 'Волк зимой!', 'Умный мужик!'];
const description = document.querySelector('.description');


BTN_SLIDER.forEach(btn => {
   btn.addEventListener('click', (event) => {
      if (event.target.classList.contains('one')) {
         sliderLine.style.transform = 'translateX(0%)';
         description.textContent = text[0];
      } else if (event.target.classList.contains('two')) {
         sliderLine.style.transform = 'translateX(-100%)';
         description.textContent = text[1];
      } else if (event.target.classList.contains('three')) {
         sliderLine.style.transform = 'translateX(-200%)';
         description.textContent = text[2];
      } else if (event.target.classList.contains('four')) {
         sliderLine.style.transform = 'translateX(-300%)';
         description.textContent = text[3];
      }
   })
})
let sliderControls = document.querySelectorAll('.discover__slider-controls span');
let sliderSlides = document.querySelectorAll('.discover__img');


// controls slider
sliderControls.forEach((el,index) => {
    el.addEventListener('click' , (e) => {

        // controls
        sliderControls.forEach((el2,index2) => {
            el2.classList.remove('discover__controls_active');

            sliderSlides[index2].classList.remove('discover__slider_active');
        })

        sliderControls[index].classList.add('discover__controls_active');
        sliderSlides[index].classList.add('discover__slider_active');
    })
})

// click slider
sliderSlides.forEach((el,index) => {
    el.addEventListener('click' , (e) => {
        
        // controls
        sliderControls.forEach((el2,index2) => {
            el2.classList.remove('discover__controls_active');

            sliderSlides[index2].classList.remove('discover__slider_active');
        })

        sliderControls[index].classList.add('discover__controls_active');
        sliderSlides[index].classList.add('discover__slider_active');
    })
})
//Slider for photos
let slideIndex = 1;

function displaySlides(n) {
    var slides = document.getElementsByClassName("showSlide");
    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex=slides.length;
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}

function nextSlide(n) {
    displaySlides(slideIndex += n);
}

function currentSlide(n) {
    displaySlides(slideIndex = n);
}

displaySlides(slideIndex);

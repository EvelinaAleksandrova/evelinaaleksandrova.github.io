let slideIndex = 1;
showSlides(slideIndex);

// plus slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//current
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    //DOM
    let review = document.getElementsByClassName("review");
    let dots = document.getElementsByClassName("dot");

    if (n > review.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = review.length
    }
    for (i = 0; i < review.length; i++) {
        review[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    review[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function() {
    sidebar.classList.add('active');
    menuBtn.classList.add('hidden'); // Fade out the menu button
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
    menuBtn.classList.remove('hidden'); // Fade in the menu button
});

const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('header-small');
    } else {
        header.classList.remove('header-small');
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Swipe functionality
let startX, endX;

const slideshowContainer = document.querySelector(".slideshow-container");

slideshowContainer.addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX; // Get the starting touch position
}, false);

slideshowContainer.addEventListener("touchend", function(event) {
    endX = event.changedTouches[0].clientX; // Get the ending touch position
    handleSwipe();
}, false);

function handleSwipe() {
    if (startX > endX + 50) {
        // Swiped left
        plusSlides(1);
    } else if (startX < endX - 50) {
        // Swiped right
        plusSlides(-1);
    }
}
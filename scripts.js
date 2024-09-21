document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');

    window.addEventListener('scroll', function() {
        var logo = document.querySelector('.logo');

        const header = document.getElementById('topHeader');
        if (window.scrollY > 500) {
            header.classList.add('solid');
            logo.src = 'img/logo-trans2.png';  // New logo image path
        } else {
            header.classList.remove('solid');
            logo.src = 'img/logo-white.png';

        }
    });

    window.addEventListener('scroll', function() {
        var logo = document.querySelector('.logo');
    
        // Check if the user has scrolled more than 500px
        if (window.scrollY > 500) {
            // Change the image source to a different logo

        } else {
            // Revert to the original logo if the user scrolls back up
        }
    });
    
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        let offset = 50;  // Adjust this value to your header height or preferred offset
        const targetPosition = target.getBoundingClientRect().top;
        
        if (this.getAttribute('href') === "#gallery") {
            offset = 80;  // Adjust this value to your preferred offset for the gallery
        }
        if (this.getAttribute('href') === "#services") {
            offset = -50;  // Adjust this value to your preferred offset for the gallery
        }

    
        const offsetPosition = targetPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

function scrollToContact() {
    const target = document.querySelector('#contact');
    const offset = 50;  // Adjust this value if needed
    const targetPosition = target.getBoundingClientRect().top;
    const offsetPosition = targetPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}


let currentSlideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function currentSlide(index) {
    const slides = document.querySelector('.slides');
    currentSlideIndex = index;
    slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveSlide(-1);
    } else if (event.key === 'ArrowRight') {
        moveSlide(1);
    }
});





////////////////////////////////////////////////
// JavaScript
$("#slider1-range").on("input change", (e) => {
    const sliderPos = e.target.value;
    $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`);
    $('.foreground-img').css('width', `${sliderPos}%`);
});

$("#slider2-range").on("input change", (e) => {
    const sliderPos = e.target.value;
    $('.slider-button2').css('left', `calc(${sliderPos}% - 18px)`);
    $('.foreground-img2').css('width', `${sliderPos}%`);
});

$("#slider3-range").on("input change", (e) => {
    const sliderPos = e.target.value;
    $('.slider-button3').css('left', `calc(${sliderPos}% - 18px)`);
    $('.foreground-img3').css('width', `${sliderPos}%`);
});

$("#slider4-range").on("input change", (e) => {
    const sliderPos = e.target.value;
    $('.slider-button4').css('left', `calc(${sliderPos}% - 18px)`);
    $('.foreground-img4').css('width', `${sliderPos}%`);
});

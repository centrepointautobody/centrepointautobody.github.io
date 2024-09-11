document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');

    window.addEventListener('scroll', function() {
        const header = document.getElementById('topHeader');
        if (window.scrollY > 500) {
            header.classList.add('solid');
        } else {
            header.classList.remove('solid');
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
        const offset = 100;  // Adjust this value to your header height or preferred offset
        const targetPosition = target.getBoundingClientRect().top;
        const offsetPosition = targetPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

function scrollToContact() {
    const target = document.querySelector('#contact');
    const offset = 100;  // Adjust this value if needed
    const targetPosition = target.getBoundingClientRect().top;
    const offsetPosition = targetPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

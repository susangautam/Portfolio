
window.addEventListener('scroll', function() {
  var scrollButton = document.getElementById('scroll-to-top');
  if (window.scrollY > 100) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});
//scroll button
document.getElementById('scroll-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  navbarToggle.addEventListener('click', function () {
      navbarMenu.classList.toggle('active');
  });

 
  const menuItems = navbarMenu.querySelectorAll('.link');
  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          navbarMenu.classList.remove('active');
      });
  });
});

function typeWriterEffect(element, texts, delay) {
let textIndex = 0;  
let charIndex = 0; 
let isDeleting = false;  
let currentText = '';  

function type() {
 
    const text = texts[textIndex];

 
    if (isDeleting) {
       
        currentText = text.substring(0, currentText.length - 1);
    } else {
        currentText = text.substring(0, charIndex + 1);
        charIndex++;
    }


    element.textContent = currentText;

    if (!isDeleting && currentText === text) {
        
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 1000); 
    } else if (isDeleting && currentText === '') {
      
        textIndex = (textIndex + 1) % texts.length;
        isDeleting = false;
        charIndex = 0;

       
        setTimeout(type, 100);  
    } else {
        
        setTimeout(type, delay);
    }
}

type();
}


const textElement = document.getElementById('typewriter-text');
const texts = ["Graphics Designer", "Web Developer"];
typeWriterEffect(textElement, texts, 100); 

function changeSlide(carouselId, direction) {
var carousel = document.getElementById(carouselId);
var slides = carousel.querySelectorAll("img");
var currentSlide = Array.from(slides).findIndex(slide => slide.style.display !== "none");

if (direction === 'next') {
    var nextSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "none";
    slides[nextSlide].style.display = "block";
} else if (direction === 'prev') {
    var prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = "none";
    slides[prevSlide].style.display = "block";
}
}


let buttons = document.querySelectorAll(".skill-btn");

for (var i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", (e) => {
  e.preventDefault();
  
  let overlay = document.createElement('span');
  overlay.classList.add("overlay");
  e.target.appendChild(overlay);
  
  let xValue = e.clientX - e.target.getBoundingClientRect().left;
  let yValue = e.clientY - e.target.getBoundingClientRect().top;
  
  overlay.style.left = xValue + "px";
  overlay.style.top = yValue + "px";
  
  setTimeout(() => {
    overlay.remove();
  }, 500);
});
}

let skillsButton = document.querySelectorAll(".skill-btn");
for (var i = 0; i < skillsButton.length; i++) {
skillsButton[i].addEventListener("click", (e)=>{
  e.preventDefault();
  let overlay = document.createElement('span');
  overlay.classList.add("overlay");
  e.target.appendChild(overlay);
  let xValue = e.clientX - e.target.offsetLeft;
  let yValue = e.clientY - e.target.offsetTop;
  overlay.style.left = xValue + "px";
  overlay.style.top = yValue + "px";
});
}

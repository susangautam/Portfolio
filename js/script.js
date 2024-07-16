
 window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 100) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  document.getElementById('scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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

function toggleDetails(projectId) {
    var projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}


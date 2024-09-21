document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const menu = document.querySelector(".nav .menu");
  const scrollButton = document.getElementById("scroll-to-top");

  if (openMenu && closeMenu && menu) {
      openMenu.addEventListener("click", () => {
          menu.style.display = "flex";
          openMenu.style.display = "none";
          closeMenu.style.display = "block";
      });

      closeMenu.addEventListener("click", () => {
          menu.style.display = "none";
          openMenu.style.display = "block";
          closeMenu.style.display = "none";
      });
  }

  if (scrollButton) {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
              scrollButton.style.opacity = "1";
              scrollButton.style.pointerEvents = "auto";
          } else {
              scrollButton.style.opacity = "0";
              scrollButton.style.pointerEvents = "none";
          }
      });

      scrollButton.addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }

  function typeWriterEffect(element, texts, delay) {
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let currentText = "";

      function type() {
          const text = texts[textIndex];
          if (isDeleting) {
              currentText = text.substring(0, charIndex--);
              element.textContent = currentText;
              if (charIndex < 0) {
                  isDeleting = false;
                  textIndex = (textIndex + 1) % texts.length;
                  setTimeout(type, delay);
              } else {
                  setTimeout(type, delay);
              }
          } else {
              currentText = text.substring(0, charIndex++);
              element.textContent = currentText;
              if (charIndex > text.length) {
                  isDeleting = true;
                  setTimeout(type, 1000);
              } else {
                  setTimeout(type, delay);
              }
          }
      }

      type();
  }

  const typewriterElement = document.getElementById("typewriter-text");
  if (typewriterElement) {
      typeWriterEffect(typewriterElement, ["Graphic Designer", "Web Developer"], 150);
  }

  const toggleBtn = document.getElementById("toggle-btn");
  const descriptionText = document.getElementById("description-text");

  if (toggleBtn && descriptionText) {
      toggleBtn.addEventListener("click", () => {
          const isExpanded = descriptionText.classList.toggle("expanded");
          toggleBtn.textContent = isExpanded ? "Read Less" : "Read More";
      });
  }

  document.querySelectorAll('.card-button').forEach(button => {
      button.addEventListener('click', function() {
          window.location.href = this.getAttribute('data-target');
      });
  });

  document.querySelectorAll(".skill-btn").forEach(button => {
      button.addEventListener("click", (e) => {
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
  });

  document.querySelectorAll('.timeline-content').forEach(content => {
      content.addEventListener('click', () => {
          document.querySelectorAll('.timeline-content').forEach(item => {
              item.classList.remove('active');
          });

          content.classList.add('active');
      });
  });

  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
  }
});

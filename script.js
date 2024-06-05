document.addEventListener("DOMContentLoaded", function () {
    const langElements = document.querySelectorAll(".lang");
  
    langElements.forEach(function (langElement) {
      langElement.addEventListener("click", function () {
        const lang = this.getAttribute("data-lang");
        window.location.href = lang + ".html";
      });
    });
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll(".hidden");
  
    hiddenElements.forEach((el) => observer.observe(el));
  });
  
  function navigate(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId.toLowerCase()); 
    section.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", "#" + sectionId.toLowerCase()); 
  
    // Sprawdzenie, czy sectionId to 'about', jeśli tak, usuń ten fragment z adresu URL
    if (sectionId.toLowerCase() === 'about') {
      history.replaceState(null, "", window.location.pathname); // Usunięcie fragmentu z adresu URL
    }
  }
  
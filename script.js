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
  
    // Usuń cały anchor z adresu URL
    history.pushState(null, "", window.location.pathname);
  }
  
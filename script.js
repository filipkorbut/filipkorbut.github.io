document.addEventListener("DOMContentLoaded", function() {
    const langElements = document.querySelectorAll(".lang");

    langElements.forEach(function(langElement) {
        langElement.addEventListener("click", function() {
            const lang = this.getAttribute("data-lang");
            window.location.href = lang + ".html";
        });
    });
});

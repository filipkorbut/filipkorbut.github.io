document.addEventListener("DOMContentLoaded", function() {
    const langElements = document.querySelectorAll(".lang");

    langElements.forEach(function(langElement) {
        langElement.addEventListener("click", function() {
            const lang = this.getAttribute("data-lang");
            window.location.href = lang;
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage.startsWith('pl')) {
        window.location.href = 'pl';
    } else {
        window.location.href = 'en';
    }
});

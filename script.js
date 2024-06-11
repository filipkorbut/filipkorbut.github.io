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
                const delay = entry.target.getAttribute('data-delay') || 0;
                entry.target.style.animationDelay = `${delay}s`;
                entry.target.classList.add("show");
                if (entry.target.classList.contains("hidden-jump")) {
                    void entry.target.offsetWidth;
                    entry.target.classList.add("animate");
                }
                if (entry.target.classList.contains("slide-left")) {
                    void entry.target.offsetWidth;
                    entry.target.classList.add("slide-in");
                }
            } else {
                entry.target.classList.remove("show");
                if (entry.target.classList.contains("hidden-jump")) {
                    entry.target.classList.remove("animate");
                }
                if (entry.target.classList.contains("slide-left")) {
                    entry.target.classList.remove("slide-in");
                }
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    const hiddenJump = document.querySelectorAll(".hidden-jump");
    const slideLeft = document.querySelectorAll(".slide-left");

    hiddenElements.forEach((el) => observer.observe(el));
    hiddenJump.forEach((el) => observer.observe(el));
    slideLeft.forEach((el) => observer.observe(el));
});

var userLang = navigator.language || navigator.userLanguage;
var urls = {
    'pl': 'http://filipkorbut.pl/pl',
    'en': 'http://filipkorbut.pl/en',
};
var defaultUrl = 'http://filipkorbut.pl/en';

var url = urls[userLang] ?? defaultUrl;
console.log(url);

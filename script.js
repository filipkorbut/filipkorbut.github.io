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

document.addEventListener("DOMContentLoaded", function () {
    const userLanguage = navigator.language || navigator.userLanguage;
    const currentPage = window.location.pathname;
    const storedLanguage = localStorage.getItem('preferredLanguage');

    if (storedLanguage) {
        if (storedLanguage === 'pl' && !currentPage.endsWith('/pl.html')) {
            window.location.href = 'pl.html';
        } else if (storedLanguage === 'en' && !currentPage.endsWith('/en.html')) {
            window.location.href = 'en.html';
        }
    } else {
        if (userLanguage.startsWith('pl') && !currentPage.endsWith('/pl.html')) {
            window.location.href = 'pl.html';
        } else if (!userLanguage.startsWith('pl') && !currentPage.endsWith('/en.html')) {
            window.location.href = 'en.html';
        }
    }

    const langElements = document.querySelectorAll(".lang");

    langElements.forEach(function (langElement) {
        langElement.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");
            localStorage.setItem('preferredLanguage', lang);
            window.location.href = lang + ".html";
        });
    });
});

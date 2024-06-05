document.addEventListener("DOMContentLoaded", function() {
    const langElements = document.querySelectorAll(".lang");

    langElements.forEach(function(langElement) {
        langElement.addEventListener("click", function() {
            const lang = this.getAttribute("data-lang");
            window.location.href = lang + ".html";
        });
    });
});
function navigate(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId.toLowerCase()); // Użyj toLowerCase(), aby dopasować identyfikator sekcji
    section.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', '#' + sectionId.toLowerCase()); // Użyj # przed identyfikatorem sekcji
}

window.addEventListener('popstate', function() {
    const hash = window.location.hash.slice(1); // Usuń pierwszy znak (#) z identyfikatora sekcji
    if (hash) {
        const section = document.getElementById(hash); // Nie potrzebujesz zmieniać wielkości liter tutaj
        section.scrollIntoView({ behavior: 'smooth' });
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');

        }
    }
)
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));
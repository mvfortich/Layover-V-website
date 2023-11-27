document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const slides = document.querySelectorAll(".slide");
    const prevSlideButton = document.querySelector(".prev-slide");
    const nextSlideButton = document.querySelector(".next-slide");

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        }
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevSlideButton.addEventListener("click", function() {
        currentIndex--;
        showSlide(currentIndex);
    });

    nextSlideButton.addEventListener("click", function() {
        currentIndex++;
        showSlide(currentIndex);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const verMasBtn = document.getElementById("ver-mas-btn");
    const biografiaCompleta = document.getElementById("biografia-completa");

    verMasBtn.addEventListener("click", function() {
        if (biografiaCompleta.style.display === "none") {
            biografiaCompleta.style.display = "block";
            verMasBtn.textContent = "Ver menos";
        } else {
            biografiaCompleta.style.display = "none";
            verMasBtn.textContent = "Ver más";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.querySelector(".hamburger-button");
    const desktopMenu = document.querySelector(".desktop-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburgerButton.addEventListener("click", function() {
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    });
});



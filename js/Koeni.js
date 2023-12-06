/***********************************************************************************/
/*                        StyleSheet of Black Mirror Tribute.html                  */
/*                        Author: Rafael Moncayo                                   */
/*                        version: 1.0                                             */
/*                        Comments: Project for Leng.Marcas-1ºDam                  */
/***********************************************************************************/

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
        slide.setAttribute("data-active", "");
        } else {
        slide.removeAttribute("data-active");
        }
    });
    }
    function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    }
    function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    }
    const interval = setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos (ajusta según sea necesario)
    document.querySelector("[data-carousel-button='prev']").addEventListener("click", () => {
    clearInterval(interval);
    prevSlide();
    });
    document.querySelector("[data-carousel-button='next']").addEventListener("click", () => {
    clearInterval(interval);
    nextSlide();
    });
});

/************************************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
    const introSection = document.getElementById("portada");
    const menu = document.getElementById("menu");
    const menuList = document.getElementById("menu-list");
    const burgerMenu = document.getElementById("burger-menu");
    const toggleButton = document.getElementById("toggle-menu");

    function adjustButtonPosition() {
        const scrollPosition = window.scrollY;
        toggleButton.style.top = (10 + scrollPosition) + "px"; // Ajusta según sea necesario
    }

    function toggleNavVisibility() {
        if (window.innerWidth >= 800) {
            const isBeforeIntroSection = window.scrollY < introSection.offsetTop + introSection.offsetHeight;
            menuList.classList.toggle("visible-menu", !isBeforeIntroSection);
            menu.classList.toggle("invisible-nav", isBeforeIntroSection);
        } else {
            menuList.classList.remove("visible-menu");
        }
    }

    function toggleButtonVisibility() {
        toggleButton.style.display = window.innerWidth < 800 ? "block" : "none";
    }

    toggleButtonVisibility();

    window.addEventListener("scroll", function () {
        toggleNavVisibility();
        adjustButtonPosition();
    });

    window.addEventListener("resize", function () {
        toggleNavVisibility();
        toggleButtonVisibility();
    });

    toggleButton.addEventListener("click", function (event) {
        event.stopPropagation();
        menuList.classList.toggle("visible-menu");
    });

    document.addEventListener("click", function (event) {
        const isClickInsideMenu = menuList.contains(event.target) || burgerMenu.contains(event.target);
        if (!isClickInsideMenu) {
            menuList.classList.remove("visible-menu");
        }
    });
});

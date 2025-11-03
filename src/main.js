import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
import './styles/style.scss';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';


const html = document.documentElement;
const currentTheme = localStorage.getItem("theme") || "light";
html.dataset.theme = currentTheme;

document.getElementById("navToggle").addEventListener("click", function() {
    document.querySelector(".navbar__nav").classList.toggle("open");
    this.classList.toggle("active");
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
    const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
    html.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1.3 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 5 },
    },
});

tippy('#preOrder', {
    content: 'Возможен предказ,<br> читать <a href="test"> подробнее</a<',
    // duration: 1000,
    allowHTML: true,
    hideOnClick: 'toggle',
    interactive: true,
});
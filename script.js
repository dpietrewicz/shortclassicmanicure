"use strict";

// const header = document.querySelector(".header");
// const nav = document.querySelector(".nav");
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//     const [entry] = entries;
//     // console.log(entry);

//     if (!entry.isIntersecting) nav.classList.add("sticky");
//     else nav.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//     root: null,
//     rootMargin: `-${navHeight}px`,
//     threshold: 0,
// });
// headerObserver.observe(header);



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBtn = document.querySelector(".nav-btn")

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBtn.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBtn.classList.remove("active");
}))

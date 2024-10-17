"use strict";

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    rootMargin: `-${navHeight}px`,
    threshold: 0,
});
headerObserver.observe(header);

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
});

window.addEventListener("scroll", () =>
{
    var header = document.querySelector("header");
    header.classList.toggle("scroll-color",window.scrollY>0);
})



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

const menulinks = document.querySelectorAll('.nav-menu a[href^="#"]' );
 menulinks.forEach(menulink => {
     menulink.addEventListener("click" , function(){
         navMenu.classList.remove("nav-menu-visible");
     })
 })



const hamburgerOpen = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const open = document.querySelector(".open");
const close = document.querySelector(".close");

function hamburger() {
    menu.classList.toggle("active");

    if(open.style.display !== "none") {
        open.style.display = "none";
        close.style.display = "block";
    } else {
        open.style.display = "block";
        close.style.display = "none";
    }

}
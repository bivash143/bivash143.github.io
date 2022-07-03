const hamburger = document.querySelector(".hamburger");
const navMenu1 = document.querySelector(".nav_item-1");
const navMenu2 = document.querySelector(".nav_item-3");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu1.classList.toggle("active");
    navMenu2.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n =>n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu1.classList.remove("active");
    navMenu2.classList.remove("active");
}))
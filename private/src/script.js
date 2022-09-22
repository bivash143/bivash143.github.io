const hamburger = document.querySelector(".hamburger");
const navMenu1 = document.querySelector(".nav_item-1");
const navMenu2 = document.querySelector(".nav_item-3");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu1.classList.toggle("active");
    navMenu2.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu1.classList.remove("active");
    navMenu2.classList.remove("active");
}))

const sendEamil = () => {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "bivashchakraborty554@gmail.com",
        Password: "khokhanmama",
        To: 'biraj1962c@gmail.com',
        From: document.getElementById("form_email").value,
        Subject: "Someone Wanted to contact you from website",
        Body: "Name: " + document.getElementById("form_name").value
            + "<br> Email: " + document.getElementById("form_email").value
            + "<br> Email: " + document.getElementById("form_text").value
    }).then(
        message => alert(message)
    );
}
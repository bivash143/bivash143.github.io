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
    let name = document.getElementById("form_name").value;
    let email = document.getElementById("form_email").value;
    let msg = document.getElementById("form_text").value;


    Email.send({
        SecureToken: "6d16b7b5-e9f7-47fa-ab28-f6390b9dd1fd",
        To: 'bivashchakraborty554@gmail.com',
        From: "hippop554@gmail.com",
        Subject: "Someone Wanted to contact you from website",
        Body: "Name: " + name + "<br> Email: " + email + "<br> Message: " + msg
    }).then(
        message => alert(message)
    );
}
document.addEventListener("DOMContentLoaded", function(event) {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
});

document.getElementById("signup-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
});

document.getElementById("login-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});



const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2500,
    delay: 200,
})

// sr.reveal(`.features`)
sr.reveal(`h1`, {origin: 'left'})

sr.reveal(`.mainmanu`, {origin: 'right'})

// sr.reveal(`.slideshow`, {origin: 'bottom'})
sr.reveal(`.slideshow`, {interval: 100})

sr.reveal(`.heroh2, .herop`, {origin: 'bottom'})

sr.reveal(`.contact-info, .social-media, .login-form, .feature`, {origin: 'bottom'})





















// Selektujte sve male slike
const thumbnails = document.querySelectorAll('.thumbnail');

// Selektujte veliku sliku
const mainImage = document.querySelector('.main-image img');

// Postavite događaj slušanja na svaku malu sliku
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Postavite veliku sliku na izabranu malu sliku
        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;
    });
});



// Recenzije
const reviewsList = document.getElementById("reviews-list");
const reviewForm = document.getElementById("review-form");

// Simulacija postojećih recenzija (možete koristiti stvarne podatke)
const existingReviews = [
    { name: "Ana", rating: 5, comment: "Odličan proizvod!" },
    { name: "Marko", rating: 4, comment: "Solidan kvalitet." }
];

// Prikaz postojećih recenzija
function displayReviews() {
    reviewsList.innerHTML = "";
    existingReviews.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${review.name}</strong> - Ocena: ${review.rating}<br>${review.comment}`;
        reviewsList.appendChild(li);
    });
}

// Dodavanje nove recenzije
reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("review-name").value;
    const rating = document.getElementById("review-rating").value;
    const comment = document.getElementById("review-comment").value;
    const newReview = { name, rating, comment };
    existingReviews.push(newReview);
    displayReviews();
    // Opciono: Pošaljite recenziju na server ili sačuvajte je na drugi način.
});

// Prikaz recenzija pri učitavanju stranice
window.addEventListener("load", displayReviews);






// Selektujemo dugme po ID-u
const myButton = document.getElementById("add-to-favorites");

// Pratimo da li je dugme kliknuto
let isButtonClicked = false;

// Dodajemo event listener za klik
myButton.addEventListener("click", function() {
    if (!isButtonClicked) {
        // Promenimo boju na klik
        myButton.style.Color = "red";
        // Postavljamo da je dugme kliknuto
        isButtonClicked = true;
    } else {
        // Vratimo početnu boju ako je ponovo kliknuto
        myButton.style.Color = "initial"; // Možete koristiti "transparent" umesto "initial" ako želite potpuno transparentnu boju.
        // Postavljamo da nije dugme kliknuto
        isButtonClicked = false;
    }
});



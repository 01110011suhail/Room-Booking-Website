document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get("id");

    const rooms = {
        1: { name: "Beach Paradise", location: "Miami, FL", price: "1050/night", image: "images/hotel1.jpg", description: "A beautiful beachfront stay." },
        2: { name: "Snowy Heights", location: "Aspen, CO", price: "2000/night", image: "images/hotel2.jpg", description: "A cozy retreat in the snowy mountains." },
        3: { name: "Empire Suites", location: "New York, NY", price: "1800/night", image: "images/hotel3.jpg", description: "Luxury living in the heart of NYC." },
        4: { name: "LA Grand Hotel", location: "Los Angeles, CA", price: "2500/night", image: "images/hotel4.jpg", description: "Experience grand luxury in LA." }
    };

    if (roomId && rooms[roomId]) {
        const room = rooms[roomId];
        document.getElementById("hotel-name").textContent = room.name;
        document.getElementById("hotel-location").textContent = `Location: ${room.location}`;
        document.getElementById("hotel-price").textContent = `Price: ${room.price}`;
        document.getElementById("hotel-description").textContent = `Description: ${room.description}`;
        document.getElementById("gallery-img").src = room.image;
    } else {
        document.querySelector(".hotel-info").innerHTML = "<h2>Room not found</h2>";
    }
});


let currentSlide = 0;
const images = [
    "images/hotel1.jpg",
    "images/hotel2.jpg",
    "images/hotel3.jpg",
    "images/hotel4.jpg",
    "images/hotel5.jpg",
    "images/hotel6.jpg",
    "images/hotel7.jpg",
    "images/hotel8.jpg",
    "images/hotel9.jpg",
    "images/hotel10.jpg",
    "images/hotel11.jpg",
    "images/hotel12.jpg",
    "images/hotel13.jpg",
    "images/hotel14.jpg",
    "images/hotel15.jpg",
    "images/hotel16.jpg",
    "images/hotel17.jpg",
    "images/hotel18.jpg",
    "images/hotel19.jpg",
    "images/hotel20.jpg"
];

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = images.length - 1; 
    } else if (currentSlide >= images.length) {
        currentSlide = 0; 
    }
    document.getElementById("gallery-img").src = images[currentSlide];
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get("id");

    const rooms = {
        1: { name: "Beach Paradise", location: "Miami, FL", price: "1050/night", image: "images/hotel1.jpg", description: "A beautiful beachfront stay." },
        2: { name: "Snowy Heights", location: "Aspen, CO", price: "2000/night", image: "images/hotel2.jpg", description: "A cozy retreat in the snowy mountains." },
        3: { name: "Empire Suites", location: "New York, NY", price: "1800/night", image: "images/hotel3.jpg", description: "Luxury living in the heart of NYC." },
        4: { name: "LA Grand Hotel", location: "Los Angeles, CA", price: "2500/night", image: "images/hotel4.jpg", description: "Experience grand luxury in LA." }
    };

    if (roomId && rooms[roomId]) {
        const room = rooms[roomId];
        document.getElementById("hotel-name").textContent = room.name;
        document.getElementById("hotel-location").textContent = `Location: ${room.location}`;
        document.getElementById("hotel-price").textContent = `Price: ${room.price}`;
        document.getElementById("hotel-description").textContent = `Description: ${room.description}`;
        document.getElementById("gallery-img").src = room.image;
    } else {
        document.querySelector(".hotel-info").innerHTML = "<h2>Room not found</h2>";
    }
});

document.getElementById("generate-bill").addEventListener("click", function () {
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const guests = document.getElementById("guests").value;
    const errorContainer = document.getElementById("error-message");
    const billModal = document.getElementById("bill-modal");
    const billContent = document.getElementById("bill-content");

    errorContainer.innerHTML = "";

    if (!checkIn) errorContainer.innerHTML += "<p>Please select a check-in date.</p>";
    if (!checkOut) errorContainer.innerHTML += "<p>Please select a check-out date.</p>";
    if (!guests || guests < 1) errorContainer.innerHTML += "<p>Please enter the number of guests.</p>";

    if (errorContainer.innerHTML !== "") return;

    const pricePerNight = 1000; 
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const nights = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const totalPrice = nights * pricePerNight * guests;

    billContent.innerHTML = `
        <p><strong>Hotel Name:</strong> XYZ Hotel</p>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Number of Nights:</strong> ${nights}</p>
        <p><strong>Price Per Night:</strong> ₹${pricePerNight}</p>
        <p><strong>Total Amount:</strong> ₹${totalPrice}</p>
    `;

    billModal.style.display = "block";

    document.getElementById("confirm-booking").setAttribute("data-message", 
        `Booking Details: 
        Hotel: XYZ Hotel
        Check-in: ${checkIn}
        Check-out: ${checkOut}
        Guests: ${guests}
        Nights: ${nights}
        Total Price: ₹${totalPrice}`);
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("bill-modal").style.display = "none";
});

document.getElementById("confirm-booking").addEventListener("click", function () {
    const message = this.getAttribute("data-message");
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/1234567890?text=${encodedMessage}`;
});



        

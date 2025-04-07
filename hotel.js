document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get("id");

    const rooms = {
        1: { 
            name: "Mercure Makkah Aziziah", 
            location: "6541 Koulliat Al Banat, Al Jamiah, Makkah 24243, Saudi Arabia", 
            price: "90 SAR /night", 
            images: [
                "images/hoteln1.jpg",
                "images/mercure1.jpg",
                "images/mercure2.jpg",
                "images/mercure4.jpg",
                "images/mercure5.jpg",
                "images/mercure6.jpg",
                "images/mercure7.jpg",
                "images/mercure8.jpg",
                "images/mercure9.jpg",
                "images/mercure10.jpg"
            ],
            description: "Experience the luxury in SA." 
        },
        2: { 
            name: "Violet Hotel", 
            location: "At Taif Road, Al Aziziyah, Mecca, Saudi Arabia, 24235", 
            price: "135 SAR /night", 
            images: [
                "images/voileth.jpg",

                "images/voilet1.jpg",
                "images/voilet2.jpg",
                "images/voilet3.jpg",
                "images/voilet4.jpg",
                "images/voilet5.jpg",
                "images/voilet6.jpg",
                "images/voilet7.jpg",
                "images/voilet8.jpg",
                "images/voilet9.jpg",
                "images/voilet10.jpg",
                "images/voilet11.jpg"
            ],
            description: "Experience  & enjoy the luxury stay in SA." 
        },
        3: { 
            name: "ATWAH Dar Al Sharif", 
            location: "Makkah Al-Mukarramah - Al-Aziziyah South, in front of Al-Muhaisni Traffic light.", 
            price: "130 SAR /night", 
            images: [
                "images/atwah1.jpg",
                "images/atwah2.jpg",
                "images/atwah3.jpg",
                "images/atwah4.jpg",
                "images/atwah5.jpg",
                "images/atwah6.jpg",
                "images/atwah7.jpg"
            ],
            description: "Experience the best View in SA." 
        },
        4: { 
            name: "Hotel ATWAH DAR AL BARKAWI", 
            location: "At Taif Road, Al Aziziyah, Mecca, Saudi Arabia, 24235", 
            price: "90 SAR /night", 
            images: [
                "images/ATWA1.jpg",
                "images/ATWA2.jpg",
                "images/ATWA3.jpg",
                "images/ATWA4.jpg",
                "images/ATWA5.jpg",
                "images/ATWA6.jpg"
            ],
            description: "experience the affordable best  in SA." 
        },
        5: { 
            name: "Fares Ajyad Hotel", 
            location: "CRCJ+GXC, King Abdul Aziz Rd, Ajyad, Makkah 24231, Saudi Arabia", 
            price: "200 SAR /night", 
            images: [
                "images/hoteln2.jpg",
                "images/Fares1.jpg",
                "images/Fares2.jpg",
                "images/Fares3.jpg",
                "images/Fares4.jpg",
                "images/Fares5.jpg",
                "images/Fares6.jpg",
                "images/Fares7.jpg",
                "images/Fares8.jpg",
                "images/Fares9.jpg"
            ],
            description: "experience the luxury in SA." 
        },

        // 1: { name: "Mercure Makkah Aziziah", location: "6541 Koulliat Al Banat, Al Jamiah, Makkah 24243, Saudi Arabia", price: "90 SAR /night", image: "images/hoteln1.jpg", description: "A beautiful beachfront stay." },
        // 2: { name: "Violet Hotel", location: "At Taif Road, Al Aziziyah, Mecca, Saudi Arabia, 24235", price: "135 SAR /night", image: "images/hoteln2.jpg", description: "A cozy retreat in the snowy mountains." },
        // 3: { name: "ATWAH Dar Al Sharif", location: "Makkah Al-Mukarramah - Al-Aziziyah South, in front of Al-Muhaisni Traffic light.", price: "130 SAR TRIPLE  /night", image: "images/hoteln3.jpg", description: "Luxury living in the heart of NYC." },
        // 4: { name: "Hotel ATWAH DAR AL BARKAWI", location: "Off All Sitten Street-Facing Prophet Masjid -King Fahd Gate(23), 30921 Medina, Saudi Arabia", price: "90 SAR/night", image: "images/hoteln4.jpg", description: "Experience grand luxury in LA." },
        // 5: { name: "Fares Ajyad Hotel", location: "CRCJ+GXC, King Abdul Aziz Rd, Ajyad, Makkah 24231, Saudi Arabia", price: "200 SAR/night", image: "images/hotel5.jpg", description: "Experience grand luxury in LA." }
    };

    if (roomId && rooms[roomId]) {
        const room = rooms[roomId];
        document.getElementById("hotel-name").textContent = room.name;
        document.getElementById("hotel-location").textContent = `Location: ${room.location}`;
        document.getElementById("hotel-price").textContent = `Price: ${room.price}`;
        document.getElementById("hotel-description").textContent = `Description: ${room.description}`;
        // document.getElementById("gallery-img").src = room.image;
    // } else {
    //     document.querySelector(".hotel-info").innerHTML = "<h2>Room not found</h2>";
    // }
    let currentSlide = 0;
    const galleryImg = document.getElementById("gallery-img");
    galleryImg.src = room.images[currentSlide];

     function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = room.images.length - 1; 
        } else if (currentSlide >= room.images.length) {
            currentSlide = 0; 
        }
        galleryImg.src = room.images[currentSlide];
    }

     document.querySelector(".prev").addEventListener("click", function() {
        changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        changeSlide(1);
    });
} else {
    document.querySelector(".hotel-info").innerHTML = "<h2>Room not found</h2>";
}
});
// let currentSlide = 0;
// const images = [
//     "images/hotel1.jpg",
//     "images/hotel2.jpg",
//     "images/hotel3.jpg",
//     "images/hotel4.jpg",
//     "images/hotel5.jpg",
//     "images/hotel6.jpg",
//     "images/hotel7.jpg",
//     "images/hotel8.jpg",
//     "images/hotel9.jpg",
//     "images/hotel10.jpg",
//     "images/hotel11.jpg",
//     "images/hotel12.jpg",
//     "images/hotel13.jpg",
//     "images/hotel14.jpg",
//     "images/hotel15.jpg",
//     "images/hotel16.jpg",
//     "images/hotel17.jpg",
//     "images/hotel18.jpg",
//     "images/hotel19.jpg",
//     "images/hotel20.jpg"
// ];

// function changeSlide(direction) {
//     currentSlide += direction;
//     if (currentSlide < 0) {
//         currentSlide = images.length - 1; 
//     } else if (currentSlide >= images.length) {
//         currentSlide = 0; 
//     }
//     document.getElementById("gallery-img").src = images[currentSlide];
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const params = new URLSearchParams(window.location.search);
//     const roomId = params.get("id");

//     const rooms = {
//         1: { name: "Mercure Makkah Aziziah", location: "6541 Koulliat Al Banat, Al Jamiah, Makkah 24243, Saudi Arabia", price: "90 SAR /night", image: "images/hoteln1.jpg", description: "A beautiful beachfront stay." },
//         2: { name: "Violet Hotel", location: "At Taif Road, Al Aziziyah, Mecca, Saudi Arabia, 24235", price: "135 SAR /night", image: "images/hoteln2.jpg", description: "A cozy retreat in the snowy mountains." },
//         3: { name: "ATWAH Dar Al Sharif", location: "Makkah Al-Mukarramah - Al-Aziziyah South, in front of Al-Muhaisni Traffic light.", price: "130 SAR TRIPLE  /night", image: "images/hoteln3.jpg", description: "Luxury living in the heart of NYC." },
//         4: { name: "Hotel ATWAH DAR AL BARKAWI", location: "Off All Sitten Street-Facing Prophet Masjid -King Fahd Gate(23), 30921 Medina, Saudi Arabia", price: "90 SAR/night", image: "images/hoteln4.jpg", description: "Experience grand luxury in LA." },
//         5: { name: "Fares Ajyad Hotel", location: "CRCJ+GXC, King Abdul Aziz Rd, Ajyad, Makkah 24231, Saudi Arabia", price: "200 SAR/night", image: "images/hotel5.jpg", description: "Experience grand luxury in LA." }
//     };

//     if (roomId && rooms[roomId]) {
//         const room = rooms[roomId];
//         document.getElementById("hotel-name").textContent = room.name;
//         document.getElementById("hotel-location").textContent = `Location: ${room.location}`;
//         document.getElementById("hotel-price").textContent = `Price: ${room.price}`;
//         document.getElementById("hotel-description").textContent = `Description: ${room.description}`;
        
//         // Initialize the gallery with the first image
//         document.getElementById("gallery-img").src = room.images[0];

//         // Set up the gallery navigation
//         setupImageGallery(room.images);
//     } else {
//         document.querySelector(".hotel-info").innerHTML = "<h2>Room not found</h2>";
//     }
// });


// let currentSlide = 0;

// function setupImageGallery(images) {
//     const galleryImg = document.getElementById("gallery-img");
//     const totalImages = images.length;

//     // Function to change the slide
//     function changeSlide(direction) {
//         currentSlide += direction;
//         if (currentSlide < 0) {
//             currentSlide = totalImages - 1; 
//         } else if (currentSlide >= totalImages) {
//             currentSlide = 0; 
//         }
//         galleryImg.src = images[currentSlide];
//     }

//     // Set up event listeners for the previous and next buttons
//     document.getElementById("prev-btn").addEventListener("click", function() {
//         changeSlide(-1);
//     });

//     document.getElementById("next-btn").addEventListener("click", function() {
//         changeSlide(1);
//     });
// }
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
        Total Price: ₹SAR{totalPrice}`);
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("bill-modal").style.display = "none";
});

document.getElementById("confirm-booking").addEventListener("click", function () {
    const message = this.getAttribute("data-message");
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/1234567890?text=${encodedMessage}`;
});




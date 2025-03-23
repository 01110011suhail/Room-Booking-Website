document.addEventListener("DOMContentLoaded", function () {
    // Get Room ID from URL
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get("id");

    // Room Data (You can replace this with API call)
    const rooms = {
        1: { name: "Beach Paradise", location: "Miami, FL", price: "1050/night", image: "images/hotel1.jpg", description: "A beautiful beachfront stay." },
        2: { name: "Snowy Heights", location: "Aspen, CO", price: "2000/night", image: "images/hotel2.jpg", description: "A cozy retreat in the snowy mountains." },
        3: { name: "Empire Suites", location: "New York, NY", price: "1800/night", image: "images/hotel3.jpg", description: "Luxury living in the heart of NYC." },
        4: { name: "LA Grand Hotel", location: "Los Angeles, CA", price: "2500/night", image: "images/hotel4.jpg", description: "Experience grand luxury in LA." }
    };

    // Display Room Data if Found
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

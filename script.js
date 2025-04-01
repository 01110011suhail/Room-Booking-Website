document.addEventListener("DOMContentLoaded", function () {
    function filterRooms() {
        let searchInput = document.getElementById('searchInput')?.value.toLowerCase().trim() || "";
        let locationFilter = document.getElementById('locationFilter')?.value.toLowerCase().trim() || "";
        let priceFilter = document.getElementById('priceFilter')?.value || "";
        
        let rooms = document.querySelectorAll('.room-item');
        console.log("Total rooms found:", rooms.length); 

        rooms.forEach(room => {
            let location = (room.getAttribute('data-location') || "").toLowerCase().trim();
            let price = parseInt(room.getAttribute('data-price')) || 0;
            let name = (room.querySelector('h2')?.textContent || "").toLowerCase().trim();

            let locationMatch = !locationFilter || location.includes(locationFilter);
            let priceMatch = !priceFilter || 
                            (priceFilter === "1000" && price < 1000) ||
                            (priceFilter === "2000" && price >= 1000 && price <= 2000) ||
                            (priceFilter === "3000" && price > 2000);
            let searchMatch = name.includes(searchInput);

            room.style.display = (locationMatch && priceMatch && searchMatch) ? "block" : "none";
        });
    }

    document.getElementById('locationFilter')?.addEventListener('change', filterRooms);
    document.getElementById('priceFilter')?.addEventListener('change', filterRooms);

    function setupScrollButtons(containerId, leftBtnClass, rightBtnClass) {
        const scrollContainer = document.getElementById(containerId);
        const scrollLeftBtn = document.querySelector(leftBtnClass);
        const scrollRightBtn = document.querySelector(rightBtnClass);

        if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
            const scrollAmount = 300;

            scrollLeftBtn.addEventListener("click", function () {
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });

            scrollRightBtn.addEventListener("click", function () {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        }
    }

    setupScrollButtons("room-listing", ".scroll-left", ".scroll-right");
    setupScrollButtons("room-listing-2", ".scroll-left", ".scroll-right");
});


function filterRooms() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let rooms = document.querySelectorAll(".room-item");

    rooms.forEach(room => {
        let hotelName = room.querySelector("h2").innerText.toLowerCase();
        let location = room.querySelector("p:nth-of-type(1)").innerText.toLowerCase();

        if (hotelName.includes(searchInput) || location.includes(searchInput)) {
            room.style.display = "block"; 
        } else {
            room.style.display = "none"; 
        }
    });
}

document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        filterRooms();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const hotels = [
        { name: "Luxury Mecca Stay", location: "Mecca, Saudi Arabia", url: "hotel.html?id=9" },
        { name: "Hotel Sunshine", location: "Mumbai, India", url: "hotel.html?id=1" },
        { name: "Mountain Retreat", location: "Pune, India", url: "hotel.html?id=2" },
        { name: "City Center Inn", location: "Mumbai, India", url: "hotel.html?id=3" },
        { name: "LA Grand Hotel", location: "Bengaluru, India", url: "hotel.html?id=4" },
        { name: "Beach Paradise", location: "Goa, India", url: "hotel.html?id=5" },
        { name: "Snowy Heights", location: "Hyderabad, India", url: "hotel.html?id=6" }
    ];

    function searchHotels() {
        let searchInput = document.getElementById("searchInput").value.toLowerCase();
        let searchResults = document.getElementById("searchResults");

        searchResults.innerHTML = "";
        searchResults.style.display = "none";

        if (searchInput.length === 0) return;

        let filteredHotels = hotels.filter(hotel =>
            hotel.name.toLowerCase().includes(searchInput) ||
            hotel.location.toLowerCase().includes(searchInput)
        );

        if (filteredHotels.length > 0) {
            searchResults.style.display = "block";
            filteredHotels.forEach(hotel => {
                let div = document.createElement("div");
                div.textContent = `${hotel.name} - ${hotel.location}`;
                div.onclick = () => window.location.href = hotel.url;
                searchResults.appendChild(div);
            });
        }
    }

    document.getElementById("searchInput").addEventListener("keyup", searchHotels);

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".search-container")) {
            document.getElementById("searchResults").style.display = "none";
        }
    });
});

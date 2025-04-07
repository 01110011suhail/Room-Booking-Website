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
            const scrollAmount = 350;

            scrollLeftBtn.addEventListener("click", function () {
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });

            scrollRightBtn.addEventListener("click", function () {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        }
    }

    setupScrollButtons("room-listing-1", ".scroll-left", ".scroll-right");
    // setupScrollButtons("room-listing-2", ".scroll-left", ".scroll-right");
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

// document.getElementById("searchInput").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         filterRooms();
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    const hotels = [
        { name: "Mercure Makkah Aziziah", location: "6541 Koulliat Al Banat, Al Jamiah, Makkah 24243, Saudi Arabia", url: "hotel.html?id=9" },
        { name: "Violet Hotel", location: "At Taif Road, Al Aziziyah, Mecca, Saudi Arabia, 24235", url: "hotel.html?id=1" },
        { name: "ATWAH Dar Al Sharif", location: "Makkah Al-Mukarramah - Al-Aziziyah South, in front of Al-Muhaisni Traffic light.", url: "hotel.html?id=2" },
        { name: "Hotel ATWAH DAR AL BARKAWI", location: "Off All Sitten Street-Facing Prophet Masjid -King Fahd Gate(23), 30921 Medina, Saudi Arabia", url: "hotel.html?id=3" },
        { name: "Fares Ajyad Hotel", location: "CRCJ+GXC, King Abdul Aziz Rd, Ajyad, Makkah 24231, Saudi Arabia", url: "hotel.html?id=4" },
    ];

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
        "images/hotel14.jpg"
    ];

    const initialImagesToShow = 3;
    const totalImages = images.length;
    const remainingImages = totalImages - initialImagesToShow;

    const remainingImagesText = document.getElementById("remaining-images-text");
    if (remainingImagesText) {
        remainingImagesText.textContent = `Show More Images (+${remainingImages})`;
    }

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

    function setupScrollButtons(containerId, leftBtnClass, rightBtnClass) {
        const scrollContainer = document.getElementById(containerId);
        const scrollLeftBtn = document.querySelector(leftBtnClass);
        const scrollRightBtn = document.querySelector(rightBtnClass);

        if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
            const scrollAmount = 350;

            scrollLeftBtn.addEventListener("click", function (event) {
                event.preventDefault();

                scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });

            scrollRightBtn.addEventListener("click", function (event) {
                event.preventDefault();


                scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        }
    }

    setupScrollButtons("room-listing-2", ".scroll-left", ".scroll-right");
});

function openModal(src) {
    const modal = document.getElementById("myModal");
    const mainImage = modal.querySelector('.modal-content img');
    if (src) {
        mainImage.src = src; 
    } else {
        mainImage.src = ''; 
    }
    modal.style.display = "flex"; 
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

//checking

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    // Function to open the sidebar
    menuToggle.addEventListener('click', function() {
        sidebar.style.left = '0'; // Show sidebar
        overlay.style.display = 'block'; // Show overlay
    });

    // Function to close the sidebar
    closeBtn.addEventListener('click', function() {
        sidebar.style.left = '-250px'; // Hide sidebar
        overlay.style.display = 'none'; // Hide overlay
    });

    // Close sidebar when clicking on the overlay
    overlay.addEventListener('click', function() {
        sidebar.style.left = '-250px'; // Hide sidebar
        overlay.style.display = 'none'; // Hide overlay
    });
});
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

// ==========================================
// AHMEDABAD EATS - COMPLETE SCRIPT.JS
// 15 RESTAURANTS + SEARCH + FILTER + CART
// ==========================================


// ==========================================
// 1. RESTAURANT DATA
// ==========================================

const restaurants = [
    {
        id: 1,
        name: "Agashiye",
        cuisine: "Gujarati",
        rating: "4.6",
        time: "35 mins",
        price: "₹800+ for two",
        address: "The House of MG, Sidi Saiyyed Mosque, Lal Darwaja, Ahmedabad - 380001",
        phone: "+91 79 2550 6946",
        mapUrl: "https://www.google.com/maps?q=Agashiye+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 450 },
            { name: "Farsan", price: 150 },
            { name: "Gujarati Sweet", price: 120 }
        ]
    },

    {
        id: 2,
        name: "Swati Snacks",
        cuisine: "Gujarati, Vegetarian",
        rating: "4.5",
        time: "30 mins",
        price: "₹600+ for two",
        address: "Panchavati Road, Law Garden, Ahmedabad - 380006",
        phone: "+91 79 2640 5900",
        mapUrl: "https://www.google.com/maps?q=Swati+Snacks+Law+Garden+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800&q=80",
        menu: [
            { name: "Panki Chutney", price: 275 },
            { name: "Handvo", price: 295 },
            { name: "Pav Bhaji", price: 350 },
            { name: "Dahi Sev Puri", price: 220 },
            { name: "Shrikhand", price: 175 }
        ]
    },

    {
        id: 3,
        name: "Rajwadu",
        cuisine: "Gujarati, Traditional",
        rating: "4.4",
        time: "40 mins",
        price: "₹400–₹1,200",
        address: "Nr. Jivraj Tolnaka, Behind Ambaji Temple, Malav Talav, Ahmedabad - 380007",
        phone: "+91 99785 05653",
        mapUrl: "https://www.google.com/maps?q=Rajwadu+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
        menu: [
            { name: "Rajwadu Unlimited Thali", price: 575 },
            { name: "Gujarati Farsan", price: 150 },
            { name: "Rotla", price: 100 }
        ]
    },

    {
        id: 4,
        name: "Vishalla",
        cuisine: "Gujarati",
        rating: "4.2",
        time: "40 mins",
        price: "₹800–₹1,200",
        address: "Opp. APMC Market, Vishala Circle, Vasna, Ahmedabad - 380055",
        phone: "+91 82005 43694",
        mapUrl: "https://www.google.com/maps?q=Vishalla+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 450 },
            { name: "Rotla", price: 120 },
            { name: "Chaas", price: 60 }
        ]
    },

    {
        id: 5,
        name: "Gordhan Thal",
        cuisine: "Gujarati",
        rating: "4.4",
        time: "35 mins",
        price: "₹200–₹400",
        address: "Sapath Complex, Sarkhej-Gandhinagar Highway, Bodakdev, Ahmedabad - 380015",
        phone: "+91 79 2687 1222",
        mapUrl: "https://www.google.com/maps?q=Gordhan+Thal+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 350 },
            { name: "Farsan", price: 120 },
            { name: "Shrikhand", price: 120 }
        ]
    },

    {
        id: 6,
        name: "Iscon Thal",
        cuisine: "Gujarati",
        rating: "4.8",
        time: "30 mins",
        price: "₹200–₹400",
        address: "SF-1, Rudra Applis, Iscon Cross Road, Ahmedabad - 380059",
        phone: "+91 88661 93093",
        mapUrl: "https://www.google.com/maps?q=Iscon+Thal+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 350 },
            { name: "Paneer Sabji", price: 180 },
            { name: "Dal Rice", price: 150 }
        ]
    },

    {
        id: 7,
        name: "650 - The Global Kitchen",
        cuisine: "Vegetarian, Multi Cuisine",
        rating: "4.4",
        time: "35 mins",
        price: "₹400–₹800",
        address: "Shreekunj Mandapam, Ahmedabad - 380015",
        phone: "+91 98240 90111",
        mapUrl: "https://www.google.com/maps?q=650+The+Global+Kitchen+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&q=80",
        menu: [
            { name: "Paneer Tikka", price: 240 },
            { name: "Dal Tadka", price: 180 },
            { name: "Veg Biryani", price: 220 }
        ]
    },

    {
        id: 8,
        name: "Under The Neem Trees",
        cuisine: "Indian",
        rating: "4.5",
        time: "40 mins",
        price: "₹800–₹2,000",
        address: "Opp. Mahila Municipal Garden, Rajpath Rangoli Road, Bodakdev, Ahmedabad - 380059",
        phone: "+91 97254 38230",
        mapUrl: "https://www.google.com/maps?q=Under+The+Neem+Trees+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        menu: [
            { name: "Paneer Tikka", price: 280 },
            { name: "Dal Makhani", price: 240 },
            { name: "Butter Naan", price: 70 }
        ]
    },

    {
        id: 9,
        name: "Spiceville Restaurant",
        cuisine: "North Indian",
        rating: "4.8",
        time: "35 mins",
        price: "₹400–₹1,400",
        address: "Hotel Nalanda, Mithakhali Six Road, Ellisbridge, Ahmedabad - 380006",
        phone: "+91 79 2642 6262",
        mapUrl: "https://www.google.com/maps?q=Spiceville+Restaurant+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
        menu: [
            { name: "Paneer Tikka", price: 280 },
            { name: "Butter Chicken", price: 340 },
            { name: "Garlic Naan", price: 90 }
        ]
    },

    {
        id: 10,
        name: "Rotlo Gujarati Rasthal",
        cuisine: "Gujarati, Kathiyawadi",
        rating: "4.5",
        time: "30 mins",
        price: "₹200–₹400",
        address: "FF-136/137, Himalaya Arcade A, Vastrapur, Ahmedabad - 380015",
        phone: "+91 95107 29842",
        mapUrl: "https://www.google.com/maps?q=Rotlo+Gujarati+Rasthal+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        menu: [
            { name: "Bajra Rotla", price: 100 },
            { name: "Sev Tameta", price: 150 },
            { name: "Kathiyawadi Thali", price: 300 }
        ]
    },

    {
        id: 11,
        name: "The Grand Thakar",
        cuisine: "Gujarati",
        rating: "4.3",
        time: "35 mins",
        price: "₹200–₹400",
        address: "101, Dev Arc Commercial Complex, Iscon Cross Road, Ahmedabad - 380015",
        phone: "+91 96628 02220",
        mapUrl: "https://www.google.com/maps?q=The+Grand+Thakar+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 350 },
            { name: "Farsan", price: 120 },
            { name: "Basundi", price: 120 }
        ]
    },

    {
        id: 12,
        name: "Earthen Oven",
        cuisine: "North Indian",
        rating: "4.4",
        time: "35 mins",
        price: "₹500–₹1,000",
        address: "Fortune Landmark, Ashram Road, Ahmedabad - 380013",
        phone: "+91 79 6682 4444",
        mapUrl: "https://www.google.com/maps?q=Earthen+Oven+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
        menu: [
            { name: "Tandoori Paneer", price: 320 },
            { name: "Dal Makhani", price: 280 },
            { name: "Naan", price: 80 }
        ]
    },

    {
        id: 13,
        name: "Tinello",
        cuisine: "Italian, International",
        rating: "4.3",
        time: "40 mins",
        price: "₹1,000+ for two",
        address: "Hyatt Regency Ahmedabad, 17/A Ashram Road, Usmanpura, Ahmedabad - 380009",
        phone: "+91 94267 68480",
        mapUrl: "https://www.google.com/maps?q=Tinello+Hyatt+Regency+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
        menu: [
            { name: "Pasta", price: 450 },
            { name: "Pizza", price: 500 },
            { name: "Dessert", price: 300 }
        ]
    },

    {
        id: 14,
        name: "Bluez Restaurant",
        cuisine: "North Indian",
        rating: "4.1",
        time: "35 mins",
        price: "₹500–₹1,000",
        address: "Supermall, C.G. Road, near Lal Bungalow, Ellisbridge, Ahmedabad - 380006",
        phone: "+91 88988 58988",
        mapUrl: "https://www.google.com/maps?q=Bluez+Restaurant+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        menu: [
            { name: "Paneer Tikka", price: 260 },
            { name: "Veg Biryani", price: 240 },
            { name: "Butter Naan", price: 70 }
        ]
    },

    {
        id: 15,
        name: "Rangeen",
        cuisine: "Modern Indian",
        rating: "4.5",
        time: "40 mins",
        price: "₹400–₹1,200",
        address: "Shreekunj Mandapam, Ahmedabad - 380015",
        phone: "+91 90815 55577",
        mapUrl: "https://www.google.com/maps?q=Rangeen+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        menu: [
            { name: "Modern Indian Starter", price: 320 },
            { name: "Paneer Main Course", price: 380 },
            { name: "Dessert", price: 220 }
        ]
    }
];


// ==========================================
// 2. APPLICATION STATE
// ==========================================

let cart = [];


// ==========================================
// 3. FILTER STATE
// ==========================================

let filters = {
    search: "",
    cuisine: "all",
    price: "all",
    rating: "all"
};


// ==========================================
// 4. RENDER RESTAURANTS
// ==========================================

function renderRestaurants() {

    const container = document.getElementById("restaurant-list");

    if (!container) return;

    container.innerHTML = "";

    const filteredRestaurants = restaurants.filter(rest => {

        // Search
        const searchMatch =
            rest.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            rest.cuisine.toLowerCase().includes(filters.search.toLowerCase()) ||
            rest.address.toLowerCase().includes(filters.search.toLowerCase());

        // Cuisine
        const cuisineMatch =
            filters.cuisine === "all" ||
            rest.cuisine.toLowerCase().includes(filters.cuisine.toLowerCase());

        // Rating
        const ratingMatch =
            filters.rating === "all" ||
            parseFloat(rest.rating) >= parseFloat(filters.rating);

        // Price
        const priceMatch = checkPrice(rest.price, filters.price);

        return searchMatch && cuisineMatch && ratingMatch && priceMatch;
    });


    // No results
    if (filteredRestaurants.length === 0) {

        container.innerHTML = `
            <div class="no-results">
                <h2>😔 No restaurants found</h2>
                <p>Try changing your search or filters.</p>
            </div>
        `;

        return;
    }


    // Restaurant Cards
    filteredRestaurants.forEach(rest => {

        container.innerHTML += `

            <div class="card">

                <img
                    src="${rest.image}"
                    alt="${rest.name}"
                    loading="lazy"
                >

                <div class="card-info">

                    <h3>${rest.name}</h3>

                    <p class="cuisine">
                        ${rest.cuisine}
                    </p>

                    <p class="details">
                        ⏱️ ${rest.time} • ${rest.price}
                    </p>

                    <div class="card-bottom">

                        <span class="rating">
                            ★ ${rest.rating}
                        </span>

                        <button
                            class="btn-details"
                            onclick="openDetails(${rest.id})"
                        >
                            Details
                        </button>

                        <button
                            class="btn-menu"
                            onclick="openMenu(${rest.id})"
                        >
                            Menu
                        </button>

                    </div>

                </div>

            </div>

        `;
    });
}


// ==========================================
// 5. PRICE FILTER
// ==========================================

function checkPrice(priceText, selectedPrice) {

    if (selectedPrice === "all") {
        return true;
    }

    const numbers = priceText.match(/[\d,]+/g);

    if (!numbers) {
        return true;
    }

    const firstPrice =
        parseInt(numbers[0].replace(/,/g, ""));

    if (selectedPrice === "low") {
        return firstPrice <= 400;
    }

    if (selectedPrice === "medium") {
        return firstPrice > 400 && firstPrice <= 800;
    }

    if (selectedPrice === "high") {
        return firstPrice > 800;
    }

    return true;
}


// ==========================================
// 6. SEARCH
// ==========================================

function setupSearch() {

    const searchInput =
        document.getElementById("search-input");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        filters.search = this.value.trim();

        renderRestaurants();

    });
}


// ==========================================
// 7. CUISINE FILTER
// ==========================================

function setupCuisineFilter() {

    const cuisineFilter =
        document.getElementById("cuisine-filter");

    if (!cuisineFilter) return;

    cuisineFilter.addEventListener("change", function () {

        filters.cuisine = this.value;

        renderRestaurants();

    });
}


// ==========================================
// 8. PRICE FILTER
// ==========================================

function setupPriceFilter() {

    const priceFilter =
        document.getElementById("price-filter");

    if (!priceFilter) return;

    priceFilter.addEventListener("change", function () {

        filters.price = this.value;

        renderRestaurants();

    });
}


// ==========================================
// 9. RATING FILTER
// ==========================================

function setupRatingFilter() {

    const ratingFilter =
        document.getElementById("rating-filter");

    if (!ratingFilter) return;

    ratingFilter.addEventListener("change", function () {

        filters.rating = this.value;

        renderRestaurants();

    });
}


// ==========================================
// 10. RESET FILTERS
// ==========================================

function resetFilters() {

    filters = {
        search: "",
        cuisine: "all",
        price: "all",
        rating: "all"
    };


    const search =
        document.getElementById("search-input");

    const cuisine =
        document.getElementById("cuisine-filter");

    const price =
        document.getElementById("price-filter");

    const rating =
        document.getElementById("rating-filter");


    if (search) search.value = "";

    if (cuisine) cuisine.value = "all";

    if (price) price.value = "all";

    if (rating) rating.value = "all";


    renderRestaurants();
}


// ==========================================
// 11. MENU MODAL
// ==========================================

function openMenu(id) {

    const restaurant =
        restaurants.find(r => r.id === id);

    if (!restaurant) return;


    const title =
        document.getElementById("modal-rest-name");

    const items =
        document.getElementById("modal-menu-items");


    if (!title || !items) return;


    title.innerText =
        `${restaurant.name} - Menu`;


    items.innerHTML = "";


    restaurant.menu.forEach(item => {

        items.innerHTML += `

            <div class="menu-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <br>

                    <small style="color:#94a3b8">
                        ₹${item.price}
                    </small>

                </div>

                <button
                    class="add-btn"
                    onclick="addToCart('${item.name}', ${item.price})"
                >
                    + Add
                </button>

            </div>

        `;
    });


    document.getElementById("menu-modal").style.display =
        "flex";
}


function closeMenu() {

    const modal =
        document.getElementById("menu-modal");

    if (modal) {
        modal.style.display = "none";
    }
}


// ==========================================
// 12. DETAILS MODAL
// ==========================================

function openDetails(id) {

    const restaurant =
        restaurants.find(r => r.id === id);

    if (!restaurant) return;


    document.getElementById("detail-rest-name").innerText =
        restaurant.name;

    document.getElementById("detail-rest-address").innerText =
        "📍 Address: " + restaurant.address;

    document.getElementById("detail-rest-phone").innerText =
        "📞 Contact: " + restaurant.phone;

    document.getElementById("detail-rest-map").src =
        restaurant.mapUrl;

    document.getElementById("details-modal").style.display =
        "flex";
}


function closeDetails() {

    const modal =
        document.getElementById("details-modal");

    if (modal) {
        modal.style.display = "none";
    }
}


// ==========================================
// 13. CART
// ==========================================

function addToCart(itemName, price) {

    cart.push({
        name: itemName,
        price: price
    });

    updateCartUI();
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartUI();
}


function updateCartUI() {

    const count =
        document.getElementById("cart-count");

    const itemsContainer =
        document.getElementById("cart-items");

    const totalContainer =
        document.getElementById("cart-total");


    if (!count || !itemsContainer || !totalContainer) {
        return;
    }


    count.innerText = cart.length;


    if (cart.length === 0) {

        itemsContainer.innerHTML =
            '<p class="empty-msg">Your cart is empty.</p>';

        totalContainer.innerText = "0";

        return;
    }


    itemsContainer.innerHTML = "";

    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        itemsContainer.innerHTML += `

            <div class="cart-item-row">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <br>

                    <small style="color:#38bdf8">
                        ₹${item.price}
                    </small>

                </div>

                <button
                    onclick="removeFromCart(${index})"
                    style="
                        background:#ef4444;
                        color:white;
                        border:none;
                        padding:4px 9px;
                        border-radius:4px;
                        cursor:pointer;
                    "
                >
                    ✕
                </button>

            </div>

        `;
    });


    totalContainer.innerText = total;
}


// ==========================================
// 14. CART DRAWER
// ==========================================

function toggleCart() {

    const drawer =
        document.getElementById("cart-drawer");

    if (drawer) {
        drawer.classList.toggle("active");
    }
}


// ==========================================
// 15. CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty! Please add items first."
        );

        return;
    }


    alert(
        "🎉 Order Successful! Your food is on its way."
    );


    cart = [];

    updateCartUI();

    toggleCart();
}


// ==========================================
// 16. CLOSE MODALS OUTSIDE CLICK
// ==========================================

window.addEventListener("click", function (event) {

    const menuModal =
        document.getElementById("menu-modal");

    const detailsModal =
        document.getElementById("details-modal");


    if (event.target === menuModal) {
        closeMenu();
    }


    if (event.target === detailsModal) {
        closeDetails();
    }

});


// ==========================================
// 17. INITIALIZE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderRestaurants();

        setupSearch();

        setupCuisineFilter();

        setupPriceFilter();

        setupRatingFilter();

        updateCartUI();

    }
);

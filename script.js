// ============================================================
// AHMEDABAD EATS - ORIGINAL JAVASCRIPT
// 15 RESTAURANTS + SEARCH + FILTER + MENU + CART + MAP
// ============================================================


// ============================================================
// RESTAURANTS DATA
// ============================================================

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
        cuisine: "North Indian, South Indian",
        rating: "4.5",
        time: "40 mins",
        price: "₹800–₹2,000",
        address: "Opp. Mahila Municipal Garden, Rajpath Rangoli Road, Bodakdev, Ahmedabad - 380059",
        phone: "+91 97254 38230",
        mapUrl: "https://www.google.com/maps?q=Under+The+Neem+Trees+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",

        menu: [
            { name: "Paneer Tikka", price: 280 },
            { name: "Masala Dosa", price: 160 },
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
            { name: "Pasta Margherita", price: 450 },
            { name: "Woodfired Pizza", price: 500 },
            { name: "Tiramisu Dessert", price: 300 }
        ]
    },


    {
        id: 14,
        name: "Bluez Restaurant",
        cuisine: "North Indian, South Indian",
        rating: "4.1",
        time: "35 mins",
        price: "₹500–₹1,000",
        address: "Supermall, C.G. Road, near Lal Bungalow, Ellisbridge, Ahmedabad - 380006",
        phone: "+91 88988 58988",
        mapUrl: "https://www.google.com/maps?q=Bluez+Restaurant+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",

        menu: [
            { name: "Paneer Tikka", price: 260 },
            { name: "Rava Dosa", price: 180 },
            { name: "Butter Naan", price: 70 }
        ]
    },


    {
        id: 15,
        name: "Rangeen",
        cuisine: "Vegetarian, Italian",
        rating: "4.5",
        time: "40 mins",
        price: "₹400–₹1,200",
        address: "Shreekunj Mandapam, Ahmedabad - 380015",
        phone: "+91 90815 55577",
        mapUrl: "https://www.google.com/maps?q=Rangeen+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",

        menu: [
            { name: "Arrabbiata Pasta", price: 320 },
            { name: "Paneer Main Course", price: 380 },
            { name: "Sizzling Dessert", price: 220 }
        ]
    }

];


// ============================================================
// GLOBAL STATE
// ============================================================

let cart = [];

let selectedCategory = "All";


// ============================================================
// LOCAL STORAGE
// ============================================================

function saveCartToStorage() {

    localStorage.setItem(
        "ahmedabad_eats_cart",
        JSON.stringify(cart)
    );

}


function loadCartFromStorage() {

    const savedCart =
        localStorage.getItem("ahmedabad_eats_cart");

    if (!savedCart) {
        cart = [];
        return;
    }

    try {

        const parsedCart = JSON.parse(savedCart);

        cart = Array.isArray(parsedCart)
            ? parsedCart
            : [];

    } catch (error) {

        cart = [];

    }

}


// ============================================================
// RENDER RESTAURANTS
// ============================================================

function renderRestaurants(data = restaurants) {

    const container =
        document.getElementById("restaurant-list");

    const noResults =
        document.getElementById("no-results");

    if (!container) return;

    container.innerHTML = "";

    if (!data.length) {

        if (noResults) {
            noResults.style.display = "block";
        }

        return;
    }

    if (noResults) {
        noResults.style.display = "none";
    }


    data.forEach(rest => {

        const card = document.createElement("div");

        card.className = "card";


        card.innerHTML = `

            <img
                src="${rest.image}"
                alt="${rest.name}"
                loading="lazy"
            >

            <div class="card-info">

                <h3>
                    ${rest.name}
                </h3>

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

        `;


        container.appendChild(card);

    });

}


// ============================================================
// SEARCH
// ============================================================

function filterRestaurants() {

    const searchElement =
        document.getElementById("restaurant-search");

    const searchInput =
        searchElement
            ? searchElement.value.toLowerCase().trim()
            : "";


    const filtered =
        restaurants.filter(rest => {

            const restaurantText = [

                rest.name,
                rest.cuisine,
                rest.address

            ]
            .join(" ")
            .toLowerCase();


            const menuText =
                rest.menu
                    .map(item => item.name)
                    .join(" ")
                    .toLowerCase();


            const matchesSearch =
                restaurantText.includes(searchInput) ||
                menuText.includes(searchInput);


            const matchesCategory =
                selectedCategory === "All" ||
                rest.cuisine
                    .toLowerCase()
                    .includes(
                        selectedCategory.toLowerCase()
                    );


            return matchesSearch &&
                   matchesCategory;

        });


    renderRestaurants(filtered);

}


// ============================================================
// CATEGORY FILTER
// ============================================================

function filterCategory(category, btnElement) {

    selectedCategory = category;


    document
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    if (btnElement) {
        btnElement.classList.add("active");
    }


    filterRestaurants();

}


// ============================================================
// MENU
// ============================================================

function openMenu(id) {

    const restaurant =
        restaurants.find(rest => rest.id === id);

    if (!restaurant) return;


    const title =
        document.getElementById("modal-rest-name");

    const container =
        document.getElementById("modal-menu-items");

    const modal =
        document.getElementById("menu-modal");


    if (!title || !container || !modal) return;


    title.innerText =
        restaurant.name + " - Menu";


    container.innerHTML = "";


    restaurant.menu.forEach((item, index) => {

        const menuItem =
            document.createElement("div");

        menuItem.className = "menu-item";


        menuItem.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <br>

                <small>
                    ₹${item.price}
                </small>

            </div>

            <button
                class="add-btn"
                onclick="addToCart(
                    ${restaurant.id},
                    ${index}
                )"
            >
                + Add
            </button>

        `;


        container.appendChild(menuItem);

    });


    modal.style.display = "flex";

}


function closeMenu() {

    const modal =
        document.getElementById("menu-modal");

    if (modal) {
        modal.style.display = "none";
    }

}


// ============================================================
// RESTAURANT DETAILS
// ============================================================

function openDetails(id) {

    const restaurant =
        restaurants.find(rest => rest.id === id);

    if (!restaurant) return;


    const name =
        document.getElementById("detail-rest-name");

    const address =
        document.getElementById("detail-rest-address");

    const phone =
        document.getElementById("detail-rest-phone");

    const map =
        document.getElementById("detail-rest-map");

    const modal =
        document.getElementById("details-modal");


    if (!modal) return;


    if (name) {
        name.innerText = restaurant.name;
    }


    if (address) {
        address.innerText =
            "📍 Address: " + restaurant.address;
    }


    if (phone) {
        phone.innerText =
            "📞 Contact: " + restaurant.phone;
    }


    if (map) {
        map.src = restaurant.mapUrl;
    }


    modal.style.display = "flex";

}


function closeDetails() {

    const modal =
        document.getElementById("details-modal");

    if (modal) {
        modal.style.display = "none";
    }

}


// ============================================================
// CART
// ============================================================

function addToCart(restaurantId, menuIndex) {

    const restaurant =
        restaurants.find(
            rest => rest.id === restaurantId
        );

    if (!restaurant) return;


    const item =
        restaurant.menu[menuIndex];

    if (!item) return;


    cart.push({

        restaurant: restaurant.name,

        name: item.name,

        price: Number(item.price)

    });


    saveCartToStorage();

    updateCartUI();

}


function removeFromCart(index) {

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }


    cart.splice(index, 1);

    saveCartToStorage();

    updateCartUI();

}


// ============================================================
// CART UI
// ============================================================

function updateCartUI() {

    const count =
        document.getElementById("cart-count");

    const container =
        document.getElementById("cart-items");

    const totalElement =
        document.getElementById("cart-total");


    if (count) {
        count.innerText = cart.length;
    }


    if (!container || !totalElement) {
        return;
    }


    if (!cart.length) {

        container.innerHTML =
            '<p class="empty-msg">Your cart is empty.</p>';

        totalElement.innerText = "0";

        return;
    }


    container.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += Number(item.price);


        const row =
            document.createElement("div");

        row.className =
            "cart-item-row";


        row.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <br>

                <small>
                    ${item.restaurant}
                </small>

                <br>

                <small>
                    ₹${item.price}
                </small>

            </div>

            <button
                onclick="removeFromCart(${index})"
            >
                X
            </button>

        `;


        container.appendChild(row);

    });


    totalElement.innerText =
        total.toLocaleString("en-IN");

}


// ============================================================
// CART DRAWER
// ============================================================

function toggleCart() {

    const drawer =
        document.getElementById("cart-drawer");

    if (drawer) {
        drawer.classList.toggle("active");
    }

}


// ============================================================
// CHECKOUT
// ============================================================

function checkout() {

    if (!cart.length) {

        alert(
            "Cart empty hai! Pehle kuch item add karein."
        );

        return;
    }


    alert(
        "🎉 Order Successful! Aapka khana jald hi pahocha diya jayega."
    );


    cart = [];

    saveCartToStorage();

    updateCartUI();

    toggleCart();

}


// ============================================================
// CLOSE MODALS WHEN CLICKING OUTSIDE
// ============================================================

window.addEventListener(
    "click",
    function(event) {

        const menuModal =
            document.getElementById("menu-modal");

        const detailsModal =
            document.getElementById("details-modal");


        if (
            menuModal &&
            event.target === menuModal
        ) {
            closeMenu();
        }


        if (
            detailsModal &&
            event.target === detailsModal
        ) {
            closeDetails();
        }

    }
);


// ============================================================
// ESC KEY
// ============================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeMenu();

            closeDetails();

        }

    }
);


// ============================================================
// FUTURE HELPER
// ============================================================

// Future mein new restaurant add karna ho:
//
// restaurants.push({
//     id: 16,
//     name: "New Restaurant",
//     cuisine: "Gujarati",
//     rating: "4.5",
//     time: "30 mins",
//     price: "₹500 for two",
//     address: "Ahmedabad",
//     phone: "+91 XXXXX XXXXX",
//     mapUrl: "Google Maps Embed URL",
//     image: "Image URL",
//     menu: [
//         { name: "Food Item", price: 200 }
//     ]
// });
//
// Phir:
// renderRestaurants();
//


// ============================================================
// INITIAL LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadCartFromStorage();

        renderRestaurants();

        updateCartUI();

    }
);

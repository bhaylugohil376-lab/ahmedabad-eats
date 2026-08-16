// ============================================================
// AHMEDABAD EATS - COMPLETE SCRIPT
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
        address: "The House of MG, Sidi Saiyyed Mosque, Lal Darwaja, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Agashiye+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        menu: [
            { id: 101, name: "Gujarati Thali", price: 450 },
            { id: 102, name: "Farsan", price: 150 },
            { id: 103, name: "Gujarati Sweet", price: 120 }
        ]
    },

    {
        id: 2,
        name: "Swati Snacks",
        cuisine: "Gujarati, Vegetarian",
        rating: "4.5",
        time: "30 mins",
        price: "₹600+ for two",
        address: "Panchavati Road, Law Garden, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Swati+Snacks+Law+Garden+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800&q=80",
        menu: [
            { id: 201, name: "Panki", price: 275 },
            { id: 202, name: "Handvo", price: 295 },
            { id: 203, name: "Pav Bhaji", price: 350 },
            { id: 204, name: "Dahi Sev Puri", price: 220 },
            { id: 205, name: "Shrikhand", price: 175 }
        ]
    },

    {
        id: 3,
        name: "Rajwadu",
        cuisine: "Gujarati, Traditional",
        rating: "4.4",
        time: "40 mins",
        price: "₹400–₹1,200",
        address: "Malav Talav, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Rajwadu+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
        menu: [
            { id: 301, name: "Gujarati Thali", price: 575 },
            { id: 302, name: "Gujarati Farsan", price: 150 },
            { id: 303, name: "Rotla", price: 100 }
        ]
    },

    {
        id: 4,
        name: "Vishalla",
        cuisine: "Gujarati",
        rating: "4.2",
        time: "40 mins",
        price: "₹800–₹1,200",
        address: "Vasna, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Vishalla+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        menu: [
            { id: 401, name: "Gujarati Thali", price: 450 },
            { id: 402, name: "Rotla", price: 120 },
            { id: 403, name: "Chaas", price: 60 }
        ]
    },

    {
        id: 5,
        name: "Gordhan Thal",
        cuisine: "Gujarati",
        rating: "4.4",
        time: "35 mins",
        price: "₹200–₹400",
        address: "S.G. Highway, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Gordhan+Thal+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
        menu: [
            { id: 501, name: "Gujarati Thali", price: 350 },
            { id: 502, name: "Farsan", price: 120 },
            { id: 503, name: "Shrikhand", price: 120 }
        ]
    },

    {
        id: 6,
        name: "Iscon Thal",
        cuisine: "Gujarati",
        rating: "4.8",
        time: "30 mins",
        price: "₹200–₹400",
        address: "Iscon Cross Road, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Iscon+Thal+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
        menu: [
            { id: 601, name: "Gujarati Thali", price: 350 },
            { id: 602, name: "Paneer Sabji", price: 180 },
            { id: 603, name: "Dal Rice", price: 150 }
        ]
    },

    {
        id: 7,
        name: "650 - The Global Kitchen",
        cuisine: "Vegetarian, Multi Cuisine",
        rating: "4.4",
        time: "35 mins",
        price: "₹400–₹800",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=650+The+Global+Kitchen+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&q=80",
        menu: [
            { id: 701, name: "Paneer Tikka", price: 240 },
            { id: 702, name: "Dal Tadka", price: 180 },
            { id: 703, name: "Veg Biryani", price: 220 }
        ]
    },

    {
        id: 8,
        name: "Under The Neem Trees",
        cuisine: "North Indian, South Indian",
        rating: "4.5",
        time: "40 mins",
        price: "₹800–₹2,000",
        address: "Bodakdev, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Under+The+Neem+Trees+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        menu: [
            { id: 801, name: "Paneer Tikka", price: 280 },
            { id: 802, name: "Masala Dosa", price: 160 },
            { id: 803, name: "Butter Naan", price: 70 }
        ]
    },

    {
        id: 9,
        name: "Spiceville Restaurant",
        cuisine: "North Indian",
        rating: "4.8",
        time: "35 mins",
        price: "₹400–₹1,400",
        address: "Mithakhali, Ellisbridge, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Spiceville+Restaurant+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
        menu: [
            { id: 901, name: "Paneer Tikka", price: 280 },
            { id: 902, name: "Butter Chicken", price: 340 },
            { id: 903, name: "Garlic Naan", price: 90 }
        ]
    },

    {
        id: 10,
        name: "Rotlo Gujarati Rasthal",
        cuisine: "Gujarati, Kathiyawadi",
        rating: "4.5",
        time: "30 mins",
        price: "₹200–₹400",
        address: "Vastrapur, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Rotlo+Gujarati+Rasthal+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        menu: [
            { id: 1001, name: "Bajra Rotla", price: 100 },
            { id: 1002, name: "Sev Tameta", price: 150 },
            { id: 1003, name: "Kathiyawadi Thali", price: 300 }
        ]
    },

    {
        id: 11,
        name: "The Grand Thakar",
        cuisine: "Gujarati",
        rating: "4.3",
        time: "35 mins",
        price: "₹200–₹400",
        address: "Iscon Cross Road, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=The+Grand+Thakar+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
        menu: [
            { id: 1101, name: "Gujarati Thali", price: 350 },
            { id: 1102, name: "Farsan", price: 120 },
            { id: 1103, name: "Basundi", price: 120 }
        ]
    },

    {
        id: 12,
        name: "Earthen Oven",
        cuisine: "North Indian",
        rating: "4.4",
        time: "35 mins",
        price: "₹500–₹1,000",
        address: "Ashram Road, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Earthen+Oven+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
        menu: [
            { id: 1201, name: "Tandoori Paneer", price: 320 },
            { id: 1202, name: "Dal Makhani", price: 280 },
            { id: 1203, name: "Naan", price: 80 }
        ]
    },

    {
        id: 13,
        name: "Tinello",
        cuisine: "Italian, International",
        rating: "4.3",
        time: "40 mins",
        price: "₹1,000+ for two",
        address: "Hyatt Regency Ahmedabad, Ashram Road, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Tinello+Hyatt+Regency+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
        menu: [
            { id: 1301, name: "Pasta", price: 450 },
            { id: 1302, name: "Pizza", price: 500 },
            { id: 1303, name: "Dessert", price: 300 }
        ]
    },

    {
        id: 14,
        name: "Bluez Restaurant",
        cuisine: "North Indian, South Indian",
        rating: "4.1",
        time: "35 mins",
        price: "₹500–₹1,000",
        address: "C.G. Road, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Bluez+Restaurant+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        menu: [
            { id: 1401, name: "Paneer Tikka", price: 260 },
            { id: 1402, name: "Rava Dosa", price: 180 },
            { id: 1403, name: "Butter Naan", price: 70 }
        ]
    },

    {
        id: 15,
        name: "Rangeen",
        cuisine: "Vegetarian, Italian",
        rating: "4.5",
        time: "40 mins",
        price: "₹400–₹1,200",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Rangeen+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        menu: [
            { id: 1501, name: "Pasta", price: 320 },
            { id: 1502, name: "Paneer Main Course", price: 380 },
            { id: 1503, name: "Dessert", price: 220 }
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

    if (!savedCart) return;

    try {
        const parsed = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
            cart = parsed;
        }

    } catch (error) {
        cart = [];
    }
}


// ============================================================
// RESTAURANT RENDER
// ============================================================

function renderRestaurants(data = restaurants) {

    const container =
        document.getElementById("restaurant-list");

    const noResults =
        document.getElementById("no-results");

    if (!container) return;

    container.innerHTML = "";

    if (data.length === 0) {

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
                alt="${escapeHTML(rest.name)}"
                loading="lazy"
            >

            <div class="card-info">

                <h3>${escapeHTML(rest.name)}</h3>

                <p class="cuisine">
                    ${escapeHTML(rest.cuisine)}
                </p>

                <p class="details">
                    ⏱️ ${escapeHTML(rest.time)}
                    •
                    ${escapeHTML(rest.price)}
                </p>

                <div class="card-bottom">

                    <span class="rating">
                        ★ ${escapeHTML(rest.rating)}
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

    const search =
        searchElement
            ? searchElement.value.toLowerCase().trim()
            : "";

    const filtered =
        restaurants.filter(rest => {

            const restaurantText =
                `${rest.name} ${rest.cuisine} ${rest.address}`
                    .toLowerCase();

            const menuText =
                rest.menu
                    .map(item => item.name)
                    .join(" ")
                    .toLowerCase();

            const matchesSearch =
                !search ||
                restaurantText.includes(search) ||
                menuText.includes(search);

            const matchesCategory =
                selectedCategory === "All" ||
                rest.cuisine
                    .toLowerCase()
                    .includes(selectedCategory.toLowerCase());

            return matchesSearch && matchesCategory;

        });

    renderRestaurants(filtered);
}


// ============================================================
// CATEGORY FILTER
// ============================================================

function filterCategory(category, button) {

    selectedCategory = category;

    document
        .querySelectorAll(".category-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    if (button) {
        button.classList.add("active");
    }

    filterRestaurants();
}


// ============================================================
// MENU MODAL
// ============================================================

function openMenu(id) {

    const restaurant =
        restaurants.find(rest => rest.id === id);

    if (!restaurant) return;

    const title =
        document.getElementById("modal-rest-name");

    const container =
        document.getElementById("modal-menu-items");

    if (!title || !container) return;

    title.innerText =
        `${restaurant.name} - Menu`;

    container.innerHTML = "";


    restaurant.menu.forEach(item => {

        const menuItem =
            document.createElement("div");

        menuItem.className = "menu-item";

        menuItem.innerHTML = `
            <div>
                <strong>
                    ${escapeHTML(item.name)}
                </strong>

                <br>

                <small style="color:#94a3b8;">
                    ₹${item.price}
                </small>
            </div>

            <button
                class="add-btn"
                onclick="addToCart(
                    ${restaurant.id},
                    ${item.id}
                )"
            >
                + Add
            </button>
        `;

        container.appendChild(menuItem);

    });


    const modal =
        document.getElementById("menu-modal");

    if (modal) {
        modal.style.display = "flex";
    }
}


function closeMenu() {

    const modal =
        document.getElementById("menu-modal");

    if (modal) {
        modal.style.display = "none";
    }
}


// ============================================================
// DETAILS MODAL
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


    if (name) {
        name.innerText = restaurant.name;
    }

    if (address) {
        address.innerText =
            `📍 Address: ${restaurant.address}`;
    }

    if (phone) {

        phone.innerText =
            restaurant.phone
                ? `📞 Contact: ${restaurant.phone}`
                : "📞 Contact: Please check restaurant's official contact details";
    }

    if (map) {
        map.src = restaurant.mapUrl;
    }

    if (modal) {
        modal.style.display = "flex";
    }
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

function addToCart(restaurantId, menuId) {

    const restaurant =
        restaurants.find(rest => rest.id === restaurantId);

    if (!restaurant) return;

    const item =
        restaurant.menu.find(menu => menu.id === menuId);

    if (!item) return;


    const existing =
        cart.find(cartItem =>
            cartItem.restaurantId === restaurantId &&
            cartItem.menuId === menuId
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            restaurantId: restaurantId,
            restaurantName: restaurant.name,
            menuId: menuId,
            name: item.name,
            price: item.price,
            quantity: 1
        });

    }


    saveCartToStorage();
    updateCartUI();
}


function increaseQuantity(index) {

    if (!cart[index]) return;

    cart[index].quantity += 1;

    saveCartToStorage();
    updateCartUI();
}


function decreaseQuantity(index) {

    if (!cart[index]) return;

    cart[index].quantity -= 1;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCartToStorage();
    updateCartUI();
}


function removeFromCart(index) {

    if (!cart[index]) return;

    cart.splice(index, 1);

    saveCartToStorage();
    updateCartUI();
}


function clearCart() {

    if (cart.length === 0) return;

    const confirmed =
        confirm("Kya aap cart empty karna chahte hain?");

    if (!confirmed) return;

    cart = [];

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


    if (!container || !totalElement) return;


    let totalItems = 0;
    let totalPrice = 0;


    cart.forEach(item => {

        totalItems += item.quantity;

        totalPrice +=
            item.price * item.quantity;

    });


    if (count) {
        count.innerText = totalItems;
    }


    if (cart.length === 0) {

        container.innerHTML = `
            <p class="empty-msg">
                Your cart is empty.
            </p>
        `;

        totalElement.innerText = "0";

        return;
    }


    container.innerHTML = "";


    cart.forEach((item, index) => {

        const row =
            document.createElement("div");

        row.className = "cart-item-row";

        row.innerHTML = `
            <div>

                <strong>
                    ${escapeHTML(item.name)}
                </strong>

                <br>

                <small style="color:#38bdf8;">
                    ₹${item.price}
                </small>

                <div style="margin-top:6px;">

                    <button
                        type="button"
                        onclick="decreaseQuantity(${index})"
                    >
                        −
                    </button>

                    <span style="margin:0 8px;">
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        onclick="increaseQuantity(${index})"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                type="button"
                onclick="removeFromCart(${index})"
                style="
                    background:#ef4444;
                    color:white;
                    border:none;
                    padding:4px 8px;
                    border-radius:4px;
                    cursor:pointer;
                "
            >
                X
            </button>
        `;

        container.appendChild(row);

    });


    container.innerHTML += `
        <button
            type="button"
            onclick="clearCart()"
            style="
                margin-top:15px;
                padding:8px 12px;
                border:none;
                border-radius:6px;
                cursor:pointer;
            "
        >
            Clear Cart
        </button>
    `;


    totalElement.innerText =
        totalPrice;
}


// ============================================================
// CART DRAWER
// ============================================================

function toggleCart() {

    const drawer =
        document.getElementById("cart-drawer");

    if (!drawer) return;

    drawer.classList.toggle("active");
}


// ============================================================
// CHECKOUT
// ============================================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Cart empty hai! Pehle kuch item add karein."
        );

        return;
    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    const confirmed =
        confirm(
            `Order total ₹${total} hai.\n\nOrder place karein?`
        );


    if (!confirmed) return;


    alert(
        "🎉 Order successfully placed!"
    );


    cart = [];

    saveCartToStorage();
    updateCartUI();

    const drawer =
        document.getElementById("cart-drawer");

    if (
        drawer &&
        drawer.classList.contains("active")
    ) {
        drawer.classList.remove("active");
    }
}


// ============================================================
// CLOSE MODALS WHEN CLICKING OUTSIDE
// ============================================================

window.addEventListener("click", function(event) {

    const menuModal =
        document.getElementById("menu-modal");

    const detailsModal =
        document.getElementById("details-modal");


    if (
        event.target === menuModal
    ) {
        closeMenu();
    }


    if (
        event.target === detailsModal
    ) {
        closeDetails();
    }

});


// ============================================================
// ESCAPE KEY
// ============================================================

document.addEventListener("keydown", function(event) {

    if (event.key !== "Escape") return;

    closeMenu();
    closeDetails();

});


// ============================================================
// BASIC HTML ESCAPING
// ============================================================

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadCartFromStorage();

        renderRestaurants();

        updateCartUI();

    }
);

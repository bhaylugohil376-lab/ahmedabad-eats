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
            { id: "m1", name: "Gujarati Thali", price: 450 },
            { id: "m2", name: "Farsan", price: 150 },
            { id: "m3", name: "Gujarati Sweet", price: 120 }
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
            { id: "m4", name: "Panki Chutney", price: 275 },
            { id: "m5", name: "Handvo", price: 295 },
            { id: "m6", name: "Pav Bhaji", price: 350 },
            { id: "m7", name: "Dahi Sev Puri", price: 220 },
            { id: "m8", name: "Shrikhand", price: 175 }
        ]
    }
    // ... rest of your dataset
];

// Cart State structured as a Map for O(1) lookups and quantity management
let cart = new Map();

// Helper: Escape HTML string parameters to prevent XSS
function sanitizeHTML(str) {
    return String(str).replace(/[&<>"']/g, (match) => {
        const escapeMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escapeMap[match];
    });
}

// Optimized Restaurant Grid Rendering
function renderRestaurants() {
    const container = document.getElementById("restaurant-list");
    if (!container) return;

    // Build complete string before innerHTML assignment to prevent layout thrashing
    const htmlContent = restaurants.map(rest => `
        <div class="card">
            <img src="${sanitizeHTML(rest.image)}" alt="${sanitizeHTML(rest.name)}" loading="lazy">
            <div class="card-info">
                <h3>${sanitizeHTML(rest.name)}</h3>
                <p class="cuisine">${sanitizeHTML(rest.cuisine)}</p>
                <p class="details">⏱️ ${sanitizeHTML(rest.time)} • ${sanitizeHTML(rest.price)}</p>
                <div class="card-bottom">
                    <span class="rating">★ ${sanitizeHTML(rest.rating)}</span>
                    <button class="btn-details" onclick="openDetails(${rest.id})">Details</button>
                    <button class="btn-menu" onclick="openMenu(${rest.id})">Menu</button>
                </div>
            </div>
        </div>
    `).join("");

    container.innerHTML = htmlContent;
}

// Open Menu Modal
function openMenu(id) {
    const restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) return;

    document.getElementById("modal-rest-name").innerText = `${restaurant.name} - Menu`;
    const itemsContainer = document.getElementById("modal-menu-items");

    itemsContainer.innerHTML = restaurant.menu.map(item => `
        <div class="menu-item">
            <div>
                <strong>${sanitizeHTML(item.name)}</strong>
                <br>
                <small style="color:#94a3b8">₹${item.price}</small>
            </div>
            <button class="add-btn" onclick="addToCart('${item.id}', '${sanitizeHTML(item.name)}', ${item.price})">
                + Add
            </button>
        </div>
    `).join("");

    document.getElementById("menu-modal").style.display = "flex";
}

function closeMenu() {
    document.getElementById("menu-modal").style.display = "none";
}

// Details & Map Modal
function openDetails(id) {
    const restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) return;

    document.getElementById("detail-rest-name").innerText = restaurant.name;
    document.getElementById("detail-rest-address").innerText = `📍 Address: ${restaurant.address}`;
    document.getElementById("detail-rest-phone").innerText = restaurant.phone 
        ? `📞 Contact: ${restaurant.phone}` 
        : "📞 Contact: Not available";
    document.getElementById("detail-rest-map").src = restaurant.mapUrl;

    document.getElementById("details-modal").style.display = "flex";
}

function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}

// Quantity-Aware Cart Management
function addToCart(itemId, name, price) {
    if (cart.has(itemId)) {
        const item = cart.get(itemId);
        item.quantity += 1;
    } else {
        cart.set(itemId, { id: itemId, name, price, quantity: 1 });
    }
    updateCartUI();
}

function updateQuantity(itemId, change) {
    if (!cart.has(itemId)) return;

    const item = cart.get(itemId);
    item.quantity += change;

    if (item.quantity <= 0) {
        cart.delete(itemId);
    }
    updateCartUI();
}

function updateCartUI() {
    const cartCountEl = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalContainer = document.getElementById("cart-total");

    let totalItems = 0;
    let totalPrice = 0;

    if (cart.size === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        cartCountEl.innerText = "0";
        totalContainer.innerText = "0";
        return;
    }

    let itemsHTML = "";
    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        itemsHTML += `
            <div class="cart-item-row" style="display:flex; justify-space-between; align-items:center; margin-bottom: 8px;">
                <div>
                    <strong>${sanitizeHTML(item.name)}</strong>
                    <br>
                    <small style="color:#38bdf8">₹${item.price} x ${item.quantity}</small>
                </div>
                <div style="display:flex; gap:6px; align-items:center;">
                    <button onclick="updateQuantity('${item.id}', -1)" style="padding:2px 6px;">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', 1)" style="padding:2px 6px;">+</button>
                </div>
            </div>
        `;
    });

    cartCountEl.innerText = totalItems;
    cartItemsContainer.innerHTML = itemsHTML;
    totalContainer.innerText = totalPrice;
}

function toggleCart() {
    document.getElementById("cart-drawer").classList.toggle("active");
}

function checkout() {
    if (cart.size === 0) {
        alert("Cart empty hai! Pehle kuch item add karein.");
        return;
    }

    alert("🎉 Order Successful! Aapka khana jald hi pahocha diya jayega.");
    cart.clear();
    updateCartUI();
    toggleCart();
}

// Initial Run
document.addEventListener("DOMContentLoaded", renderRestaurants);

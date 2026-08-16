// ========================= RESTAURANTS DATA ==========================
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

// Global States
let cart = [];
let selectedCategory = "All";

// ========================= RENDER RESTAURANTS ==========================
function renderRestaurants(data = restaurants) {
    const container = document.getElementById("restaurant-list");
    const noResults = document.getElementById("no-results");
    container.innerHTML = "";

    if (data.length === 0) {
        noResults.style.display = "block";
        return;
    }
    
    noResults.style.display = "none";

    data.forEach(rest => {
        container.innerHTML += `
            <div class="card">
                <img src="${rest.image}" alt="${rest.name}">
                <div class="card-info">
                    <h3>${rest.name}</h3>
                    <p class="cuisine">${rest.cuisine}</p>
                    <p class="details">⏱️ ${rest.time} • ${rest.price}</p>
                    <div class="card-bottom">
                        <span class="rating">★ ${rest.rating}</span>
                        <button class="btn-details" onclick="openDetails(${rest.id})">Details</button>
                        <button class="btn-menu" onclick="openMenu(${rest.id})">Menu</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// ========================= SEARCH & FILTER LOGIC ==========================
function filterRestaurants() {
    const searchInput = document.getElementById("restaurant-search").value.toLowerCase().trim();

    const filtered = restaurants.filter(rest => {
        const matchesSearch = rest.name.toLowerCase().includes(searchInput) ||
                              rest.cuisine.toLowerCase().includes(searchInput) ||
                              rest.menu.some(item => item.name.toLowerCase().includes(searchInput));

        const matchesCategory = (selectedCategory === "All") || rest.cuisine.includes(selectedCategory);

        return matchesSearch && matchesCategory;
    });

    renderRestaurants(filtered);
}

function filterCategory(category, btnElement) {
    selectedCategory = category;

    // Update active button state
    const buttons = document.querySelectorAll(".category-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    if (btnElement) {
        btnElement.classList.add("active");
    }

    filterRestaurants();
}

// ========================= MENU MODAL ==========================
function openMenu(id) {
    const restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) return;

    document.getElementById("modal-rest-name").innerText = restaurant.name + " - Menu";
    const itemsContainer = document.getElementById("modal-menu-items");
    itemsContainer.innerHTML = "";

    restaurant.menu.forEach(item => {
        itemsContainer.innerHTML += `
            <div class="menu-item">
                <div>
                    <strong>${item.name}</strong>
                    <br>
                    <small style="color:#94a3b8">₹${item.price}</small>
                </div>
                <button class="add-btn" onclick="addToCart('${item.name}', ${item.price})">+ Add</button>
            </div>
        `;
    });

    document.getElementById("menu-modal").style.display = "flex";
}

function closeMenu() {
    document.getElementById("menu-modal").style.display = "none";
}

// ========================= DETAILS & MAP MODAL ==========================
function openDetails(id) {
    const restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) return;

    document.getElementById("detail-rest-name").innerText = restaurant.name;
    document.getElementById("detail-rest-address").innerText = "📍 Address: " + restaurant.address;
    document.getElementById("detail-rest-phone").innerText = restaurant.phone 
        ? "📞 Contact: " + restaurant.phone 
        : "📞 Contact: Not available";

    document.getElementById("detail-rest-map").src = restaurant.mapUrl;
    document.getElementById("details-modal").style.display = "flex";
}

function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}

// ========================= CART SYSTEM ==========================
function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartItemsContainer = document.getElementById("cart-items");
    const totalContainer = document.getElementById("cart-total");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        totalContainer.innerText = "0";
        return;
    }

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsContainer.innerHTML += `
            <div class="cart-item-row" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div>
                    <strong>${item.name}</strong>
                    <br>
                    <small style="color:#38bdf8">₹${item.price}</small>
                </div>
                <button 
                    style="background:#ef4444; color:white; border:none; padding:3px 8px; border-radius:4px; cursor:pointer;"
                    onclick="removeFromCart(${index})">X</button>
            </div>
        `;
    });

    totalContainer.innerText = total;
}

function toggleCart() {
    document.getElementById("cart-drawer").classList.toggle("active");
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart empty hai! Pehle kuch item add karein.");
        return;
    }

    alert("🎉 Order Successful! Aapka khana jald hi pahocha diya jayega.");
    cart = [];
    updateCartUI();
    toggleCart();
}

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    renderRestaurants();
});

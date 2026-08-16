const restaurants = [
    {
        id: 1,
        name: "Royal Biryani House",
        cuisine: "Biryani, North Indian",
        rating: "4.8",
        time: "30 mins",
        price: "₹300 for two",
        address: "12, Park Street, Near Metro Station, Delhi",
        phone: "+91 98111 22233",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.98083811833!2d77.21672131508215!3d28.63042038241804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80",
        menu: [
            { name: "Chicken Dum Biryani", price: 240 },
            { name: "Mutton Biryani", price: 320 },
            { name: "Chicken 65", price: 180 }
        ]
    },
    {
        id: 2,
        name: "The Pizza Oven",
        cuisine: "Italian, Fast Food",
        rating: "4.6",
        time: "25 mins",
        price: "₹400 for two",
        address: "GF-4, Cyber Hub, Gurugram",
        phone: "+91 98222 33344",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2882262512684!2d77.08588821507851!3d28.499479682470077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19383307f9c9%3A0x892a06f4772153b6!2sDLF%20Cyber%20Hub!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
        menu: [
            { name: "Margherita Pizza", price: 299 },
            { name: "Farmhouse Pizza", price: 399 },
            { name: "Garlic Bread", price: 120 }
        ]
    },
    {
        id: 3,
        name: "Punjab Dhaba Grill",
        cuisine: "North Indian, Mughlai",
        rating: "4.7",
        time: "35 mins",
        price: "₹350 for two",
        address: "45, Ring Road, Lajpat Nagar, Delhi",
        phone: "+91 98333 44455",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.629399859239!2d77.24103131508035!3d28.550858982449033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c4be19f393%3A0xf6a8ef11b33c0993!2sLajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&q=80",
        menu: [
            { name: "Butter Chicken", price: 280 },
            { name: "Paneer Butter Masala", price: 220 },
            { name: "Butter Naan", price: 40 }
        ]
    },
    {
        id: 4,
        name: "Dragon Wok",
        cuisine: "Chinese, Asian",
        rating: "4.5",
        time: "20 mins",
        price: "₹250 for two",
        address: "Shop 12, Khan Market, Delhi",
        phone: "+91 98444 55566",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9360877543323!2d77.22485541508152!3d28.60170018243306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2db922b9dfd%3A0x28f23f6e1697e8cb!2sKhan%20Market%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80",
        menu: [
            { name: "Hakka Noodles", price: 150 },
            { name: "Chilli Chicken", price: 210 },
            { name: "Veg Momos", price: 110 }
        ]
    },
    {
        id: 5,
        name: "Sagar Dosa Corner",
        cuisine: "South Indian",
        rating: "4.6",
        time: "15 mins",
        price: "₹200 for two",
        address: "Main Market, Karol Bagh, Delhi",
        phone: "+91 98555 66677",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5976214555816!2d77.1884213150824!3d28.641887382412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c351f0f4f%3A0x892a06f4772153b6!2sKarol%20Bagh%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80",
        menu: [
            { name: "Masala Dosa", price: 120 },
            { name: "Idli Sambar", price: 80 },
            { name: "Meda Vada", price: 90 }
        ]
    },
    {
        id: 6,
        name: "Burger Hub",
        cuisine: "American, Fast Food",
        rating: "4.4",
        time: "20 mins",
        price: "₹250 for two",
        address: "Sector 18, Noida, Uttar Pradesh",
        phone: "+91 98666 77788",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.148119859239!2d77.32410311508035!3d28.565258982449033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a4be19f393%3A0xf6a8ef11b33c0993!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
        menu: [
            { name: "Crispy Chicken Burger", price: 149 },
            { name: "Double Cheese Veg Burger", price: 129 },
            { name: "French Fries", price: 89 }
        ]
    },
    {
        id: 7,
        name: "Sushi Bay",
        cuisine: "Japanese, Seafood",
        rating: "4.9",
        time: "40 mins",
        price: "₹800 for two",
        address: "Aerocity, New Delhi",
        phone: "+91 98777 88899",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.029399859239!2d77.12103131508035!3d28.538558982449033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c4be19f393%3A0xf6a8ef11b33c0993!2sAerocity%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80",
        menu: [
            { name: "California Roll", price: 450 },
            { name: "Salmon Sushi", price: 550 },
            { name: "Ramen Bowl", price: 380 }
        ]
    },
    {
        id: 8,
        name: "Sweet Bengal Sweets",
        cuisine: "Desserts, Mithai",
        rating: "4.8",
        time: "15 mins",
        price: "₹150 for two",
        address: "CR Park, Main Market, Delhi",
        phone: "+91 98888 99900",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.229399859239!2d77.25103131508035!3d28.532558982449033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c4be19f393%3A0xf6a8ef11b33c0993!2sChittaranjan%20Park%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&q=80",
        menu: [
            { name: "Gulab Jamun (2 pcs)", price: 60 },
            { name: "Rasgulla (2 pcs)", price: 50 },
            { name: "Rasmalai", price: 90 }
        ]
    },
    {
        id: 9,
        name: "Taco Fiesta",
        cuisine: "Mexican",
        rating: "4.3",
        time: "30 mins",
        price: "₹350 for two",
        address: "Hauz Khas Village, Delhi",
        phone: "+91 98999 00011",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.829399859239!2d77.19103131508035!3d28.544558982449033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c4be19f393%3A0xf6a8ef11b33c0993!2sHauz%20Khas%20Village%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80",
        menu: [
            { name: "Chicken Taco", price: 160 },
            { name: "Paneer Burrito", price: 190 },
            { name: "Nachos with Cheese", price: 140 }
        ]
    },
    {
        id: 10,
        name: "Cafe Coffee Day Lite",
        cuisine: "Cafe, Beverages",
        rating: "4.5",
        time: "20 mins",
        price: "₹300 for two",
        address: "MG Road, Metro Station, Gurugram",
        phone: "+91 98000 11122",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.529399859239!2d77.08103131508035!3d28.481558982449033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c4be19f393%3A0xf6a8ef11b33c0993!2sM.G.%20Road%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&q=80",
        menu: [
            { name: "Cold Coffee", price: 130 },
            { name: "Cappuccino", price: 110 },
            { name: "Chocolate Brownie", price: 95 }
        ]
    }
];

let cart = [];

// Render Restaurants
function renderRestaurants() {
    const container = document.getElementById("restaurant-list");
    container.innerHTML = "";

    restaurants.forEach(rest => {
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

// Menu Modal
function openMenu(id) {
    const restaurant = restaurants.find(r => r.id === id);
    document.getElementById("modal-rest-name").innerText = restaurant.name + " - Menu";
    
    const itemsContainer = document.getElementById("modal-menu-items");
    itemsContainer.innerHTML = "";

    restaurant.menu.forEach(item => {
        itemsContainer.innerHTML += `
            <div class="menu-item">
                <div>
                    <strong>${item.name}</strong>
                    <br><small style="color: #94a3b8">₹${item.price}</small>
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

// Details & Map Modal
function openDetails(id) {
    const restaurant = restaurants.find(r => r.id === id);
    document.getElementById("detail-rest-name").innerText = restaurant.name;
    document.getElementById("detail-rest-address").innerText = "📍 Address: " + restaurant.address;
    document.getElementById("detail-rest-phone").innerText = "📞 Contact: " + restaurant.phone;
    document.getElementById("detail-rest-map").src = restaurant.mapUrl;

    document.getElementById("details-modal").style.display = "flex";
}

function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}

// Cart Drawer
function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
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
            <div class="cart-item-row">
                <div>
                    <strong>${item.name}</strong><br>
                    <small style="color: #38bdf8">₹${item.price}</small>
                </div>
                <button style="background: #ef4444; color: white; border: none; padding: 2px 8px; border-radius: 4px; cursor: pointer;" onclick="removeFromCart(${index})">X</button>
            </div>
        `;
    });

    totalContainer.innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
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

renderRestaurants();

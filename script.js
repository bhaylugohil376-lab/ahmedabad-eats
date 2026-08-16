const restaurants = [
    {
        id: 1,
        name: "Royal Biryani House",
        cuisine: "Biryani, North Indian",
        rating: "4.8",
        time: "30 mins",
        price: "₹300 for two",
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
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&q=80",
        menu: [
            { name: "Cold Coffee", price: 130 },
            { name: "Cappuccino", price: 110 },
            { name: "Chocolate Brownie", price: 95 }
        ]
    }
];

let cartCount = 0;

// Load Restaurants
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
                        <button class="btn-menu" onclick="openMenu(${rest.id})">View Menu</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Menu Modal Handlers
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
                <button class="add-btn" onclick="addToCart()">+ Add</button>
            </div>
        `;
    });

    document.getElementById("menu-modal").style.display = "flex";
}

function closeMenu() {
    document.getElementById("menu-modal").style.display = "none";
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

renderRestaurants();

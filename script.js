/* ======================================================
   AHMEDABAD EATS - SCRIPT.JS
   Restaurant Discovery Website
====================================================== */

"use strict";

/* ======================================================
   HTML SAFETY HELPERS (TOP LEVEL DEFINITION)
====================================================== */

function escapeHTML(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHTML(value);
}

function stripHTML(value) {
  const temporary = document.createElement("div");
  temporary.innerHTML = String(value);
  return temporary.textContent || "";
}

/* ======================================================
   RESTAURANT DATA
====================================================== */

const restaurants = [
  {
    id: 1,
    name: "Agashiye",
    cuisine: "Gujarati",
    rating: 4.5,
    time: "12:00 PM - 3:00 PM",
    price: "₹₹₹",
    address: "The House of MG, Lal Darwaja, Ahmedabad, Gujarat",
    phone: "+91 79 2550 6946",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Agashiye is presented as a traditional Gujarati dining experience in Ahmedabad. Associated with The House of MG, it offers regional cuisine in a heritage setting.</p>
      <p>A Gujarati thali focuses on a balanced meal featuring vegetables, pulses, breads, rice, farsan, accompaniments, sweets, and seasonal preparations.</p>
      <h4>What visitors can explore</h4>
      <p>Visitors can learn about the restaurant, browse the sample menu, and verify location details before visiting.</p>
    `,
    menu: [
      ["Gujarati Thali", 450],
      ["Khaman", 120],
      ["Fafda Jalebi", 150],
      ["Shrikhand", 120]
    ]
  },
  {
    id: 2,
    name: "650 - The Global Kitchen",
    cuisine: "Multi Cuisine",
    rating: 4.4,
    time: "12:00 PM - 11:00 PM",
    price: "₹₹₹",
    address: "Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>650 - The Global Kitchen offers multi-cuisine dining suited for group dining with diverse food preferences.</p>
      <p>The menu combines Indian preparations with international cuisine options including starters, pasta, pizza, and desserts.</p>
    `,
    menu: [
      ["Paneer Tikka", 280],
      ["Pasta", 320],
      ["Pizza", 350],
      ["Brownie", 180]
    ]
  },
  {
    id: 3,
    name: "Swati Snacks",
    cuisine: "Gujarati",
    rating: 4.6,
    time: "11:00 AM - 10:00 PM",
    price: "₹₹",
    address: "Panchavati Road, Ahmedabad, Gujarat",
    phone: "+91 79 2640 5900",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Swati Snacks provides traditional Gujarati snack items including panki, handvo, and other baked or steamed items.</p>
    `,
    menu: [
      ["Panki", 160],
      ["Handvo", 180],
      ["Pav Bhaji", 220],
      ["Shrikhand", 120]
    ]
  },
  {
    id: 4,
    name: "Gordhan Thal",
    cuisine: "Gujarati",
    rating: 4.5,
    time: "11:30 AM - 11:00 PM",
    price: "₹₹",
    address: "Bodakdev, Ahmedabad, Gujarat",
    phone: "+91 79 2687 1222",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Gordhan Thal offers unlimited Gujarati thali dining featuring regional dal, kadhi, rotli, and traditional desserts.</p>
    `,
    menu: [
      ["Gujarati Thali", 350],
      ["Dal Dhokli", 180],
      ["Kadhi", 150],
      ["Basundi", 160]
    ]
  },
  {
    id: 5,
    name: "Sasuji Dining Hall",
    cuisine: "Gujarati",
    rating: 4.3,
    time: "11:30 AM - 10:30 PM",
    price: "₹₹",
    address: "Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Sasuji Dining Hall focuses on traditional Gujarati meals and homestyle cooking preparations.</p>
    `,
    menu: [
      ["Gujarati Thali", 300],
      ["Khichdi", 160],
      ["Farsan", 120],
      ["Sweet Dish", 100]
    ]
  },
  {
    id: 6,
    name: "Rajwadu",
    cuisine: "Gujarati",
    rating: 4.4,
    time: "11:00 AM - 11:00 PM",
    price: "₹₹₹",
    address: "Malav Talav, Ahmedabad, Gujarat",
    phone: "+91 99785 05653",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Rajwadu presents traditional Kathiyawadi and Gujarati dining in a village-themed open environment.</p>
    `,
    menu: [
      ["Royal Gujarati Thali", 450],
      ["Kathiyawadi Thali", 400],
      ["Bajra Rotla", 160],
      ["Chaas", 70]
    ]
  },
  {
    id: 7,
    name: "Vishalla",
    cuisine: "Gujarati",
    rating: 4.3,
    time: "11:30 AM - 10:30 PM",
    price: "₹₹₹",
    address: "Vasna, Ahmedabad, Gujarat",
    phone: "+91 82005 43694",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Vishalla is an open-air traditional restaurant offering Gujarati meals served on leaf plates with cultural surroundings.</p>
    `,
    menu: [
      ["Traditional Thali", 400],
      ["Rotla", 120],
      ["Sev Tameta", 180],
      ["Chaas", 70]
    ]
  },
  {
    id: 8,
    name: "The Esplendido",
    cuisine: "Multi Cuisine",
    rating: 4.4,
    time: "12:00 PM - 11:00 PM",
    price: "₹₹₹",
    address: "Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>A multi-cuisine dining establishment providing Indian, Continental, and Asian menus.</p>
    `,
    menu: [
      ["Paneer Tikka", 300],
      ["Biryani", 350],
      ["Pasta", 320],
      ["Dessert", 180]
    ]
  },
  {
    id: 9,
    name: "Rajpath Club Restaurant",
    cuisine: "Indian",
    rating: 4.2,
    time: "11:00 AM - 11:00 PM",
    price: "₹₹₹",
    address: "S.G. Highway, Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Indian restaurant offering North Indian curries, tandoori items, and rice preparations.</p>
    `,
    menu: [
      ["Butter Paneer", 280],
      ["Veg Biryani", 260],
      ["Tandoori Roti", 45],
      ["Dal Makhani", 220]
    ]
  },
  {
    id: 10,
    name: "Peppermint Restaurant",
    cuisine: "Indian",
    rating: 4.2,
    time: "12:00 PM - 11:00 PM",
    price: "₹₹",
    address: "Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Popular Indian restaurant serving vegetarian paneer gravies, biryanis, and Indian breads.</p>
    `,
    menu: [
      ["Paneer Butter Masala", 280],
      ["Veg Biryani", 250],
      ["Naan", 60],
      ["Lassi", 100]
    ]
  },
  {
    id: 11,
    name: "Nanjing",
    cuisine: "Multi Cuisine",
    rating: 4.1,
    time: "12:00 PM - 11:00 PM",
    price: "₹₹",
    address: "Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Specializes in Indo-Chinese fusion items including noodles, fried rice, manchurian, and soups.</p>
    `,
    menu: [
      ["Noodles", 220],
      ["Manchurian", 230],
      ["Fried Rice", 220],
      ["Spring Rolls", 180]
    ]
  },
  {
    id: 12,
    name: "Gajanand Pauva House",
    cuisine: "Indian",
    rating: 4.4,
    time: "7:00 AM - 10:00 PM",
    price: "₹",
    address: "Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Budget breakfast stall providing varieties of poha, masala poha, hot tea, and snacks.</p>
    `,
    menu: [
      ["Poha", 60],
      ["Masala Poha", 80],
      ["Tea", 30],
      ["Jalebi", 70]
    ]
  },
  {
    id: 13,
    name: "Honest Restaurant",
    cuisine: "Indian",
    rating: 4.2,
    time: "11:00 AM - 11:00 PM",
    price: "₹₹",
    address: "Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Famous casual dining chain serving pav bhaji, pulao, South Indian dosas, and pizza.</p>
    `,
    menu: [
      ["Pav Bhaji", 180],
      ["Pulav", 220],
      ["Masala Dosa", 170],
      ["Pizza", 280]
    ]
  },
  {
    id: 14,
    name: "Atithi Dining Hall",
    cuisine: "Gujarati",
    rating: 4.3,
    time: "11:30 AM - 10:30 PM",
    price: "₹₹",
    address: "Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Atithi Dining Hall serves unlimited Gujarati meals including farsan, sweets, kadhi, and rotli.</p>
    `,
    menu: [
      ["Gujarati Thali", 320],
      ["Dal Dhokli", 170],
      ["Farsan", 120],
      ["Shrikhand", 120]
    ]
  },
  {
    id: 15,
    name: "Karnavati Dabeli",
    cuisine: "Indian",
    rating: 4.2,
    time: "8:00 AM - 10:00 PM",
    price: "₹",
    address: "Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",
    description: `
      <p>Local fast food stall specializing in spiced potato dabeli, cheese dabeli, and vada pav.</p>
    `,
    menu: [
      ["Dabeli", 50],
      ["Cheese Dabeli", 80],
      ["Vada Pav", 60],
      ["Cold Drink", 50]
    ]
  }
];

/* ======================================================
   CART STATE
====================================================== */

let cart = [];

/* ======================================================
   DISPLAY RESTAURANTS
====================================================== */

function displayRestaurants(data) {
  const list = document.getElementById("restaurant-list");
  if (!list) return;

  list.innerHTML = "";

  if (!data || !data.length) {
    list.innerHTML = `
      <div class="no-results" style="padding:20px; text-align:center;">
        <h2>😔 No restaurant found</h2>
        <p>Try changing your search terms or filters.</p>
      </div>
    `;
    return;
  }

  data.forEach(rest => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img
        src="${escapeAttribute(rest.image)}"
        alt="${escapeAttribute(rest.name)} restaurant"
        loading="lazy"
      >
      <div class="card-info">
        <h2>${escapeHTML(rest.name)}</h2>
        <div class="cuisine">🍛 ${escapeHTML(rest.cuisine)}</div>
        <div class="details">
          ⭐ ${rest.rating} &nbsp; • &nbsp; ⏰ ${escapeHTML(rest.time)} <br>
          💰 ${escapeHTML(rest.price)}
        </div>
        <div class="card-bottom">
          <span class="rating">⭐ ${rest.rating}</span>
          <button class="btn-details" onclick="showDetails(${rest.id})">Details</button>
          <button class="btn-menu" onclick="showMenu(${rest.id})">Menu</button>
        </div>
      </div>
    `;

    list.appendChild(card);
  });
}

/* ======================================================
   SEARCH + FILTER
====================================================== */

function applyFilters() {
  const search = document.getElementById("search")?.value.toLowerCase().trim() || "";
  const cuisine = document.getElementById("cuisineFilter")?.value || "All";
  const price = document.getElementById("priceFilter")?.value || "All";
  const rating = document.getElementById("ratingFilter")?.value || "All";

  const minRating = rating === "All" ? 0 : Number.parseFloat(rating);

  const filtered = restaurants.filter(rest => {
    const searchText = (
      rest.name + " " +
      rest.cuisine + " " +
      stripHTML(rest.description)
    ).toLowerCase();

    const searchMatch = !search || searchText.includes(search);
    const cuisineMatch = cuisine === "All" || rest.cuisine === cuisine;
    const priceMatch = price === "All" || rest.price === price;
    const ratingMatch = rest.rating >= minRating;

    return searchMatch && cuisineMatch && priceMatch && ratingMatch;
  });

  displayRestaurants(filtered);
}

function resetFilters() {
  const search = document.getElementById("search");
  const cuisine = document.getElementById("cuisineFilter");
  const price = document.getElementById("priceFilter");
  const rating = document.getElementById("ratingFilter");

  if (search) search.value = "";
  if (cuisine) cuisine.value = "All";
  if (price) price.value = "All";
  if (rating) rating.value = "All";

  displayRestaurants(restaurants);
}

/* ======================================================
   RESTAURANT DETAILS MODAL
====================================================== */

function showDetails(id) {
  const restaurant = restaurants.find(item => item.id === id);
  if (!restaurant) return;

  const name = document.getElementById("detail-rest-name");
  const cuisine = document.getElementById("detail-rest-cuisine");
  const rating = document.getElementById("detail-rest-rating");
  const time = document.getElementById("detail-rest-time");
  const price = document.getElementById("detail-rest-price");
  const address = document.getElementById("detail-rest-address");
  const phone = document.getElementById("detail-rest-phone");
  const description = document.getElementById("detail-rest-description");
  const map = document.getElementById("detail-rest-map");

  if (name) name.textContent = restaurant.name;
  if (cuisine) cuisine.textContent = "🍛 Cuisine: " + restaurant.cuisine;
  if (rating) rating.textContent = "⭐ Rating: " + restaurant.rating;
  if (time) time.textContent = "⏰ Hours: " + restaurant.time;
  if (price) price.textContent = "💰 Price: " + restaurant.price;
  if (address) address.textContent = "📍 " + restaurant.address;
  if (phone) phone.textContent = restaurant.phone ? "📞 " + restaurant.phone : "📞 Contact details coming soon";
  if (description) description.innerHTML = restaurant.description;

  if (map) {
    map.src = "https://www.google.com/maps?q=" + encodeURIComponent(restaurant.name + ", " + restaurant.address) + "&output=embed";
  }

  const modal = document.getElementById("details-modal");
  if (modal) modal.style.display = "flex";
}

function closeDetails() {
  const modal = document.getElementById("details-modal");
  if (modal) modal.style.display = "none";
}

/* ======================================================
   MENU MODAL
====================================================== */

function showMenu(id) {
  const restaurant = restaurants.find(item => item.id === id);
  if (!restaurant) return;

  const title = document.getElementById("modal-rest-name");
  const box = document.getElementById("modal-menu-items");

  if (title) title.textContent = restaurant.name + " - Menu";
  if (!box) return;

  box.innerHTML = "";

  restaurant.menu.forEach(([name, price]) => {
    const row = document.createElement("div");
    row.className = "menu-item";

    const left = document.createElement("div");
    left.innerHTML = `
      <strong>${escapeHTML(name)}</strong><br>
      <span class="menu-price">₹${Number(price)}</span>
    `;

    const button = document.createElement("button");
    button.className = "add-btn";
    button.textContent = "+ Add";
    button.addEventListener("click", function () {
      addToCart(restaurant.name, name, Number(price));
    });

    row.appendChild(left);
    row.appendChild(button);
    box.appendChild(row);
  });

  const modal = document.getElementById("menu-modal");
  if (modal) modal.style.display = "flex";
}

function closeMenu() {
  const modal = document.getElementById("menu-modal");
  if (modal) modal.style.display = "none";
}

/* ======================================================
   CART MANAGEMENT
====================================================== */

function addToCart(restaurant, item, price) {
  cart.push({
    restaurant: String(restaurant),
    item: String(item),
    price: Number(price)
  });

  updateCart();
  alert("✅ " + item + " added to cart.");
}

function updateCart() {
  const count = document.getElementById("cart-count");
  const box = document.getElementById("cart-items");
  const totalBox = document.getElementById("cart-total");

  if (!count || !box || !totalBox) return;

  count.textContent = cart.length;

  if (!cart.length) {
    box.innerHTML = "<p>Your cart is empty.</p>";
    totalBox.textContent = "0";
    return;
  }

  box.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += Number(item.price);
    const row = document.createElement("div");
    row.className = "cart-item-row";

    const info = document.createElement("div");
    info.innerHTML = `
      <strong>${escapeHTML(item.item)}</strong><br>
      <small>${escapeHTML(item.restaurant)}</small><br>
      ₹${Number(item.price)}
    `;

    const remove = document.createElement("button");
    remove.className = "remove-cart-btn";
    remove.textContent = "✕";
    remove.setAttribute("aria-label", "Remove " + item.item);
    remove.addEventListener("click", function () {
      removeFromCart(index);
    });

    row.appendChild(info);
    row.appendChild(remove);
    box.appendChild(row);
  });

  totalBox.textContent = total;
}

function removeFromCart(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) drawer.classList.toggle("active");
}

function checkout() {
  if (!cart.length) {
    alert("🛒 Your cart is empty. Please add an item first.");
    return;
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  alert(
    "🎉 Order Summary\n\n" +
    "Items: " + cart.length + "\n" +
    "Total: ₹" + total + "\n\n" +
    "Online payment/order integration can be connected later."
  );
}

/* ======================================================
   LEGAL / INFORMATION PAGES
====================================================== */

function openLegal(type) {
  const content = document.getElementById("legal-content");
  const modal = document.getElementById("legal-modal");

  if (!content || !modal) return;

  if (type === "about") {
    content.innerHTML = `
      <h2>About Ahmedabad Eats</h2>
      <p>Ahmedabad Eats is a restaurant discovery guide designed to help visitors explore food and dining options across Ahmedabad.</p>
      <p>The website provides searchable restaurant listings, cuisine categories, price indicators, sample menus, ratings, addresses, and map-based details.</p>
    `;
  } else if (type === "privacy") {
    content.innerHTML = `
      <h2>Privacy Policy</h2>
      <p>Ahmedabad Eats respects visitor privacy and collects minimal analytical usage details necessary to operate the site.</p>
      <p>Contact: bhaylugohil376@gmail.com</p>
    `;
  } else if (type === "terms") {
    content.innerHTML = `
      <h2>Terms & Conditions</h2>
      <p>Restaurant menus, prices, ratings, hours, and addresses provided on this site are subject to change without notice.</p>
    `;
  } else if (type === "contact") {
    content.innerHTML = `
      <h2>Contact Ahmedabad Eats</h2>
      <p>📧 Email: <a href="mailto:bhaylugohil376@gmail.com" style="color:#38bdf8">bhaylugohil376@gmail.com</a></p>
      <p>📞 Phone: <a href="tel:7043636973" style="color:#38bdf8">7043636973</a></p>
    `;
  }

  modal.style.display = "flex";
}

function closeLegal() {
  const modal = document.getElementById("legal-modal");
  if (modal) modal.style.display = "none";
}

/* ======================================================
   GLOBAL MODAL CLOSING LISTENERS
====================================================== */

window.addEventListener("click", function (event) {
  const menuModal = document.getElementById("menu-modal");
  const detailsModal = document.getElementById("details-modal");
  const legalModal = document.getElementById("legal-modal");

  if (event.target === menuModal) closeMenu();
  if (event.target === detailsModal) closeDetails();
  if (event.target === legalModal) closeLegal();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
    closeDetails();
    closeLegal();
  }
});

/* ======================================================
   INITIALIZATION
====================================================== */

document.addEventListener("DOMContentLoaded", function () {
  displayRestaurants(restaurants);
  updateCart();
});

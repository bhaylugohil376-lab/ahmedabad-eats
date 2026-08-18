// ==========================================
// AHMEDABAD EATS - COMPLETE SCRIPT.JS
// 15 RESTAURANTS + SEARCH + FILTER + MAP
// ==========================================

const restaurants = [
  {
    id: 1,
    name: "Agashiye",
    cuisine: "Gujarati",
    rating: 4.5,
    price: 800,
    address: "Lal Darwaja, Ahmedabad",
    image: "images/agashiye.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Agashiye+Ahmedabad",
    menu: [
      ["Gujarati Thali", 750],
      ["Kansar", 180],
      ["Farsan", 160]
    ]
  },

  {
    id: 2,
    name: "650 - The Global Kitchen",
    cuisine: "Multi-Cuisine",
    rating: 4.4,
    price: 900,
    address: "S.G. Highway, Ahmedabad",
    image: "images/global-kitchen.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=650+The+Global+Kitchen+Ahmedabad",
    menu: [
      ["Pasta", 350],
      ["Pizza", 450],
      ["Brownie", 220]
    ]
  },

  {
    id: 3,
    name: "Swati Snacks",
    cuisine: "Gujarati",
    rating: 4.6,
    price: 500,
    address: "Law Garden, Ahmedabad",
    image: "images/swati-snacks.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Swati+Snacks+Ahmedabad",
    menu: [
      ["Panki", 180],
      ["Khichdi", 220],
      ["Handvo", 180]
    ]
  },

  {
    id: 4,
    name: "Gordhan Thal",
    cuisine: "Gujarati",
    rating: 4.3,
    price: 450,
    address: "Bodakdev, Ahmedabad",
    image: "images/gordhan-thal.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gordhan+Thal+Ahmedabad",
    menu: [
      ["Gujarati Thali", 450],
      ["Dal Dhokli", 180],
      ["Shrikhand", 150]
    ]
  },

  {
    id: 5,
    name: "Vishalla",
    cuisine: "Gujarati",
    rating: 4.4,
    price: 700,
    address: "Vasna, Ahmedabad",
    image: "images/vishalla.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Vishalla+Ahmedabad",
    menu: [
      ["Gujarati Thali", 650],
      ["Bajra Rotla", 160],
      ["Chaas", 80]
    ]
  },

  {
    id: 6,
    name: "Rajwadu",
    cuisine: "Gujarati",
    rating: 4.5,
    price: 650,
    address: "Vejalpur, Ahmedabad",
    image: "images/rajwadu.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rajwadu+Ahmedabad",
    menu: [
      ["Traditional Thali", 600],
      ["Rotla", 140],
      ["Basundi", 180]
    ]
  },

  {
    id: 7,
    name: "Manek Chowk Food Street",
    cuisine: "Street Food",
    rating: 4.5,
    price: 300,
    address: "Manek Chowk, Ahmedabad",
    image: "images/manek-chowk.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Manek+Chowk+Ahmedabad",
    menu: [
      ["Cheese Sandwich", 180],
      ["Pav Bhaji", 150],
      ["Chocolate Pizza", 220]
    ]
  },

  {
    id: 8,
    name: "Sasuji Dining Hall",
    cuisine: "North Indian",
    rating: 4.2,
    price: 550,
    address: "Navrangpura, Ahmedabad",
    image: "images/sasuji.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sasuji+Dining+Hall+Ahmedabad",
    menu: [
      ["Paneer Tikka", 280],
      ["Butter Naan", 80],
      ["Dal Tadka", 220]
    ]
  },

  {
    id: 9,
    name: "The Green House",
    cuisine: "Multi-Cuisine",
    rating: 4.3,
    price: 750,
    address: "Ashram Road, Ahmedabad",
    image: "images/green-house.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Green+House+Ahmedabad",
    menu: [
      ["Veg Biryani", 320],
      ["Pasta", 350],
      ["Pizza", 420]
    ]
  },

  {
    id: 10,
    name: "Honest Restaurant",
    cuisine: "Fast Food",
    rating: 4.1,
    price: 350,
    address: "C.G. Road, Ahmedabad",
    image: "images/honest.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Honest+Restaurant+Ahmedabad",
    menu: [
      ["Pav Bhaji", 160],
      ["Pulav", 180],
      ["Masala Dosa", 170]
    ]
  },

  {
    id: 11,
    name: "Tomato's",
    cuisine: "Multi-Cuisine",
    rating: 4.2,
    price: 800,
    address: "C.G. Road, Ahmedabad",
    image: "images/tomatos.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tomatos+Ahmedabad",
    menu: [
      ["Nachos", 320],
      ["Pizza", 450],
      ["Pasta", 380]
    ]
  },

  {
    id: 12,
    name: "Urban Chowk",
    cuisine: "Street Food",
    rating: 4.4,
    price: 450,
    address: "Bodakdev, Ahmedabad",
    image: "images/urban-chowk.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Urban+Chowk+Ahmedabad",
    menu: [
      ["Loaded Fries", 220],
      ["Burger", 250],
      ["Momos", 180]
    ]
  },

  {
    id: 13,
    name: "The Esplendido",
    cuisine: "North Indian",
    rating: 4.5,
    price: 1000,
    address: "S.G. Highway, Ahmedabad",
    image: "images/esplendido.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Esplendido+Ahmedabad",
    menu: [
      ["Paneer Tikka", 350],
      ["Dal Makhani", 320],
      ["Naan", 100]
    ]
  },

  {
    id: 14,
    name: "Little French House",
    cuisine: "Cafe",
    rating: 4.3,
    price: 600,
    address: "Prahlad Nagar, Ahmedabad",
    image: "images/little-french-house.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Little+French+House+Ahmedabad",
    menu: [
      ["French Toast", 280],
      ["Pasta", 350],
      ["Coffee", 160]
    ]
  },

  {
    id: 15,
    name: "Shambhu's Coffee Bar",
    cuisine: "Cafe",
    rating: 4.2,
    price: 400,
    address: "Navrangpura, Ahmedabad",
    image: "images/shambhus.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shambhus+Coffee+Bar+Ahmedabad",
    menu: [
      ["Cold Coffee", 160],
      ["Sandwich", 220],
      ["Brownie", 180]
    ]
  }
];


// ==========================================
// DISPLAY RESTAURANTS
// ==========================================

function displayRestaurants(data = restaurants) {

  const container =
    document.getElementById("restaurantList");

  if (!container) return;

  if (data.length === 0) {

    container.innerHTML = `
      <div class="no-results">
        <h2>😕 Restaurant nahi mila</h2>
        <p>
          Search ya filter change karke
          dobara try karein.
        </p>
      </div>
    `;

    return;
  }


  container.innerHTML = data.map(r => `

    <article class="restaurant-card">

      <img
        src="${r.image}"
        alt="${r.name} restaurant Ahmedabad"
        loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'"
      >

      <div class="restaurant-info">

        <h3>
          ${r.name}
        </h3>

        <p>
          🍛 ${r.cuisine}
        </p>

        <p>
          ⭐ ${r.rating}
        </p>

        <p>
          💰 ₹${r.price} approx.
        </p>

        <p>
          📍 ${r.address}
        </p>


        <button
          type="button"
          onclick="openMenu(${r.id})"
        >
          🍽️ View Menu
        </button>


        <a
          href="${r.mapUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="map-button"
        >
          📍 Get Directions
        </a>

      </div>

    </article>

  `).join("");
}


// ==========================================
// SEARCH + FILTER
// ==========================================

function applyFilters() {

  const search =
    document
      .getElementById("searchInput")
      ?.value
      .toLowerCase()
      .trim() || "";


  const cuisine =
    document
      .getElementById("cuisineFilter")
      ?.value || "all";


  const price =
    document
      .getElementById("priceFilter")
      ?.value || "all";


  const rating =
    document
      .getElementById("ratingFilter")
      ?.value || "all";


  const result = restaurants.filter(r => {

    const searchMatch =
      r.name.toLowerCase().includes(search) ||
      r.cuisine.toLowerCase().includes(search) ||
      r.address.toLowerCase().includes(search);


    const cuisineMatch =
      cuisine === "all" ||
      r.cuisine === cuisine;


    let priceMatch = true;

    if (price === "under500") {
      priceMatch = r.price < 500;
    }

    if (price === "500-800") {
      priceMatch =
        r.price >= 500 &&
        r.price <= 800;
    }

    if (price === "above800") {
      priceMatch = r.price > 800;
    }


    let ratingMatch = true;

    if (rating !== "all") {
      ratingMatch =
        r.rating >= Number(rating);
    }


    return (
      searchMatch &&
      cuisineMatch &&
      priceMatch &&
      ratingMatch
    );

  });


  displayRestaurants(result);
}


// ==========================================
// MENU POPUP
// ==========================================

function openMenu(id) {

  const restaurant =
    restaurants.find(r => r.id === id);

  if (!restaurant) return;


  const menuItems =
    restaurant.menu.map(item => `

      <div class="menu-row">

        <span>
          ${item[0]}
        </span>

        <strong>
          ₹${item[1]}
        </strong>

      </div>

    `).join("");


  const popup =
    document.createElement("div");

  popup.className =
    "menu-popup";


  popup.innerHTML = `

    <div class="menu-box">

      <button
        class="close-menu"
        onclick="this.closest('.menu-popup').remove()"
      >
        ✕
      </button>


      <h2>
        ${restaurant.name}
      </h2>

      <p>
        🍛 ${restaurant.cuisine}
      </p>

      <p>
        ⭐ ${restaurant.rating}
      </p>

      <p>
        📍 ${restaurant.address}
      </p>

      <hr>


      <h3>
        🍽️ Menu
      </h3>


      ${menuItems}


      <a
        href="${restaurant.mapUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="map-button"
        style="display:block;text-align:center;margin-top:20px;"
      >
        📍 Get Directions
      </a>

    </div>

  `;


  document.body.appendChild(popup);
}


// ==========================================
// CLEAR FILTERS
// ==========================================

function clearFilters() {

  const search =
    document.getElementById("searchInput");

  const cuisine =
    document.getElementById("cuisineFilter");

  const price =
    document.getElementById("priceFilter");

  const rating =
    document.getElementById("ratingFilter");


  if (search) search.value = "";

  if (cuisine)
    cuisine.value = "all";

  if (price)
    price.value = "all";

  if (rating)
    rating.value = "all";


  displayRestaurants();
}


// ==========================================
// EVENTS
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    displayRestaurants();


    document
      .getElementById("searchInput")
      ?.addEventListener(
        "input",
        applyFilters
      );


    document
      .getElementById("cuisineFilter")
      ?.addEventListener(
        "change",
        applyFilters
      );


    document
      .getElementById("priceFilter")
      ?.addEventListener(
        "change",
        applyFilters
      );


    document
      .getElementById("ratingFilter")
      ?.addEventListener(
        "change",
        applyFilters
      );

  }
);

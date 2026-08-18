// ======================================================
// AHMEDABAD EATS - ORIGINAL SCRIPT.JS
// 15 RESTAURANTS + SEARCH + FILTER + MENU + CART
// ======================================================

const restaurants = [
  {
    id: 1,
    name: "Agashiye",
    cuisine: "Gujarati",
    rating: 4.6,
    time: "12:00 PM - 3:00 PM",
    price: "₹₹₹",
    address: "The House of MG, Lal Darwaja, Ahmedabad",
    phone: "+91 79 2550 6946",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
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
    phone: "+91 98240 90111",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
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
    rating: 4.5,
    time: "11:00 AM - 10:00 PM",
    price: "₹₹",
    address: "Panchavati Road, Ahmedabad",
    phone: "+91 79 2640 5900",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",
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
    address: "Bodakdev, Ahmedabad",
    phone: "+91 79 2687 1222",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
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
    address: "Malav Talav, Ahmedabad",
    phone: "+91 99785 05653",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
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
    address: "Vasna, Ahmedabad",
    phone: "+91 82005 43694",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
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
    address: "S.G. Highway, Ahmedabad",
    phone: "",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
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
    menu: [
      ["Dabeli", 50],
      ["Cheese Dabeli", 80],
      ["Vada Pav", 60],
      ["Cold Drink", 50]
    ]
  }
];


// ======================================================
// CART
// ======================================================

let cart = [];


// ======================================================
// DISPLAY RESTAURANTS
// ======================================================

function displayRestaurants(data) {

  const list = document.getElementById("restaurant-list");

  if (!list) return;

  list.innerHTML = "";

  if (data.length === 0) {

    list.innerHTML = `
      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:50px;
        color:#94a3b8;
      ">
        <h2>😕 No restaurant found</h2>
        <p>Try another search or filter.</p>
      </div>
    `;

    return;
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

        <h2>${rest.name}</h2>

        <div class="cuisine">
          🍛 ${rest.cuisine}
        </div>

        <div class="details">
          ⭐ ${rest.rating}
          &nbsp; • &nbsp;
          ⏰ ${rest.time}
          <br>
          💰 ${rest.price}
        </div>

        <div class="card-bottom">

          <span class="rating">
            ⭐ ${rest.rating}
          </span>

          <button
            class="btn-details"
            onclick="showDetails(${rest.id})"
          >
            Details
          </button>

          <button
            class="btn-menu"
            onclick="showMenu(${rest.id})"
          >
            Menu
          </button>

        </div>

      </div>
    `;

    list.appendChild(card);

  });

}


// ======================================================
// SEARCH + FILTER
// ======================================================

function applyFilters() {

  const search =
    document.getElementById("search")?.value
      .toLowerCase()
      .trim() || "";

  const cuisine =
    document.getElementById("cuisineFilter")?.value || "All";

  const price =
    document.getElementById("priceFilter")?.value || "All";

  const rating =
    document.getElementById("ratingFilter")?.value || "All";

  const minRating =
    rating === "All"
      ? 0
      : parseFloat(rating);


  const filtered = restaurants.filter(rest => {

    const searchMatch =
      !search ||
      rest.name.toLowerCase().includes(search) ||
      rest.cuisine.toLowerCase().includes(search);


    const cuisineMatch =
      cuisine === "All" ||
      rest.cuisine.includes(cuisine);


    const priceMatch =
      price === "All" ||
      rest.price === price;


    const ratingMatch =
      rest.rating >= minRating;


    return (
      searchMatch &&
      cuisineMatch &&
      priceMatch &&
      ratingMatch
    );

  });


  displayRestaurants(filtered);

}


// ======================================================
// RESET FILTERS
// ======================================================

function resetFilters() {

  document.getElementById("search").value = "";

  document.getElementById("cuisineFilter").value = "All";

  document.getElementById("priceFilter").value = "All";

  document.getElementById("ratingFilter").value = "All";

  displayRestaurants(restaurants);

}


// ======================================================
// MENU
// ======================================================

function showMenu(id) {

  const restaurant =
    restaurants.find(r => r.id === id);

  if (!restaurant) return;


  document.getElementById("modal-rest-name")
    .textContent =
    `${restaurant.name} - Menu`;


  const box =
    document.getElementById("modal-menu-items");

  box.innerHTML = "";


  restaurant.menu.forEach(item => {

    const name = item[0];

    const price = item[1];

    const row =
      document.createElement("div");

    row.className = "menu-item";


    row.innerHTML = `

      <div>

        <strong>${name}</strong>

        <br>

        <span style="color:#94a3b8">
          ₹${price}
        </span>

      </div>

      <button
        class="add-btn"
        onclick="addToCart(
          '${restaurant.name.replace(/'/g, "\\'")}',
          '${name.replace(/'/g, "\\'")}',
          ${price}
        )"
      >
        + Add
      </button>

    `;

    box.appendChild(row);

  });


  document.getElementById("menu-modal")
    .style.display = "flex";

}


function closeMenu() {

  document.getElementById("menu-modal")
    .style.display = "none";

}


// ======================================================
// RESTAURANT DETAILS + GOOGLE MAP
// ======================================================

function showDetails(id) {

  const restaurant =
    restaurants.find(r => r.id === id);

  if (!restaurant) return;


  document.getElementById("detail-rest-name")
    .textContent = restaurant.name;


  document.getElementById("detail-rest-address")
    .textContent =
    "📍 " + restaurant.address;


  document.getElementById("detail-rest-phone")
    .textContent =
    restaurant.phone
      ? "📞 " + restaurant.phone
      : "📞 Contact details coming soon";


  const map =
    document.getElementById("detail-rest-map");


  map.src =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      restaurant.name + ", Ahmedabad, Gujarat"
    ) +
    "&output=embed";


  document.getElementById("details-modal")
    .style.display = "flex";

}


function closeDetails() {

  document.getElementById("details-modal")
    .style.display = "none";

}


// ======================================================
// CART - ADD ITEM
// ======================================================

function addToCart(
  restaurant,
  item,
  price
) {

  cart.push({
    restaurant: restaurant,
    item: item,
    price: Number(price)
  });


  updateCart();

  alert(`✅ ${item} added to cart`);

}


// ======================================================
// UPDATE CART
// ======================================================

function updateCart() {

  const count =
    document.getElementById("cart-count");

  const box =
    document.getElementById("cart-items");

  const totalBox =
    document.getElementById("cart-total");


  if (!count || !box || !totalBox) return;


  count.textContent = cart.length;


  if (cart.length === 0) {

    box.innerHTML =
      `<p>Your cart is empty.</p>`;

    totalBox.textContent = "0";

    return;

  }


  box.innerHTML = "";

  let total = 0;


  cart.forEach((item, index) => {

    total += item.price;


    const row =
      document.createElement("div");

    row.className =
      "cart-item-row";


    row.innerHTML = `

      <div>

        <strong>
          ${item.item}
        </strong>

        <br>

        <small>
          ${item.restaurant}
        </small>

        <br>

        ₹${item.price}

      </div>


      <button
        onclick="removeFromCart(${index})"
        style="
          background:#ef4444;
          border:0;
          color:#fff;
          padding:5px 8px;
          border-radius:5px;
          cursor:pointer;
        "
      >
        ✕
      </button>

    `;


    box.appendChild(row);

  });


  totalBox.textContent = total;

}


// ======================================================
// REMOVE CART ITEM
// ======================================================

function removeFromCart(index) {

  cart.splice(index, 1);

  updateCart();

}


// ======================================================
// OPEN / CLOSE CART
// ======================================================

function toggleCart() {

  const drawer =
    document.getElementById("cart-drawer");

  if (!drawer) return;

  drawer.classList.toggle("active");

}


// ======================================================
// CHECKOUT
// ======================================================

function checkout() {

  if (cart.length === 0) {

    alert(
      "🛒 Your cart is empty. Please add some food first."
    );

    return;

  }


  const total =
    cart.reduce(
      (sum, item) => sum + item.price,
      0
    );


  alert(
    `🎉 Order Ready!\n\nTotal Amount: ₹${total}\n\nPayment/order integration can be connected next.`
  );

}


// ======================================================
// CLOSE MODAL ON OUTSIDE CLICK
// ======================================================

window.addEventListener("click", function(event) {

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


// ======================================================
// KEYBOARD ESC TO CLOSE MODALS
// ======================================================

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    closeMenu();

    closeDetails();

  }

});


// ======================================================
// START WEBSITE
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    displayRestaurants(restaurants);

    updateCart();

  }
);

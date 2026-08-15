// ===============================
// AHMEDABAD EATS
// ===============================

const themeBtn = document.getElementById("themeBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


// ===============================
// DARK MODE
// ===============================

if (themeBtn) {

  themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }

  });

}


// Remember theme

if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark");

  if (themeBtn) {
    themeBtn.textContent = "☀️";
  }

}


// ===============================
// RESTAURANT SEARCH
// ===============================

function searchRestaurants() {

  const text = searchInput.value
    .trim()
    .toLowerCase();

  const cards = document.querySelectorAll(
    ".restaurant-card"
  );

  let found = 0;


  cards.forEach(function (card) {

    const content =
      card.textContent.toLowerCase();

    if (
      text === "" ||
      content.includes(text)
    ) {

      card.style.display = "";

      found++;

    } else {

      card.style.display = "none";

    }

  });


  // Scroll to restaurant section

  const restaurantSection =
    document.getElementById("restaurants");

  if (restaurantSection) {

    restaurantSection.scrollIntoView({
      behavior: "smooth"
    });

  }


  // No result message

  const oldMessage =
    document.getElementById("noResults");

  if (oldMessage) {
    oldMessage.remove();
  }


  if (text !== "" && found === 0) {

    const message =
      document.createElement("p");

    message.id = "noResults";

    message.textContent =
      "No restaurant found. Try Iscon Thal, Gordhan Thal, Rajwadu or Vishalla.";

    message.style.textAlign = "center";
    message.style.marginTop = "25px";
    message.style.fontWeight = "600";

    restaurantSection.appendChild(message);

  }

}


// Search button

if (searchBtn) {

  searchBtn.addEventListener(
    "click",
    searchRestaurants
  );

}


// Search with Enter

if (searchInput) {

  searchInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {
        searchRestaurants();
      }

    }
  );


  // Show all when search is cleared

  searchInput.addEventListener(
    "input",
    function () {

      if (this.value.trim() === "") {

        document
          .querySelectorAll(".restaurant-card")
          .forEach(function (card) {

            card.style.display = "";

          });


        const message =
          document.getElementById("noResults");

        if (message) {
          message.remove();
        }

      }

    }
  );

}


// ===============================
// SMOOTH NAVIGATION
// ===============================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(function (link) {

    link.addEventListener(
      "click",
      function (event) {

        const id =
          this.getAttribute("href");

        const target =
          document.querySelector(id);

        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  });


// ===============================
// COPYRIGHT YEAR
// ===============================

const copyright =
  document.querySelector(".copyright");

if (copyright) {

  copyright.textContent =
    "© " +
    new Date().getFullYear() +
    " Ahmedabad Eats";

}

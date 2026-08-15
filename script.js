// ===============================
// AHMEDABAD EATS - MAIN SCRIPT
// ===============================


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

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


// ===============================
// REMEMBER THEME
// ===============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

  document.body.classList.add("dark");

  if (themeBtn) {
    themeBtn.textContent = "☀️";
  }

}


// ===============================
// RESTAURANT SEARCH
// ===============================

const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");

const restaurantCards =
  document.querySelectorAll(".restaurant-card");


function searchRestaurants() {

  const searchText =
    searchInput.value
      .toLowerCase()
      .trim();


  let found = false;


  restaurantCards.forEach((card) => {

    const cardText =
      card.textContent.toLowerCase();


    if (
      searchText === "" ||
      cardText.includes(searchText)
    ) {

      card.style.display = "";

      found = true;

    } else {

      card.style.display = "none";

    }

  });


  if (
    searchText !== "" &&
    !found
  ) {

    alert(
      "No restaurant found. Try another search."
    );

  }

}


// Search button

if (searchBtn) {

  searchBtn.addEventListener(
    "click",
    searchRestaurants
  );

}


// Search with Enter key

if (searchInput) {

  searchInput.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Enter") {
        searchRestaurants();
      }

    }
  );

}


// ===============================
// CLEAR SEARCH WHEN EMPTY
// ===============================

if (searchInput) {

  searchInput.addEventListener(
    "input",
    () => {

      if (
        searchInput.value.trim() === ""
      ) {

        restaurantCards.forEach(
          (card) => {
            card.style.display = "";
          }
        );

      }

    }
  );

}


// ===============================
// SMOOTH NAVIGATION
// ===============================

document.querySelectorAll(
  'a[href^="#"]'
).forEach((link) => {

  link.addEventListener(
    "click",
    function (event) {

      const targetId =
        this.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }
  );

});


// ===============================
// CURRENT YEAR
// ===============================

const copyright =
  document.querySelector(".copyright");

if (copyright) {

  copyright.textContent =
    `© ${new Date().getFullYear()} Ahmedabad Eats`;

}

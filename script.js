document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("themeBtn");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const restaurantCards = document.querySelectorAll(".restaurant-card");


  // DARK / LIGHT MODE

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


  // REMEMBER THEME

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  }


  // SEARCH RESTAURANTS

  function searchRestaurants() {

    const searchText = searchInput.value.toLowerCase().trim();

    restaurantCards.forEach(card => {

      const restaurantName =
        card.querySelector("h3").textContent.toLowerCase();

      const category =
        card.querySelector(".category").textContent.toLowerCase();

      const description =
        card.querySelector(".description").textContent.toLowerCase();

      const location =
        card.querySelector(".location").textContent.toLowerCase();


      const found =
        restaurantName.includes(searchText) ||
        category.includes(searchText) ||
        description.includes(searchText) ||
        location.includes(searchText);


      if (found || searchText === "") {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  }


  searchBtn.addEventListener("click", searchRestaurants);


  searchInput.addEventListener("input", searchRestaurants);


  // VIEW MENU BUTTONS

  document.querySelectorAll(".menu-btn").forEach(button => {

    button.addEventListener("click", () => {

      alert(
        "Menu details will be available here soon."
      );

    });

  });


  // LOCATION BUTTONS

  document.querySelectorAll(".location-btn").forEach(button => {

    button.addEventListener("click", () => {

      window.open(
        "https://www.google.com/maps/search/?api=1&query=Ahmedabad,Gujarat",
        "_blank"
      );

    });

  });

});

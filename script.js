/* ======================================================
   AHMEDABAD EATS - SCRIPT.JS
   Restaurant Discovery Website
====================================================== */

"use strict";

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
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Agashiye is presented as a traditional Gujarati dining
        experience in Ahmedabad. The restaurant is associated with
        The House of MG and is known for the idea of enjoying Gujarati
        food in a heritage-inspired setting.
      </p>

      <p>
        A Gujarati dining experience commonly focuses on a balanced
        meal rather than a single main dish. A traditional thali can
        include vegetables, pulses, breads, rice, farsan, accompaniments,
        sweets and other seasonal preparations. The exact dishes served
        can vary according to the menu and day.
      </p>

      <p>
        For visitors exploring Ahmedabad's food culture, a traditional
        Gujarati thali can be a useful way to experience several
        flavours during one meal. Gujarati cuisine is often recognised
        for its combination of sweet, savoury, spicy and tangy flavours.
        Preparation styles can also differ between regions and families.
      </p>

      <h4>What visitors can explore</h4>

      <p>
        Visitors can use this listing to learn about the restaurant,
        browse the sample menu and check the location. Before visiting,
        it is important to confirm current opening hours, menu items,
        prices and availability directly with the restaurant because
        these details may change.
      </p>

      <h4>Dining information</h4>

      <p>
        The information shown on Ahmedabad Eats is intended for
        restaurant discovery and general planning. Ratings and menu
        examples shown on this website should not be treated as a
        guarantee of current restaurant conditions or availability.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        650 - The Global Kitchen is included in Ahmedabad Eats as a
        multi-cuisine dining option. Multi-cuisine restaurants can be
        useful for groups where different people prefer different
        styles of food.
      </p>

      <p>
        A broad restaurant menu may include Indian preparations along
        with dishes inspired by international cuisines. Examples can
        include starters, vegetarian dishes, pasta, pizza, desserts and
        other commonly requested items. The availability of individual
        dishes depends on the restaurant's current menu.
      </p>

      <p>
        When choosing a multi-cuisine restaurant, visitors may want to
        consider the type of meal they are planning, the preferences of
        the group and the restaurant's current menu. Checking the latest
        menu before ordering is particularly useful because prices and
        available dishes can change.
      </p>

      <h4>Why this listing is useful</h4>

      <p>
        Ahmedabad Eats provides searchable information so visitors can
        compare this restaurant with other dining options in Ahmedabad.
        The cuisine, price indicator, rating and sample dishes provide a
        starting point for research rather than a guarantee of current
        availability.
      </p>

      <h4>Before visiting</h4>

      <p>
        Confirm current timings, address, menu, prices and reservation
        requirements with the restaurant directly. This is especially
        important during holidays, special events and busy dining hours.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Swati Snacks is included in this guide as a Gujarati-focused
        food destination in Ahmedabad. Gujarati snack culture includes
        a wide range of steamed, baked, fried and pan-cooked foods, and
        many dishes are enjoyed as light meals as well as snacks.
      </p>

      <p>
        Items such as panki and handvo represent the variety found in
        Gujarati food. Panki is traditionally associated with a thin
        preparation cooked between leaves, while handvo is a savoury
        preparation commonly made using fermented batter and additional
        ingredients. Recipes and presentation can vary.
      </p>

      <p>
        Visitors interested in local food can use a Gujarati snack
        restaurant to explore dishes that are different from the more
        familiar restaurant staples found across India. Snacks can also
        provide a convenient option for breakfast, lunch, evening food
        or a lighter meal.
      </p>

      <h4>Food discovery</h4>

      <p>
        Ahmedabad Eats lists sample dishes to help users understand the
        type of food associated with the restaurant. The sample menu is
        not intended to replace the restaurant's current menu. Always
        check the latest menu and prices before ordering.
      </p>

      <h4>Useful information</h4>

      <p>
        Visitors can also use the Details section to view the listed
        address and map location. Restaurant timings and other business
        information can change, so direct confirmation is recommended.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Gordhan Thal is listed as a Gujarati dining option in Ahmedabad.
        The idea of a Gujarati thali is to bring several components of a
        meal together, allowing diners to experience different flavours
        and textures during the same sitting.
      </p>

      <p>
        A typical Gujarati meal can include dal, kadhi, vegetables,
        breads, rice, farsan, pickles, chutneys and sweets. The precise
        combination differs between restaurants and may also change with
        seasonal ingredients or daily preparation.
      </p>

      <p>
        Gujarati cuisine has developed through regional traditions,
        household cooking practices and local ingredients. Dishes such
        as dal dhokli and kadhi are examples of preparations that can
        appear in Gujarati food menus, although recipes vary considerably
        from one kitchen to another.
      </p>

      <h4>Restaurant discovery</h4>

      <p>
        This page provides a convenient starting point for visitors who
        want to compare Gujarati dining options. The listing includes
        a cuisine category, price indicator, rating and sample menu so
        users can quickly understand what type of restaurant they are
        looking at.
      </p>

      <h4>Check before ordering</h4>

      <p>
        Menu prices, operating hours and availability can change.
        Ahmedabad Eats recommends checking current information with the
        restaurant before making a trip or placing an order.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Sasuji Dining Hall is included in Ahmedabad Eats as a Gujarati
        dining listing. Gujarati dining halls generally focus on
        traditional meal combinations and are often chosen by people
        looking for familiar regional flavours.
      </p>

      <p>
        Gujarati meals can contain many small portions instead of one
        large central dish. A thali may combine vegetables, dal or
        kadhi, breads, rice, farsan, accompaniments and sweets. This
        style allows diners to taste multiple preparations during one
        meal.
      </p>

      <p>
        Khichdi and farsan are examples of foods that have an important
        place in Gujarati home and restaurant cooking. Their preparation
        can differ from one kitchen to another, making individual
        restaurant menus worth checking rather than assuming that every
        restaurant serves the same recipe.
      </p>

      <h4>Planning your visit</h4>

      <p>
        Visitors can use the restaurant listing to compare cuisine,
        price range and sample dishes. The Details button provides the
        available location information, while the Menu button displays
        the sample dishes entered for this website.
      </p>

      <p>
        Current prices, timings and menu availability should be confirmed
        directly with the restaurant because restaurant information can
        change.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Rajwadu is presented in this guide as a destination associated
        with Gujarati and Kathiyawadi-style dining. Kathiyawadi food is
        one of the regional food traditions of Gujarat and is known for
        robust flavours and preparations using ingredients commonly found
        in western Indian cooking.
      </p>

      <p>
        Dishes associated with Kathiyawadi dining can include bajra
        rotla, vegetable preparations, dal, kadhi, garlic-based flavours,
        chutneys and other accompaniments. Individual restaurants can
        interpret these dishes differently, so the current menu should
        always be checked.
      </p>

      <p>
        The restaurant's setting can be an important part of a themed
        dining experience. Visitors who want to experience regional food
        may enjoy exploring both the food and the atmosphere rather than
        considering the meal only in terms of individual dishes.
      </p>

      <h4>For food explorers</h4>

      <p>
        Ahmedabad Eats includes Rajwadu to give users another option
        when comparing Gujarati restaurants. The listing provides a
        sample menu, cuisine category, price indicator and map-based
        location information.
      </p>

      <p>
        Restaurant timings, prices, menu items and availability are
        subject to change. Confirm current information before visiting.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Vishalla is included in Ahmedabad Eats as a traditional Gujarati
        dining destination in Ahmedabad. The concept of traditional
        Gujarati dining can extend beyond the food itself and may include
        an emphasis on atmosphere, presentation and regional cultural
        elements.
      </p>

      <p>
        Gujarati thali meals commonly offer a variety of dishes in one
        sitting. Depending on the restaurant and current menu, diners may
        encounter vegetables, dal, kadhi, breads, rice, farsan,
        accompaniments and sweets.
      </p>

      <p>
        Rotla and sev tameta are examples of foods associated with
        Gujarati and Kathiyawadi food traditions. Rotla is generally
        made using millet flour, while sev tameta combines tomato-based
        flavours with sev. Preparation methods and seasoning can differ
        between kitchens.
      </p>

      <h4>Why explore traditional dining?</h4>

      <p>
        Traditional restaurants can provide an opportunity to learn
        about regional ingredients and eating styles. Ahmedabad Eats
        aims to make this type of restaurant discovery easier by keeping
        key information together on one page.
      </p>

      <p>
        Users should confirm current menu, prices, operating hours and
        availability with the restaurant before visiting.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        The Esplendido is included as a multi-cuisine restaurant listing
        for Ahmedabad visitors looking for a broader range of food
        choices. Multi-cuisine restaurants can be particularly useful
        for families and groups with different preferences.
      </p>

      <p>
        A multi-cuisine menu may combine Indian starters and mains with
        dishes inspired by international cooking. Pasta, pizza, desserts
        and Indian vegetarian dishes are examples of categories that can
        appear on such menus.
      </p>

      <p>
        The actual selection available at a restaurant depends on its
        current menu, ingredients and kitchen operations. Therefore,
        visitors should treat the sample menu on this website as a
        discovery reference rather than a complete current menu.
      </p>

      <h4>Choosing a restaurant</h4>

      <p>
        When comparing restaurants, users can consider cuisine, price
        range, rating, location and operating hours. Ahmedabad Eats
        provides these fields in a simple format so visitors can quickly
        compare several options.
      </p>

      <p>
        Current business information should be verified directly with
        the restaurant before travelling or ordering.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Rajpath Club Restaurant is listed as an Indian dining option in
        Ahmedabad. Indian restaurant menus can cover a large range of
        regional cooking styles, from North Indian gravies and breads to
        rice dishes, snacks and vegetarian preparations.
      </p>

      <p>
        Dishes such as paneer preparations, dal, biryani and tandoori
        breads are commonly found in Indian restaurant menus. However,
        recipes, ingredients and serving styles can differ significantly
        between restaurants.
      </p>

      <p>
        Visitors can use this page to understand the broad category of
        food associated with the listing and compare it with other
        restaurants. The sample menu is included to make the discovery
        experience more useful.
      </p>

      <h4>Restaurant information</h4>

      <p>
        Location and operating information are provided as general
        guidance. Because restaurant details can change, users should
        confirm current opening hours, menu prices and availability
        before visiting.
      </p>

      <h4>Dining planning</h4>

      <p>
        For groups, it can be helpful to check whether the restaurant
        currently offers the preferred cuisine and seating arrangements.
        Any reservation or access requirements should also be confirmed
        directly with the restaurant.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Peppermint Restaurant is included in Ahmedabad Eats as an Indian
        dining option. Indian cuisine offers a wide range of vegetarian
        and non-vegetarian traditions, regional recipes and cooking
        methods.
      </p>

      <p>
        Restaurant staples such as paneer dishes, biryani, naan and
        lassi are familiar choices for many diners. Each restaurant can
        use its own ingredients, seasoning and preparation techniques,
        which is why the current menu remains the best source for exact
        dish information.
      </p>

      <p>
        Ahmedabad has a strong vegetarian food culture, and visitors can
        find many vegetarian Indian dishes across the city. Restaurants
        may also offer different combinations of starters, mains,
        breads, rice and beverages.
      </p>

      <h4>Using this listing</h4>

      <p>
        Ahmedabad Eats lets users compare the restaurant with other
        listings by cuisine, rating and price category. The Menu button
        displays the sample dishes currently entered in the website
        database.
      </p>

      <p>
        Prices, timings and availability can change. Verify the latest
        information directly with the restaurant.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Nanjing is included in the Ahmedabad Eats directory as a
        multi-cuisine restaurant listing. The sample menu includes
        familiar Indo-Chinese-style dishes such as noodles,
        manchurian, fried rice and spring rolls.
      </p>

      <p>
        Indo-Chinese cuisine developed as a fusion-style food tradition
        adapted to Indian tastes. Common restaurant preparations may use
        ingredients such as noodles, rice, vegetables, sauces, spices and
        aromatics. Recipes differ between restaurants.
      </p>

      <p>
        Noodles and fried rice can be ordered as complete dishes or as
        part of a shared meal. Starters such as spring rolls and
        vegetable-based preparations can also work well for groups.
      </p>

      <h4>Food discovery</h4>

      <p>
        The purpose of this listing is to help visitors discover another
        style of dining in Ahmedabad. Users can search the website by
        restaurant name or cuisine and use the available filters to
        narrow the results.
      </p>

      <p>
        The menu shown here is a sample and may not represent the
        restaurant's complete or current menu. Confirm current prices
        and availability before ordering.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Gajanand Pauva House is listed as a budget-friendly Indian food
        option in Ahmedabad. Poha is a popular Indian breakfast and
        snack made using flattened rice and can be prepared with
        vegetables, spices, peanuts and other ingredients.
      </p>

      <p>
        Breakfast-focused food places can be especially useful for
        people looking for a quick and comparatively simple meal.
        Poha, masala poha, tea and jalebi represent a familiar
        combination of Indian breakfast and snack items.
      </p>

      <p>
        Regional breakfast habits differ across India. In Gujarat,
        visitors can find many snacks and breakfast foods that are
        different from the dishes commonly associated with other parts
        of the country.
      </p>

      <h4>Budget dining</h4>

      <p>
        The ₹ price category on this website is intended as a simple
        relative indicator and should not be treated as an exact current
        cost estimate. Actual prices may change.
      </p>

      <p>
        Visitors should confirm current opening hours, menu prices and
        availability before visiting.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Honest Restaurant is included in the Ahmedabad Eats directory
        as an Indian restaurant listing. The sample menu combines
        popular Indian dishes with casual dining favourites such as
        pav bhaji, pulav, masala dosa and pizza.
      </p>

      <p>
        Pav bhaji is a popular Indian street-food-style preparation
        consisting of a spiced vegetable mixture served with bread.
        Masala dosa is a South Indian dish made with a fermented rice
        and lentil batter and commonly served with potato filling,
        chutney and sambar.
      </p>

      <p>
        The combination of dishes from different Indian food traditions
        illustrates why broad Indian menus can be convenient for groups
        with different preferences.
      </p>

      <h4>Restaurant discovery</h4>

      <p>
        Users can explore this listing together with other Ahmedabad
        restaurants and filter results according to cuisine, price and
        rating. The sample menu gives visitors a quick starting point
        for understanding the type of food represented on the page.
      </p>

      <p>
        Always confirm the latest menu, prices and restaurant timings
        directly with the business before visiting.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Atithi Dining Hall is included as a Gujarati restaurant listing
        in Ahmedabad. Dining halls serving Gujarati food can provide
        visitors with an opportunity to experience several regional
        preparations during one meal.
      </p>

      <p>
        Gujarati thalis commonly combine dal, kadhi, vegetables, breads,
        rice, farsan, chutneys, pickles and sweets. The exact selection
        can change according to the restaurant, season and daily menu.
      </p>

      <p>
        Dal dhokli is another well-known Gujarati preparation in which
        pieces of wheat-based dough are cooked in a seasoned dal-based
        preparation. Farsan refers broadly to a variety of savoury
        Gujarati snack preparations.
      </p>

      <h4>What to check</h4>

      <p>
        Before visiting, users should check whether the current menu
        matches their requirements and whether the restaurant is serving
        the desired meal at the planned time.
      </p>

      <p>
        Ahmedabad Eats provides general discovery information and does
        not guarantee current restaurant prices, opening hours or
        availability.
      </p>
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

    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",

    description: `
      <p>
        Karnavati Dabeli is included in this directory as a budget
        Indian snack option. Dabeli is strongly associated with Gujarat
        and is commonly made using a spiced potato mixture served inside
        a bun with chutneys and additional toppings.
      </p>

      <p>
        Street-food-style dishes are an important part of Ahmedabad's
        everyday food culture. Snacks such as dabeli and vada pav can
        be convenient for quick meals and are often available at
        comparatively accessible price points.
      </p>

      <p>
        Different vendors can use different spice blends, chutneys,
        fillings and toppings. Cheese versions and other variations can
        also be offered depending on the menu.
      </p>

      <h4>Quick food option</h4>

      <p>
        The listing is useful for visitors searching for casual food
        rather than a full restaurant meal. Users can browse the sample
        menu and compare the price category with other listings on
        Ahmedabad Eats.
      </p>

      <p>
        Menu items, prices and opening hours may change. Confirm the
        latest information directly with the food outlet before visiting.
      </p>
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
   CART
====================================================== */

let cart = [];


/* ======================================================
   DISPLAY RESTAURANTS
====================================================== */

function displayRestaurants(data) {

  const list = document.getElementById("restaurant-list");

  if (!list) return;

  list.innerHTML = "";

  if (!data.length) {

    list.innerHTML = `
      <div class="no-results">
        <h2>😔 No restaurant found</h2>
        <p>
          Try changing your search or filters.
        </p>
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

        <h2>
          ${escapeHTML(rest.name)}
        </h2>

        <div class="cuisine">
          🍛 ${escapeHTML(rest.cuisine)}
        </div>

        <div class="details">

          ⭐ ${rest.rating}

          &nbsp; • &nbsp;

          ⏰ ${escapeHTML(rest.time)}

          <br>

          💰 ${escapeHTML(rest.price)}

        </div>

        <div class="card-bottom">

          <span class="rating">
            ⭐ ${rest.rating}
          </span>

          <button
            class="btn-details"
            onclick="showDetails(${rest.id})">

            Details

          </button>

          <button
            class="btn-menu"
            onclick="showMenu(${rest.id})">

            Menu

          </button>

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
      : Number.parseFloat(rating);


  const filtered = restaurants.filter(rest => {

    const searchText = (
      rest.name + " " +
      rest.cuisine + " " +
      stripHTML(rest.description)
    ).toLowerCase();


    const searchMatch =
      !search ||
      searchText.includes(search);


    const cuisineMatch =
      cuisine === "All" ||
      rest.cuisine === cuisine;


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


/* ======================================================
   RESET FILTERS
====================================================== */

function resetFilters() {

  const search =
    document.getElementById("search");

  const cuisine =
    document.getElementById("cuisineFilter");

  const price =
    document.getElementById("priceFilter");

  const rating =
    document.getElementById("ratingFilter");


  if (search) search.value = "";

  if (cuisine) cuisine.value = "All";

  if (price) price.value = "All";

  if (rating) rating.value = "All";


  displayRestaurants(restaurants);
}


/* ======================================================
   RESTAURANT DETAILS
====================================================== */

function showDetails(id) {

  const restaurant =
    restaurants.find(item => item.id === id);

  if (!restaurant) return;


  const name =
    document.getElementById("detail-rest-name");

  const cuisine =
    document.getElementById("detail-rest-cuisine");

  const rating =
    document.getElementById("detail-rest-rating");

  const time =
    document.getElementById("detail-rest-time");

  const price =
    document.getElementById("detail-rest-price");

  const address =
    document.getElementById("detail-rest-address");

  const phone =
    document.getElementById("detail-rest-phone");

  const description =
    document.getElementById("detail-rest-description");

  const map =
    document.getElementById("detail-rest-map");


  if (name) {
    name.textContent = restaurant.name;
  }

  if (cuisine) {
    cuisine.textContent =
      "🍛 Cuisine: " + restaurant.cuisine;
  }

  if (rating) {
    rating.textContent =
      "⭐ Rating: " + restaurant.rating;
  }

  if (time) {
    time.textContent =
      "⏰ Hours: " + restaurant.time;
  }

  if (price) {
    price.textContent =
      "💰 Price: " + restaurant.price;
  }

  if (address) {
    address.textContent =
      "📍 " + restaurant.address;
  }

  if (phone) {
    phone.textContent =
      restaurant.phone
        ? "📞 " + restaurant.phone
        : "📞 Contact details coming soon";
  }


  if (description) {
    description.innerHTML =
      restaurant.description;
  }


  if (map) {

    map.src =
      "https://www.google.com/maps?q=" +
      encodeURIComponent(
        restaurant.name +
        ", " +
        restaurant.address
      ) +
      "&output=embed";

  }


  const modal =
    document.getElementById("details-modal");

  if (modal) {
    modal.style.display = "flex";
  }
}


function closeDetails() {

  const modal =
    document.getElementById("details-modal");

  if (modal) {
    modal.style.display = "none";
  }
}


/* ======================================================
   MENU
====================================================== */

function showMenu(id) {

  const restaurant =
    restaurants.find(item => item.id === id);

  if (!restaurant) return;


  const title =
    document.getElementById("modal-rest-name");

  const box =
    document.getElementById("modal-menu-items");


  if (title) {
    title.textContent =
      restaurant.name + " - Menu";
  }


  if (!box) return;

  box.innerHTML = "";


  restaurant.menu.forEach(([name, price]) => {

    const row =
      document.createElement("div");

    row.className = "menu-item";


    const left =
      document.createElement("div");

    left.innerHTML = `
      <strong>
        ${escapeHTML(name)}
      </strong>

      <br>

      <span class="menu-price">
        ₹${Number(price)}
      </span>
    `;


    const button =
      document.createElement("button");

    button.className = "add-btn";

    button.textContent = "+ Add";

    button.addEventListener(
      "click",
      function () {

        addToCart(
          restaurant.name,
          name,
          Number(price)
        );

      }
    );


    row.appendChild(left);
    row.appendChild(button);

    box.appendChild(row);

  });


  const modal =
    document.getElementById("menu-modal");

  if (modal) {
    modal.style.display = "flex";
  }
}


function closeMenu() {

  const modal =
    document.getElementById("menu-modal");

  if (modal) {
    modal.style.display = "none";
  }
}


/* ======================================================
   CART
====================================================== */

function addToCart(
  restaurant,
  item,
  price
) {

  cart.push({

    restaurant:
      String(restaurant),

    item:
      String(item),

    price:
      Number(price)

  });


  updateCart();

  alert(
    "✅ " +
    item +
    " added to cart."
  );
}


/* ======================================================
   UPDATE CART
====================================================== */

function updateCart() {

  const count =
    document.getElementById("cart-count");

  const box =
    document.getElementById("cart-items");

  const totalBox =
    document.getElementById("cart-total");


  if (!count || !box || !totalBox) {
    return;
  }


  count.textContent =
    cart.length;


  if (!cart.length) {

    box.innerHTML =
      "<p>Your cart is empty.</p>";

    totalBox.textContent = "0";

    return;
  }


  box.innerHTML = "";

  let total = 0;


  cart.forEach((item, index) => {

    total += Number(item.price);


    const row =
      document.createElement("div");

    row.className =
      "cart-item-row";


    const info =
      document.createElement("div");


    info.innerHTML = `

      <strong>
        ${escapeHTML(item.item)}
      </strong>

      <br>

      <small>
        ${escapeHTML(item.restaurant)}
      </small>

      <br>

      ₹${Number(item.price)}

    `;


    const remove =
      document.createElement("button");

    remove.className =
      "remove-cart-btn";

    remove.textContent = "✕";

    remove.setAttribute(
      "aria-label",
      "Remove " + item.item
    );


    remove.addEventListener(
      "click",
      function () {

        removeFromCart(index);

      }
    );


    row.appendChild(info);

    row.appendChild(remove);

    box.appendChild(row);

  });


  totalBox.textContent =
    total;
}


/* ======================================================
   REMOVE CART ITEM
====================================================== */

function removeFromCart(index) {

  if (
    index < 0 ||
    index >= cart.length
  ) {
    return;
  }


  cart.splice(index, 1);

  updateCart();
}


/* ======================================================
   OPEN / CLOSE CART
====================================================== */

function toggleCart() {

  const drawer =
    document.getElementById("cart-drawer");

  if (!drawer) return;

  drawer.classList.toggle("active");
}


/* ======================================================
   CHECKOUT
====================================================== */

function checkout() {

  if (!cart.length) {

    alert(
      "🛒 Your cart is empty. Please add an item first."
    );

    return;
  }


  const total =
    cart.reduce(
      (sum, item) =>
        sum + Number(item.price),
      0
    );


  alert(
    "🎉 Order Summary\n\n" +
    "Items: " +
    cart.length +
    "\n" +
    "Total: ₹" +
    total +
    "\n\n" +
    "Online payment/order integration can be connected later."
  );
}


/* ======================================================
   LEGAL / INFORMATION PAGES
====================================================== */

function openLegal(type) {

  const content =
    document.getElementById("legal-content");

  const modal =
    document.getElementById("legal-modal");


  if (!content || !modal) return;


  if (type === "about") {

    content.innerHTML = `

      <h2>About Ahmedabad Eats</h2>

      <p>
        Ahmedabad Eats is a restaurant discovery website
        designed to help visitors explore food and dining
        options in Ahmedabad.
      </p>

      <p>
        The website provides searchable restaurant listings,
        cuisine categories, price indicators, sample menus,
        ratings, addresses and map-based information.
      </p>

      <p>
        Our goal is to make restaurant discovery simpler while
        giving visitors useful information for planning their
        dining choices.
      </p>

      <p>
        Restaurant information may change, so users should
        verify important details directly with the restaurant.
      </p>

    `;

  }


  else if (type === "privacy") {

    content.innerHTML = `

      <h2>Privacy Policy</h2>

      <p>
        Ahmedabad Eats respects visitor privacy and aims to
        collect only information necessary to operate and
        improve the website.
      </p>

      <p>
        The website may use cookies or similar technologies
        for functionality, analytics and advertising where
        applicable.
      </p>

      <p>
        Third-party advertising providers may use cookies
        according to their own policies.
      </p>

      <p>
        If you contact Ahmedabad Eats, information provided
        in your message may be used to respond to your request.
      </p>

      <p>
        Contact:
        bhaylugohil376@gmail.com
      </p>

    `;

  }


  else if (type === "terms") {

    content.innerHTML = `

      <h2>Terms & Conditions</h2>

      <p>
        Ahmedabad Eats provides restaurant information for
        general discovery and informational purposes.
      </p>

      <p>
        Restaurant menus, prices, ratings, opening hours,
        addresses and availability may change.
      </p>

      <p>
        Users should verify important information directly
        with the restaurant before visiting or ordering.
      </p>

      <p>
        Ahmedabad Eats does not guarantee that third-party
        restaurant information will always be complete,
        current or error-free.
      </p>

    `;

  }


  else if (type === "contact") {

    content.innerHTML = `

      <h2>Contact Ahmedabad Eats</h2>

      <p>
        Have a correction, suggestion or restaurant-related
        enquiry? Contact Ahmedabad Eats using the information
        below.
      </p>

      <p>
        📧 Email:
        <a
          href="mailto:bhaylugohil376@gmail.com"
          style="color:#38bdf8">

          bhaylugohil376@gmail.com

        </a>
      </p>

      <p>
        📞 Phone:
        <a
          href="tel:7043636973"
          style="color:#38bdf8">

          7043636973

        </a>
      </p>

    `;

  }


  modal.style.display =
    "flex";
}


/* ======================================================
   CLOSE LEGAL MODAL
====================================================== */

function closeLegal() {

  const modal =
    document.getElementById("legal-modal");

  if (modal) {
    modal.style.display =
      "none";
  }
}


/* ======================================================
   CLOSE MODALS ON BACKDROP CLICK
====================================================== */

window.addEventListener(
  "click",
  function (event) {

    const menuModal =
      document.getElementById("menu-modal");

    const detailsModal =
      document.getElementById("details-modal");

    const legalModal =
      document.getElementById("legal-modal");


    if (
      event.target === menuModal
    ) {
      closeMenu();
    }


    if (
      event.target === detailsModal
    ) {
      closeDetails();
    }


    if (
      event.target === legalModal
    ) {
      closeLegal();
    }

  }
);


/* ======================================================
   ESC KEY
====================================================== */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closeMenu();

      closeDetails();

      closeLegal();

    }

  }
);


/* ======================================================
   HTML SAFETY HELPERS
====================================================== */

function escapeHTML(value) {

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

  const temporary =
    document.createElement("div");

  temporary.innerHTML =
    String(value);

  return temporary.textContent || "";
}


/* ======================================================
   START WEBSITE
====================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    displayRestaurants(restaurants);

    updateCart();

  }
);

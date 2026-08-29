/* =====================================================
   AHMEDABAD EATS
   SCRIPT.JS
   Restaurant data + descriptions + filters + menu + cart
   ===================================================== */


/* =====================================================
   RESTAURANT DATA
   ===================================================== */

const restaurants = [

  {
    id: 1,
    name: "Agashiye",
    cuisine: "Gujarati",
    rating: 4.5,
    time: "12:00 PM - 3:00 PM",
    price: "₹₹₹",
    address: "The House of MG, Lal Darwaja, Ahmedabad, Gujarat",
    phone: "",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Agashiye</h3>

      <p>
        Agashiye is presented in Ahmedabad Eats as a Gujarati dining
        destination for people interested in experiencing a traditional
        Gujarati-style meal in a heritage-inspired setting. The restaurant
        is associated with The House of MG in the old city area of Ahmedabad,
        making its location especially interesting for visitors exploring
        the historic character of the city.
      </p>

      <p>
        Gujarati cuisine is known for a broad selection of dishes served
        together rather than a single main course. A traditional thali can
        include vegetables, dal, kadhi, breads, farsan, rice, sweets and
        accompaniments. This style of dining allows visitors to experience
        several flavours during one meal.
      </p>

      <p>
        The menu information shown on Ahmedabad Eats is intended as a
        discovery guide. Menu availability, ingredients, prices and serving
        arrangements can change, so visitors should confirm current details
        with the restaurant before ordering.
      </p>

      <h3>What to Explore</h3>

      <p>
        Visitors interested in Gujarati food may explore dishes such as
        Gujarati thali, khaman, fafda and jalebi-style snacks or traditional
        sweets. These foods represent different parts of Gujarat's culinary
        traditions and can make the dining experience more varied.
      </p>

      <h3>Useful Information</h3>

      <p>
        Agashiye is suitable for visitors looking for a more traditional
        Gujarati dining experience. Because the listed service period may
        differ from the restaurant's current schedule, checking the latest
        opening hours before travelling is recommended.
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
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About 650 - The Global Kitchen</h3>

      <p>
        650 - The Global Kitchen is included in Ahmedabad Eats as a
        multi-cuisine dining option for people who prefer variety when
        choosing a restaurant. A multi-cuisine restaurant can be useful
        for groups where different people want different styles of food.
      </p>

      <p>
        The sample menu listed here includes items such as paneer tikka,
        pasta, pizza and brownie. These dishes represent different culinary
        styles and give visitors an idea of the variety available in the
        restaurant listing.
      </p>

      <p>
        When choosing a multi-cuisine restaurant, visitors can consider
        the type of food they want, the size of their group, the expected
        budget and the restaurant's current operating hours. These factors
        can make the dining decision easier.
      </p>

      <h3>Food Selection</h3>

      <p>
        Paneer tikka provides an Indian-style option, while pasta and pizza
        offer familiar international-style choices. A dessert such as
        brownie can complete a meal. The actual menu can be larger than
        the sample menu shown on this website.
      </p>

      <h3>Before Visiting</h3>

      <p>
        Prices, dishes and availability may change. Ahmedabad Eats displays
        information for restaurant discovery, so customers should confirm
        the current menu and prices directly with the restaurant.
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
    phone: "",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Swati Snacks</h3>

      <p>
        Swati Snacks is featured on Ahmedabad Eats as a Gujarati-focused
        food destination. Gujarati snack culture includes a wide variety
        of savoury and lightly spiced preparations, making snack-focused
        restaurants an important part of Ahmedabad's food landscape.
      </p>

      <p>
        The sample menu includes panki, handvo, pav bhaji and shrikhand.
        Panki and handvo are especially useful examples for visitors who
        want to explore dishes beyond the most common restaurant meals.
      </p>

      <p>
        Gujarati food can vary significantly in flavour, texture and
        preparation. Some dishes are steamed, some are cooked on a griddle,
        while sweets and accompaniments provide a different balance of
        flavours.
      </p>

      <h3>Why Explore Gujarati Snacks?</h3>

      <p>
        Snack restaurants can be a convenient option for visitors who want
        a lighter meal or want to try several regional dishes. Ordering
        different items to share can also provide a broader introduction
        to Gujarati food traditions.
      </p>

      <h3>Dining Information</h3>

      <p>
        The information shown here is intended to help users discover the
        restaurant. Current prices, menu items, timings and availability
        should be confirmed before visiting.
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
    phone: "",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Gordhan Thal</h3>

      <p>
        Gordhan Thal is listed as a Gujarati dining option for visitors
        interested in the traditional thali format. A Gujarati thali is
        generally designed around variety, with several preparations served
        together to create a complete meal.
      </p>

      <p>
        The sample dishes on Ahmedabad Eats include Gujarati thali,
        dal dhokli, kadhi and basundi. Dal dhokli combines wheat-based
        pieces with a lentil preparation, while kadhi provides a distinct
        yoghurt-based element. Basundi represents the sweet side of a
        traditional meal.
      </p>

      <p>
        A thali experience can be useful for first-time visitors because
        it provides an opportunity to sample multiple preparations without
        ordering every dish separately.
      </p>

      <h3>Food Experience</h3>

      <p>
        Visitors can consider a thali when they want a broad introduction
        to Gujarati flavours. Individual dishes can also be useful when
        someone wants to focus on one particular preparation.
      </p>

      <h3>Information to Check</h3>

      <p>
        Restaurant menus and prices are subject to change. Users should
        verify current information directly with the restaurant before
        travelling or placing an order.
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
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Sasuji Dining Hall</h3>

      <p>
        Sasuji Dining Hall is included in the Ahmedabad Eats directory
        as a Gujarati dining option. Dining halls and thali restaurants
        can be particularly useful for visitors who want a straightforward
        meal with several traditional preparations.
      </p>

      <p>
        The sample menu includes Gujarati thali, khichdi, farsan and a
        sweet dish. These categories cover several familiar elements of
        Gujarati food, from savoury snacks to comfort-style meals and
        desserts.
      </p>

      <p>
        Khichdi is commonly associated with simple comfort food, while
        farsan covers a broad group of Gujarati savoury preparations.
        A sweet dish can provide a finishing element to the meal.
      </p>

      <h3>Who May Enjoy It?</h3>

      <p>
        Visitors who are exploring Gujarati cuisine for the first time may
        find a traditional dining format easier to understand than a large
        menu with many unfamiliar names.
      </p>

      <h3>Before You Visit</h3>

      <p>
        Ahmedabad Eats provides sample information for discovery purposes.
        Current dishes, prices, timings and availability should be confirmed
        with the restaurant.
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
    phone: "",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Rajwadu</h3>

      <p>
        Rajwadu is presented as a Gujarati and Kathiyawadi-style dining
        destination in Ahmedabad Eats. The name and dining concept are
        associated with a traditional Gujarati village-inspired atmosphere,
        making the experience about more than just the food.
      </p>

      <p>
        The sample menu includes royal Gujarati thali, Kathiyawadi thali,
        bajra rotla and chaas. Kathiyawadi cuisine is often recognised for
        bold flavours and dishes prepared with regional ingredients.
      </p>

      <p>
        Bajra rotla is a traditional millet-based flatbread commonly paired
        with regional Gujarati preparations. Chaas is a refreshing yoghurt-
        based drink that is often enjoyed alongside meals.
      </p>

      <h3>Dining Experience</h3>

      <p>
        Visitors interested in regional food traditions may consider a
        thali-style meal because it allows several dishes to be experienced
        together. Group dining can also make it easier to sample different
        preparations.
      </p>

      <h3>Important Information</h3>

      <p>
        The menu and prices shown on Ahmedabad Eats are sample listing data.
        Always verify current restaurant information before visiting.
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
    phone: "",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Vishalla</h3>

      <p>
        Vishalla is included in Ahmedabad Eats as a traditional Gujarati
        dining option. It is useful for visitors who want to explore
        regional food in a setting inspired by Gujarati cultural traditions.
      </p>

      <p>
        The sample menu includes a traditional thali, rotla, sev tameta
        and chaas. Sev tameta is a familiar Gujarati preparation combining
        tomato-based gravy with sev, while rotla is a traditional regional
        flatbread.
      </p>

      <p>
        Traditional Gujarati dining often places importance on variety,
        hospitality and combinations of different textures and flavours.
        A thali format reflects this approach by bringing multiple
        preparations together in one meal.
      </p>

      <h3>Food to Explore</h3>

      <p>
        Visitors can consider regional breads and vegetable preparations
        when they want to explore dishes beyond common restaurant staples.
        Chaas can also be a refreshing accompaniment to a Gujarati meal.
      </p>

      <h3>Check Before Ordering</h3>

      <p>
        Restaurant information can change. Please verify the latest menu,
        prices, timings and availability directly with the restaurant.
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
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About The Esplendido</h3>

      <p>
        The Esplendido is included in Ahmedabad Eats as a multi-cuisine
        restaurant listing. Multi-cuisine dining can be convenient for
        families and groups because the menu may provide several different
        food styles in one location.
      </p>

      <p>
        The sample menu contains paneer tikka, biryani, pasta and dessert.
        These dishes provide a combination of Indian favourites and
        international-style options.
      </p>

      <p>
        Paneer tikka can appeal to guests looking for a grilled Indian
        starter, while biryani offers a rice-based main course. Pasta gives
        diners another style of meal, and dessert completes the selection.
      </p>

      <h3>Choosing From a Multi-Cuisine Menu</h3>

      <p>
        When dining with a group, users can compare cuisines, dietary
        preferences and budget before deciding what to order. Checking
        portion sizes and current prices directly with the restaurant can
        also be helpful.
      </p>

      <h3>Restaurant Information</h3>

      <p>
        Ahmedabad Eats provides this page as a discovery resource.
        Information such as menu items, prices and operating hours may
        change over time.
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
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Rajpath Club Restaurant</h3>

      <p>
        Rajpath Club Restaurant is listed as an Indian dining option in
        Ahmedabad Eats. The restaurant listing is intended for visitors
        looking for Indian meals in the S.G. Highway area of Ahmedabad.
      </p>

      <p>
        The sample menu includes butter paneer, vegetable biryani,
        tandoori roti and dal makhani. Together these dishes represent
        familiar North Indian-style choices that are commonly selected
        for lunch or dinner.
      </p>

      <p>
        Indian restaurant menus often combine curries, breads, rice dishes
        and accompaniments. This makes it possible to create a meal by
        pairing a main dish with bread or rice according to preference.
      </p>

      <h3>What the Sample Menu Shows</h3>

      <p>
        Butter paneer provides a paneer-based curry option, while dal
        makhani is a lentil-based dish. Tandoori roti can be paired with
        curries, and vegetable biryani provides a rice-based alternative.
      </p>

      <h3>Before Visiting</h3>

      <p>
        Menu availability, prices and restaurant timings may change.
        Users should confirm current details before making plans.
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
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Peppermint Restaurant</h3>

      <p>
        Peppermint Restaurant is included in the Ahmedabad Eats directory
        as an Indian dining option. The listing is designed to help users
        discover another choice when comparing restaurants by cuisine,
        price and rating.
      </p>

      <p>
        The sample menu includes paneer butter masala, vegetable biryani,
        naan and lassi. These dishes can be combined into a familiar Indian
        meal, with curry, bread, rice and a traditional beverage.
      </p>

      <p>
        Paneer butter masala is a rich paneer-based curry, while naan can
        be used as an accompaniment. Vegetable biryani provides a rice-based
        option and lassi offers a cooling drink choice.
      </p>

      <h3>Planning a Meal</h3>

      <p>
        Users can compare the menu with their personal preferences and
        budget before deciding what to order. Sharing several dishes can
        also be a practical way to explore different flavours.
      </p>

      <h3>Information Notice</h3>

      <p>
        The details displayed on Ahmedabad Eats are intended for discovery.
        Current restaurant information should be verified before visiting.
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
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Nanjing</h3>

      <p>
        Nanjing is presented on Ahmedabad Eats as a multi-cuisine restaurant
        listing with a selection of popular Indo-Chinese-style dishes.
        This type of food is widely enjoyed in Indian cities and often
        combines familiar Indian ingredients with Chinese-inspired cooking
        techniques and flavours.
      </p>

      <p>
        The sample menu includes noodles, Manchurian, fried rice and spring
        rolls. These dishes provide different textures and preparation
        styles, making them suitable for individual meals or sharing.
      </p>

      <p>
        Noodles and fried rice are common choices for a filling meal,
        while spring rolls can work as a starter. Manchurian is another
        popular Indo-Chinese preparation that is frequently served with
        sauces or gravy.
      </p>

      <h3>For Food Explorers</h3>

      <p>
        Visitors who enjoy Indo-Chinese flavours can compare different
        dishes and choose between rice, noodles and starter-style options.
        Sharing multiple dishes can provide more variety.
      </p>

      <h3>Important Notice</h3>

      <p>
        Menus and prices can change. Confirm current availability and
        pricing with the restaurant before ordering.
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
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Gajanand Pauva House</h3>

      <p>
        Gajanand Pauva House is included in Ahmedabad Eats as a budget-
        friendly Indian food option. Poha is particularly popular as a
        breakfast and light-meal dish because it is generally quick to
        serve and can be prepared with different ingredients and toppings.
      </p>

      <p>
        The sample menu includes poha, masala poha, tea and jalebi.
        Together they represent a simple combination suitable for breakfast
        or a quick snack.
      </p>

      <p>
        Masala poha can provide a more strongly seasoned variation of the
        basic dish. Tea is a familiar accompaniment, while jalebi offers
        a sweet option for people looking to finish their meal with dessert.
      </p>

      <h3>Budget Dining</h3>

      <p>
        Small breakfast and snack-focused restaurants can be useful for
        visitors who want an affordable meal without spending a long time
        at a full-service restaurant.
      </p>

      <h3>Current Information</h3>

      <p>
        The prices and menu displayed here are sample listing information.
        Check current prices, timings and availability before visiting.
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
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Honest Restaurant</h3>

      <p>
        Honest Restaurant is listed by Ahmedabad Eats as an Indian dining
        option with a varied menu. The sample dishes cover several popular
        categories, making the listing useful for people who want to compare
        different types of meals.
      </p>

      <p>
        The sample menu includes pav bhaji, pulav, masala dosa and pizza.
        This combination reflects the broad range often found in casual
        Indian restaurant menus.
      </p>

      <p>
        Pav bhaji is a popular street-food-inspired dish consisting of
        spiced vegetable preparation served with bread. Masala dosa provides
        a South Indian-style option, while pulav offers a rice-based meal.
        Pizza adds another familiar choice.
      </p>

      <h3>Choosing From the Menu</h3>

      <p>
        A varied menu can be helpful for families or groups with different
        preferences. Visitors can select a lighter snack, a rice dish,
        a dosa or another main meal depending on what they want.
      </p>

      <h3>Restaurant Information</h3>

      <p>
        Ahmedabad Eats provides this information for discovery purposes.
        Always confirm the restaurant's current menu, prices and timings.
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
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Atithi Dining Hall</h3>

      <p>
        Atithi Dining Hall is featured on Ahmedabad Eats as a Gujarati
        dining option. The listing focuses on traditional-style meals and
        familiar Gujarati dishes for visitors exploring Ahmedabad's food
        culture.
      </p>

      <p>
        The sample menu includes Gujarati thali, dal dhokli, farsan and
        shrikhand. These dishes represent different parts of a Gujarati
        meal, including savoury preparations, lentils, snacks and sweets.
      </p>

      <p>
        Gujarati cuisine is often appreciated for its variety and balance
        of different flavours. A thali brings several preparations together,
        allowing diners to experience more than one dish during the same
        meal.
      </p>

      <h3>What Visitors Can Explore</h3>

      <p>
        Guests unfamiliar with Gujarati cuisine can begin with a thali,
        while people already familiar with the cuisine may prefer selecting
        individual dishes such as dal dhokli or shrikhand.
      </p>

      <h3>Verify Before Visiting</h3>

      <p>
        Restaurant timings, menus and prices can change. Users should
        verify the latest information directly with the restaurant.
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
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",

    description: `
      <h3>About Karnavati Dabeli</h3>

      <p>
        Karnavati Dabeli is included in Ahmedabad Eats as a budget-oriented
        Indian snack listing. Dabeli is strongly associated with Gujarat
        and is a popular choice for people looking for a quick and
        inexpensive snack.
      </p>

      <p>
        The sample menu includes dabeli, cheese dabeli, vada pav and a
        cold drink. These choices provide a mixture of traditional
        snack-style food and familiar fast-food options.
      </p>

      <p>
        Dabeli is generally built around a spiced potato filling served
        inside a bun with additional ingredients that can provide sweetness,
        crunch and texture. Variations may add cheese or other toppings.
      </p>

      <h3>Quick Food Option</h3>

      <p>
        Snack-focused restaurants can be convenient for breakfast, an
        evening snack or a quick meal. Their lower price category can also
        make them useful for visitors travelling on a limited food budget.
      </p>

      <h3>Check Current Details</h3>

      <p>
        Menu items and prices shown on Ahmedabad Eats are sample information.
        Confirm current availability and pricing before ordering.
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


/* =====================================================
   CART
   ===================================================== */

let cart = [];


/* =====================================================
   DISPLAY RESTAURANTS
   ===================================================== */

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
        src="${rest.image}"
        alt="${escapeHTML(rest.name)}"
        loading="lazy"
      >

      <div class="card-info">

        <h2>${escapeHTML(rest.name)}</h2>

        <div class="cuisine">
          🍛 ${escapeHTML(rest.cuisine)}
        </div>

        <div class="details">

          ⭐ ${rest.rating}
          &nbsp; • &nbsp;
          ${escapeHTML(rest.time)}

          <br>

          💰 ${escapeHTML(rest.price)}

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


/* =====================================================
   SEARCH + FILTER
   ===================================================== */

function applyFilters() {

  const searchElement =
    document.getElementById("search");

  const cuisineElement =
    document.getElementById("cuisineFilter");

  const priceElement =
    document.getElementById("priceFilter");

  const ratingElement =
    document.getElementById("ratingFilter");

  const search =
    searchElement
      ? searchElement.value.toLowerCase().trim()
      : "";

  const cuisine =
    cuisineElement
      ? cuisineElement.value
      : "All";

  const price =
    priceElement
      ? priceElement.value
      : "All";

  const rating =
    ratingElement
      ? ratingElement.value
      : "All";

  const minRating =
    rating === "All"
      ? 0
      : parseFloat(rating);


  const filtered = restaurants.filter(rest => {

    const searchMatch =
      !search ||
      rest.name.toLowerCase().includes(search) ||
      rest.cuisine.toLowerCase().includes(search) ||
      rest.address.toLowerCase().includes(search);


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


/* =====================================================
   RESET FILTERS
   ===================================================== */

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


/* =====================================================
   SHOW MENU
   ===================================================== */

function showMenu(id) {

  const restaurant =
    restaurants.find(item => item.id === id);

  if (!restaurant) return;


  const title =
    document.getElementById("modal-rest-name");

  const box =
    document.getElementById("modal-menu-items");

  const modal =
    document.getElementById("menu-modal");


  if (!title || !box || !modal) return;


  title.textContent =
    restaurant.name + " - Menu";


  box.innerHTML = "";


  restaurant.menu.forEach(item => {

    const name = item[0];

    const price = Number(item[1]);


    const row =
      document.createElement("div");

    row.className = "menu-item";


    row.innerHTML = `

      <div>

        <strong>
          ${escapeHTML(name)}
        </strong>

        <br>

        <span>
          ₹${price}
        </span>

      </div>

      <button
        class="add-btn"
        onclick="addToCart(
          ${JSON.stringify(restaurant.name)},
          ${JSON.stringify(name)},
          ${price}
        )"
      >
        + Add
      </button>

    `;


    box.appendChild(row);

  });


  modal.style.display = "flex";

  modal.setAttribute("aria-hidden", "false");

}


/* =====================================================
   CLOSE MENU
   ===================================================== */

function closeMenu() {

  const modal =
    document.getElementById("menu-modal");

  if (!modal) return;

  modal.style.display = "none";

  modal.setAttribute("aria-hidden", "true");

}


/* =====================================================
   SHOW RESTAURANT DETAILS
   ===================================================== */

function showDetails(id) {

  const restaurant =
    restaurants.find(item => item.id === id);

  if (!restaurant) return;


  const name =
    document.getElementById("detail-rest-name");

  const description =
    document.getElementById("detail-rest-description");

  const cuisine =
    document.getElementById("detail-rest-cuisine");

  const rating =
    document.getElementById("detail-rest-rating");

  const price =
    document.getElementById("detail-rest-price");

  const time =
    document.getElementById("detail-rest-time");

  const address =
    document.getElementById("detail-rest-address");

  const phone =
    document.getElementById("detail-rest-phone");

  const map =
    document.getElementById("detail-rest-map");

  const modal =
    document.getElementById("details-modal");


  if (!name || !description || !modal) return;


  name.textContent =
    restaurant.name;


  description.innerHTML =
    restaurant.description;


  cuisine.textContent =
    "🍛 Cuisine: " + restaurant.cuisine;


  rating.textContent =
    "⭐ Rating: " + restaurant.rating;


  price.textContent =
    "💰 Price: " + restaurant.price;


  time.textContent =
    "⏰ Hours: " + restaurant.time;


  address.textContent =
    "📍 Address: " + restaurant.address;


  phone.textContent =
    restaurant.phone
      ? "📞 " + restaurant.phone
      : "📞 Contact details not available";


  if (map) {

    map.src =
      "https://www.google.com/maps?q=" +
      encodeURIComponent(
        restaurant.name + ", " +
        restaurant.address
      ) +
      "&output=embed";

  }


  modal.style.display = "flex";

  modal.setAttribute("aria-hidden", "false");

}


/* =====================================================
   CLOSE DETAILS
   ===================================================== */

function closeDetails() {

  const modal =
    document.getElementById("details-modal");

  if (!modal) return;

  modal.style.display = "none";

  modal.setAttribute("aria-hidden", "true");

}


/* =====================================================
   CART - ADD
   ===================================================== */

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

  alert(
    "✅ " + item + " added to cart"
  );

}


/* =====================================================
   UPDATE CART
   ===================================================== */

function updateCart() {

  const count =
    document.getElementById("cart-count");

  const box =
    document.getElementById("cart-items");

  const totalBox =
    document.getElementById("cart-total");


  if (!count || !box || !totalBox) return;


  count.textContent =
    cart.length;


  if (!cart.length) {

    box.innerHTML =
      "<p>Your cart is empty.</p>";

    totalBox.textContent =
      "0";

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


    row.innerHTML = `

      <div>

        <strong>
          ${escapeHTML(item.item)}
        </strong>

        <br>

        <small>
          ${escapeHTML(item.restaurant)}
        </small>

        <br>

        ₹${Number(item.price)}

      </div>

      <button
        class="cart-remove"
        onclick="removeFromCart(${index})"
      >
        ✕
      </button>

    `;


    box.appendChild(row);

  });


  totalBox.textContent =
    total;

}


/* =====================================================
   REMOVE CART ITEM
   ===================================================== */

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


/* =====================================================
   OPEN / CLOSE CART
   ===================================================== */

function toggleCart() {

  const drawer =
    document.getElementById("cart-drawer");

  if (!drawer) return;

  drawer.classList.toggle("active");

}


/* =====================================================
   CHECKOUT
   ===================================================== */

function checkout() {

  if (!cart.length) {

    alert(
      "🛒 Your cart is empty."
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
    "🎉 Order Ready!\n\n" +
    "Total Amount: ₹" +
    total +
    "\n\n" +
    "Online payment/order integration can be connected later."
  );

}


/* =====================================================
   LEGAL CONTENT
   ===================================================== */

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
        Ahmedabad Eats is a restaurant discovery website designed
        to help users explore food and dining options in Ahmedabad.
        The website brings restaurant names, cuisines, sample menus,
        ratings, price categories, descriptions and location information
        together in one place.
      </p>

      <p>
        Our aim is to make restaurant discovery easier while providing
        useful context about different types of food available in the city.
      </p>

    `;

  }


  else if (type === "privacy") {

    content.innerHTML = `

      <h2>Privacy Policy</h2>

      <p>
        Ahmedabad Eats respects user privacy. Information may be
        processed when users interact with website features such as
        forms, contact links or other services.
      </p>

      <p>
        The website may use cookies or similar technologies for
        functionality, analytics or advertising where applicable.
      </p>

      <p>
        Third-party advertising services may have their own privacy
        policies and cookie practices.
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
        Ahmedabad Eats provides restaurant information for general
        discovery and informational purposes.
      </p>

      <p>
        Restaurant menus, prices, ratings, addresses, opening hours
        and availability may change without notice.
      </p>

      <p>
        Users should verify important information directly with the
        restaurant before visiting or placing an order.
      </p>

      <p>
        Ahmedabad Eats does not guarantee the accuracy or continued
        availability of information supplied by third parties.
      </p>

    `;

  }


  else if (type === "contact") {

    content.innerHTML = `

      <h2>Contact Ahmedabad Eats</h2>

      <p>
        For questions, corrections, suggestions or restaurant
        information updates, contact us.
      </p>

      <p>
        📧 Email:
        <a
          href="mailto:bhaylugohil376@gmail.com"
          style="color:#38bdf8"
        >
          bhaylugohil376@gmail.com
        </a>
      </p>

      <p>
        📞 Phone:
        <a
          href="tel:7043636973"
          style="color:#38bdf8"
        >
          7043636973
        </a>
      </p>

    `;

  }


  modal.style.display =
    "flex";

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

}


/* =====================================================
   CLOSE LEGAL
   ===================================================== */

function closeLegal() {

  const modal =
    document.getElementById("legal-modal");

  if (!modal) return;

  modal.style.display =
    "none";

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


/* =====================================================
   ESCAPE HTML
   ===================================================== */

function escapeHTML(value) {

  return String(value)

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");

}


/* =====================================================
   MODAL OUTSIDE CLICK
   ===================================================== */

window.addEventListener(
  "click",
  function(event) {

    const menuModal =
      document.getElementById("menu-modal");

    const detailsModal =
      document.getElementById("details-modal");

    const legalModal =
      document.getElementById("legal-modal");


    if (
      menuModal &&
      event.target === menuModal
    ) {

      closeMenu();

    }


    if (
      detailsModal &&
      event.target === detailsModal
    ) {

      closeDetails();

    }


    if (
      legalModal &&
      event.target === legalModal
    ) {

      closeLegal();

    }

  }
);


/* =====================================================
   ESC KEY
   ===================================================== */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key !== "Escape") return;

    closeMenu();
    closeDetails();
    closeLegal();

  }
);


/* =====================================================
   START
   ===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    displayRestaurants(restaurants);

    updateCart();

  }
);

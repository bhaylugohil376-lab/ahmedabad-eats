const restaurants = [

  {
    id: 1,
    name: "Agashiye",
    category: "Gujarati • Thali",
    rating: "4.6 ⭐",
    image: "AI_PHOTO_1",
    about: "Traditional Gujarati dining experience in Ahmedabad.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_1",
    hours: "12:00 PM – 10:30 PM",
    latitude: 23.0258,
    longitude: 72.5873,
    menu: [
      ["Gujarati Thali", "₹350"],
      ["Farsan", "₹120"],
      ["Dal", "₹100"],
      ["Rotli", "₹80"],
      ["Shrikhand", "₹120"]
    ]
  },

  {
    id: 2,
    name: "650 - The Global Kitchen",
    category: "Multi Cuisine • Restaurant",
    rating: "4.5 ⭐",
    image: "AI_PHOTO_2",
    about: "Multi-cuisine restaurant offering a variety of dishes.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_2",
    hours: "11:00 AM – 11:00 PM",
    latitude: 23.0395,
    longitude: 72.5280,
    menu: [
      ["Paneer Tikka", "₹240"],
      ["Veg Biryani", "₹220"],
      ["Pizza", "₹280"],
      ["Pasta", "₹250"],
      ["Dessert", "₹150"]
    ]
  },

  {
    id: 3,
    name: "Vishalla",
    category: "Gujarati • Traditional",
    rating: "4.5 ⭐",
    image: "AI_PHOTO_3",
    about: "Traditional Gujarati food and village-style dining experience.",
    address: "Vasna, Ahmedabad, Gujarat, India",
    phone: "CONTACT_3",
    hours: "6:30 PM – 11:00 PM",
    latitude: 22.9975,
    longitude: 72.5300,
    menu: [
      ["Gujarati Thali", "₹400"],
      ["Rotla", "₹100"],
      ["Kathiyawadi Shaak", "₹180"],
      ["Chaas", "₹60"],
      ["Sweet", "₹120"]
    ]
  },

  {
    id: 4,
    name: "Spiceville Restaurant",
    category: "Indian • Multi Cuisine",
    rating: "4.4 ⭐",
    image: "AI_PHOTO_4",
    about: "Indian restaurant serving a variety of popular dishes.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_4",
    hours: "11:00 AM – 11:00 PM",
    latitude: 23.0225,
    longitude: 72.5714,
    menu: [
      ["Butter Paneer", "₹230"],
      ["Dal Makhani", "₹190"],
      ["Veg Biryani", "₹200"],
      ["Butter Naan", "₹60"],
      ["Lassi", "₹90"]
    ]
  },

  {
    id: 5,
    name: "The Green House",
    category: "Indian • Vegetarian",
    rating: "4.5 ⭐",
    image: "AI_PHOTO_5",
    about: "Vegetarian dining with Indian and contemporary dishes.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_5",
    hours: "12:00 PM – 10:30 PM",
    latitude: 23.0276,
    longitude: 72.5072,
    menu: [
      ["Paneer Masala", "₹220"],
      ["Veg Pulao", "₹180"],
      ["Dal Tadka", "₹160"],
      ["Naan", "₹50"],
      ["Gulab Jamun", "₹90"]
    ]
  },

  {
    id: 6,
    name: "Under The Neem Trees",
    category: "Indian • Fine Dining",
    rating: "4.6 ⭐",
    image: "AI_PHOTO_6",
    about: "Relaxed dining experience surrounded by greenery.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_6",
    hours: "12:00 PM – 11:00 PM",
    latitude: 23.0225,
    longitude: 72.5714,
    menu: [
      ["Special Thali", "₹350"],
      ["Paneer Tikka", "₹250"],
      ["Veg Curry", "₹200"],
      ["Rice", "₹150"],
      ["Dessert", "₹120"]
    ]
  },

  {
    id: 7,
    name: "Tinello",
    category: "Italian • Multi Cuisine",
    rating: "4.5 ⭐",
    image: "AI_PHOTO_7",
    about: "Contemporary restaurant with international cuisine.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_7",
    hours: "12:00 PM – 11:00 PM",
    latitude: 23.0400,
    longitude: 72.5100,
    menu: [
      ["Margherita Pizza", "₹350"],
      ["Pasta", "₹320"],
      ["Risotto", "₹350"],
      ["Soup", "₹180"],
      ["Dessert", "₹200"]
    ]
  },

  {
    id: 8,
    name: "Earthen Oven",
    category: "North Indian • Tandoor",
    rating: "4.5 ⭐",
    image: "AI_PHOTO_8",
    about: "North Indian restaurant known for tandoor dishes.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_8",
    hours: "12:00 PM – 11:00 PM",
    latitude: 23.0390,
    longitude: 72.5320,
    menu: [
      ["Tandoori Paneer", "₹260"],
      ["Tandoori Chicken", "₹340"],
      ["Dal Makhani", "₹220"],
      ["Garlic Naan", "₹70"],
      ["Biryani", "₹250"]
    ]
  },

  {
    id: 9,
    name: "Gordhan Thal",
    category: "Gujarati • Thali",
    rating: "4.4 ⭐",
    image: "AI_PHOTO_9",
    about: "Gujarati thali restaurant offering traditional meals.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_9",
    hours: "11:30 AM – 10:30 PM",
    latitude: 23.0300,
    longitude: 72.5600,
    menu: [
      ["Gujarati Thali", "₹300"],
      ["Farsan", "₹100"],
      ["Kathiyawadi Shaak", "₹180"],
      ["Chaas", "₹50"],
      ["Jalebi", "₹100"]
    ]
  },

  {
    id: 10,
    name: "@Mango",
    category: "Multi Cuisine • Cafe",
    rating: "4.3 ⭐",
    image: "AI_PHOTO_10",
    about: "Casual dining and cafe-style restaurant.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_10",
    hours: "11:00 AM – 11:00 PM",
    latitude: 23.0350,
    longitude: 72.5600,
    menu: [
      ["Burger", "₹180"],
      ["Pizza", "₹250"],
      ["Pasta", "₹220"],
      ["Sandwich", "₹150"],
      ["Cold Coffee", "₹130"]
    ]
  },

  {
    id: 11,
    name: "Bluez Restaurant",
    category: "Restaurant • Cafe",
    rating: "4.4 ⭐",
    image: "AI_PHOTO_11",
    about: "Restaurant and cafe with a comfortable dining atmosphere.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_11",
    hours: "11:00 AM – 11:30 PM",
    latitude: 23.0225,
    longitude: 72.5714,
    menu: [
      ["Paneer Tikka", "₹230"],
      ["Pizza", "₹280"],
      ["Pasta", "₹240"],
      ["Burger", "₹180"],
      ["Mocktail", "₹150"]
    ]
  },

  {
    id: 12,
    name: "TG'S - The Oriental Grill",
    category: "Asian • Oriental",
    rating: "4.5 ⭐",
    image: "AI_PHOTO_12",
    about: "Oriental cuisine and grilled specialties.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_12",
    hours: "12:00 PM – 11:00 PM",
    latitude: 23.0390,
    longitude: 72.5320,
    menu: [
      ["Spring Rolls", "₹180"],
      ["Hakka Noodles", "₹220"],
      ["Fried Rice", "₹210"],
      ["Grilled Vegetables", "₹250"],
      ["Dessert", "₹150"]
    ]
  },

  {
    id: 13,
    name: "The Great Kabab Factory",
    category: "Kebab • North Indian",
    rating: "4.6 ⭐",
    image: "AI_PHOTO_13",
    about: "Restaurant specializing in kebabs and North Indian cuisine.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_13",
    hours: "12:00 PM – 11:00 PM",
    latitude: 23.0390,
    longitude: 72.5320,
    menu: [
      ["Seekh Kebab", "₹350"],
      ["Paneer Kebab", "₹280"],
      ["Tandoori Chicken", "₹360"],
      ["Dal", "₹200"],
      ["Naan", "₹60"]
    ]
  },

  {
    id: 14,
    name: "FoodInn Restaurant",
    category: "Indian • Chinese",
    rating: "4.3 ⭐",
    image: "AI_PHOTO_14",
    about: "Casual restaurant serving Indian and Chinese dishes.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_14",
    hours: "11:00 AM – 11:00 PM",
    latitude: 23.0225,
    longitude: 72.5714,
    menu: [
      ["Manchurian", "₹180"],
      ["Fried Rice", "₹170"],
      ["Paneer Butter Masala", "₹220"],
      ["Noodles", "₹180"],
      ["Butter Naan", "₹50"]
    ]
  },

  {
    id: 15,
    name: "The Eatery",
    category: "Multi Cuisine • Restaurant",
    rating: "4.4 ⭐",
    image: "AI_PHOTO_15",
    about: "Multi-cuisine restaurant offering Indian and international dishes.",
    address: "Ahmedabad, Gujarat, India",
    phone: "CONTACT_15",
    hours: "7:00 AM – 11:00 PM",
    latitude: 23.0390,
    longitude: 72.5320,
    menu: [
      ["Breakfast", "₹180"],
      ["Gujarati Thali", "₹300"],
      ["Paneer Curry", "₹220"],
      ["Biryani", "₹240"],
      ["Dessert", "₹150"]
    ]
  }

];

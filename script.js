const restaurants = [
    {
        id: 1,
        name: "Agashiye",
        cuisine: "Gujarati, Thali",
        rating: "4.6",
        time: "35 mins",
        price: "₹800 for two",
        address: "The House of MG, Opp. Sidi Saiyad Mosque, Lal Darwaja, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Agashiye+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 450 },
            { name: "Farsan", price: 150 },
            { name: "Gujarati Sweet", price: 120 }
        ]
    },
    {
        id: 2,
        name: "Swati Snacks",
        cuisine: "Gujarati, Indian",
        rating: "4.5",
        time: "25 mins",
        price: "₹600 for two",
        address: "Law Garden, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Swati+Snacks+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800&q=80",
        menu: [
            { name: "Panki", price: 180 },
            { name: "Khichdi", price: 220 },
            { name: "Handvo", price: 180 }
        ]
    },
    {
        id: 3,
        name: "Vishalla",
        cuisine: "Gujarati, Traditional",
        rating: "4.4",
        time: "40 mins",
        price: "₹900 for two",
        address: "Vasna, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Vishalla+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1626500155537-7d9b5c5c1b6b?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 450 },
            { name: "Rotla", price: 120 },
            { name: "Chaas", price: 60 }
        ]
    },
    {
        id: 4,
        name: "Rajwadu",
        cuisine: "Gujarati, Rajasthani",
        rating: "4.3",
        time: "40 mins",
        price: "₹800 for two",
        address: "Vejalpur, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Rajwadu+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 420 },
            { name: "Dal Baati", price: 280 },
            { name: "Rotla", price: 100 }
        ]
    },
    {
        id: 5,
        name: "Gordhan Thal",
        cuisine: "Gujarati Thali",
        rating: "4.5",
        time: "35 mins",
        price: "₹700 for two",
        address: "S.G. Highway, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Gordhan+Thal+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 350 },
            { name: "Kachumber", price: 100 },
            { name: "Shrikhand", price: 120 }
        ]
    },
    {
        id: 6,
        name: "Iscon Thal",
        cuisine: "Gujarati, North Indian",
        rating: "4.4",
        time: "30 mins",
        price: "₹600 for two",
        address: "S.G. Highway, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Iscon+Thal+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 320 },
            { name: "Paneer Sabji", price: 180 },
            { name: "Basundi", price: 120 }
        ]
    },
    {
        id: 7,
        name: "Kansar Gujarati Thali",
        cuisine: "Gujarati",
        rating: "4.3",
        time: "35 mins",
        price: "₹650 for two",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Kansar+Gujarati+Thali+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 330 },
            { name: "Farsan", price: 130 },
            { name: "Jalebi", price: 100 }
        ]
    },
    {
        id: 8,
        name: "Rotlo Gujarati Rasthal",
        cuisine: "Gujarati, Kathiyawadi",
        rating: "4.2",
        time: "30 mins",
        price: "₹500 for two",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Rotlo+Gujarati+Rasthal+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800&q=80",
        menu: [
            { name: "Bajra Rotla", price: 100 },
            { name: "Sev Tameta", price: 150 },
            { name: "Kathiyawadi Thali", price: 300 }
        ]
    },
    {
        id: 9,
        name: "The Green House",
        cuisine: "Indian, Vegetarian",
        rating: "4.4",
        time: "30 mins",
        price: "₹700 for two",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=The+Green+House+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&q=80",
        menu: [
            { name: "Paneer Tikka", price: 240 },
            { name: "Dal Tadka", price: 180 },
            { name: "Naan", price: 60 }
        ]
    },
    {
        id: 10,
        name: "Tomato's",
        cuisine: "Multi Cuisine",
        rating: "4.3",
        time: "30 mins",
        price: "₹800 for two",
        address: "C.G. Road, Ahmedabad",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Tomatos+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
        menu: [
            { name: "Pizza", price: 280 },
            { name: "Pasta", price: 240 },
            { name: "Garlic Bread", price: 150 }
        ]
    },
    {
        id: 11,
        name: "Dhebar's Gujarati Restaurant",
        cuisine: "Gujarati",
        rating: "4.2",
        time: "25 mins",
        price: "₹500 for two",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Gujarati+restaurant+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 300 },
            { name: "Dhokla", price: 100 },
            { name: "Kadhi", price: 100 }
        ]
    },
    {
        id: 12,
        name: "Honest Restaurant",
        cuisine: "Indian, Fast Food",
        rating: "4.2",
        time: "25 mins",
        price: "₹450 for two",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Honest+Restaurant+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&q=80",
        menu: [
            { name: "Pav Bhaji", price: 160 },
            { name: "Masala Dosa", price: 150 },
            { name: "Pulav", price: 180 }
        ]
    },
    {
        id: 13,
        name: "Gopi Dining Hall",
        cuisine: "Gujarati, Thali",
        rating: "4.3",
        time: "30 mins",
        price: "₹500 for two",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Gopi+Dining+Hall+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 300 },
            { name: "Farsan Plate", price: 120 },
            { name: "Sweet", price: 100 }
        ]
    },
    {
        id: 14,
        name: "Sasuji Dining Hall",
        cuisine: "Gujarati, North Indian",
        rating: "4.2",
        time: "30 mins",
        price: "₹600 for two",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Sasuji+Dining+Hall+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
        menu: [
            { name: "Gujarati Thali", price: 320 },
            { name: "Paneer Sabji", price: 180 },
            { name: "Dal Rice", price: 150 }
        ]
    },
    {
        id: 15,
        name: "Sankalp Restaurant",
        cuisine: "South Indian",
        rating: "4.3",
        time: "25 mins",
        price: "₹500 for two",
        address: "Ahmedabad, Gujarat",
        phone: "",
        mapUrl: "https://www.google.com/maps?q=Sankalp+Restaurant+Ahmedabad&output=embed",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
        menu: [
            { name: "Masala Dosa", price: 180 },
            { name: "Idli Sambar", price: 120 },
            { name: "Mysore Dosa", price: 200 }
        ]
    }
];

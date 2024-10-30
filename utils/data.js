const Restaurants = [
  {
    name: "The Gourmet Bistro",
    id: "the-gourmet-bistro",
    cuisine: "italian",
  },
  {
    name: "Spicy Kitchen",
    id: "spicy-kitchen",
    cuisine: "indian",
  },
  {
    name: "Healthy Eats",
    id: "healthy-eats",
    cuisine: "vegan",
  },
  {
    name: "Comfort Diner",
    id: "comfort-diner",
    cuisine: "chinese",
  },
  {
    name: "Sweet Tooth Bakery",
    id: "sweet-tooth-bakery",
    cuisine: "mexican",
  },
];

const Cuisines = ["italian", "indian", "chinese", "vegan", "mexican"];

//Dishes generated courtesy of ChatGPT, I have absolutely no idea if these are real dishes, or if the descriptions are correct.
const Dishes = {
  italian: [
    {
      name: "Spaghetti Carbonara",
      description:
        "Classic Roman pasta with eggs, cheese, pancetta, and pepper.",
      price: 12.99,
      special: true,
    },
    {
      name: "Margherita Pizza",
      description:
        "Simple pizza topped with tomato, mozzarella, and fresh basil.",
      price: 10.99,
      special: false,
    },
    {
      name: "Lasagna",
      description: "Layers of pasta with meat sauce, béchamel, and cheese.",
      price: 14.99,
      special: false,
    },
    {
      name: "Risotto",
      description:
        "Creamy Arborio rice cooked with broth, flavored with saffron.",
      price: 11.99,
      special: true,
    },
    {
      name: "Tiramisu",
      description:
        "Coffee-flavored dessert with layers of mascarpone and cocoa.",
      price: 9.99,
      special: false,
    },
    {
      name: "Penne Arrabbiata",
      description: "Pasta in a spicy tomato sauce with garlic and chili.",
      price: 12.99,
      special: true,
    },
    {
      name: "Fettuccine Alfredo",
      description: "Creamy pasta dish with butter and Parmesan cheese.",
      price: 11.99,
      special: false,
    },
    {
      name: "Bruschetta",
      description:
        "Toasted bread topped with diced tomatoes, garlic, and basil.",
      price: 8.99,
      special: false,
    },
    {
      name: "Caprese Salad",
      description:
        "Fresh mozzarella, tomatoes, and basil drizzled with balsamic.",
      price: 9.99,
      special: false,
    },
    {
      name: "Gnocchi",
      description: "Soft potato dumplings served with various sauces.",
      price: 10.99,
      special: false,
    },
    {
      name: "Pesto Pasta",
      description: "Pasta tossed with basil pesto, garlic, and pine nuts.",
      price: 11.99,
      special: true,
    },
    {
      name: "Osso Buco",
      description: "Braised veal shanks cooked with vegetables and broth.",
      price: 14.99,
      special: true,
    },
    {
      name: "Ribollita",
      description: "Tuscan soup made with bread, beans, and vegetables.",
      price: 12.99,
      special: false,
    },
    {
      name: "Bolognese Sauce",
      description:
        "Rich meat sauce made with ground beef, tomatoes, and herbs.",
      price: 11.99,
      special: true,
    },
    {
      name: "Arancini",
      description: "Fried rice balls filled with cheese or meat.",
      price: 10.99,
      special: false,
    },
    {
      name: "Panna Cotta",
      description:
        "Creamy dessert made with sweetened cream thickened with gelatin.",
      price: 9.99,
      special: false,
    },
    {
      name: "Saltimbocca",
      description: "Veal wrapped in prosciutto and sage, cooked in white wine.",
      price: 14.99,
      special: true,
    },
    {
      name: "Focaccia",
      description: "Flat oven-baked bread topped with herbs and olive oil.",
      price: 8.99,
      special: false,
    },
    {
      name: "Cioppino",
      description: "Seafood stew made with fish, shellfish, and tomato broth.",
      price: 12.99,
      special: true,
    },
    {
      name: "Cacciucco",
      description: "Tuscan fish stew with various seafood and bread.",
      price: 14.99,
      special: true,
    },
  ],
  chinese: [
    {
      name: "Sweet and Sour Pork",
      description: "Pork cooked in a tangy sweet and sour sauce.",
      price: 12.99,
      special: true,
    },
    {
      name: "Kung Pao Chicken",
      description: "Spicy stir-fried chicken with peanuts and vegetables.",
      price: 14.99,
      special: true,
    },
    {
      name: "Spring Rolls",
      description: "Crispy rolls filled with vegetables and sometimes meat.",
      price: 9.99,
      special: false,
    },
    {
      name: "Peking Duck",
      description: "Crispy-skinned duck served with pancakes and hoisin sauce.",
      price: 16.99,
      special: true,
    },
    {
      name: "Mapo Tofu",
      description: "Spicy tofu dish with minced meat and chili bean paste.",
      price: 11.99,
      special: false,
    },
    {
      name: "Chow Mein",
      description: "Stir-fried noodles with vegetables and meat or tofu.",
      price: 10.99,
      special: false,
    },
    {
      name: "Dumplings",
      description:
        "Stuffed dough pockets, steamed or fried, often filled with meat or vegetables.",
      price: 8.99,
      special: false,
    },
    {
      name: "Hot Pot",
      description:
        "Dish where ingredients are cooked in a simmering pot of broth at the table.",
      price: 14.99,
      special: true,
    },
    {
      name: "Fried Rice",
      description: "Stir-fried rice with vegetables, eggs, and choice of meat.",
      price: 9.99,
      special: false,
    },
    {
      name: "Egg Foo Young",
      description: "Omelet filled with vegetables and meat, served with gravy.",
      price: 12.99,
      special: true,
    },
    {
      name: "Char Siu",
      description: "Cantonese roasted pork with a sweet and savory glaze.",
      price: 14.99,
      special: true,
    },
    {
      name: "Wonton Soup",
      description: "Soup with wontons filled with meat or shrimp.",
      price: 9.99,
      special: false,
    },
    {
      name: "Ma Po Tofu",
      description: "Tofu in a spicy sauce with minced meat and scallions.",
      price: 11.99,
      special: false,
    },
    {
      name: "Szechuan Pepper Chicken",
      description: "Spicy chicken stir-fried with Szechuan peppercorns.",
      price: 14.99,
      special: true,
    },
    {
      name: "Beef and Broccoli",
      description: "Stir-fried beef with broccoli in a savory sauce.",
      price: 12.99,
      special: true,
    },
    {
      name: "Sesame Chicken",
      description: "Fried chicken in a sweet sesame sauce.",
      price: 11.99,
      special: false,
    },
    {
      name: "Mongolian Beef",
      description: "Beef stir-fried with green onions and soy sauce.",
      price: 14.99,
      special: true,
    },
    {
      name: "Chili Garlic Shrimp",
      description: "Shrimp cooked with garlic and chili sauce.",
      price: 12.99,
      special: true,
    },
    {
      name: "Buddha Bowl",
      description: "Healthy bowl with grains, vegetables, and proteins.",
      price: 9.99,
      special: false,
    },
  ],
  vegan: [
    {
      name: "Chickpea Salad",
      description: "Fresh salad with chickpeas, tomatoes, and cucumber.",
      price: 8.99,
      special: false,
    },
    {
      name: "Vegan Tacos",
      description: "Tacos filled with seasoned lentils and avocado.",
      price: 9.99,
      special: true,
    },
    {
      name: "Quinoa Bowl",
      description: "Healthy bowl with quinoa, veggies, and tahini dressing.",
      price: 10.99,
      special: false,
    },
    {
      name: "Cauliflower Wings",
      description: "Spicy baked cauliflower florets served with dipping sauce.",
      price: 7.99,
      special: false,
    },
    {
      name: "Vegan Burger",
      description: "Plant-based burger served with lettuce and tomato.",
      price: 11.99,
      special: true,
    },
    {
      name: "Lentil Soup",
      description: "Hearty soup made with lentils, vegetables, and spices.",
      price: 6.99,
      special: false,
    },
    {
      name: "Stuffed Bell Peppers",
      description: "Bell peppers filled with quinoa, beans, and vegetables.",
      price: 8.99,
      special: false,
    },
    {
      name: "Zucchini Noodles",
      description: "Spiralized zucchini tossed with marinara sauce.",
      price: 7.99,
      special: false,
    },
    {
      name: "Falafel Wrap",
      description:
        "Falafel balls wrapped in pita with lettuce and tahini sauce.",
      price: 9.99,
      special: true,
    },
    {
      name: "Vegan Pad Thai",
      description: "Stir-fried rice noodles with vegetables and peanuts.",
      price: 10.99,
      special: false,
    },
    {
      name: "Avocado Toast",
      description: "Toasted bread topped with smashed avocado and seasonings.",
      price: 6.99,
      special: false,
    },
    {
      name: "Coconut Curry",
      description: "Creamy curry made with coconut milk and vegetables.",
      price: 8.99,
      special: false,
    },
    {
      name: "Vegan Mac and Cheese",
      description: "Creamy pasta dish made with cashew cheese.",
      price: 9.99,
      special: true,
    },
    {
      name: "Chia Seed Pudding",
      description: "Pudding made with chia seeds and almond milk.",
      price: 7.99,
      special: false,
    },
    {
      name: "Roasted Veggie Bowl",
      description: "Bowl with roasted seasonal vegetables and grains.",
      price: 9.99,
      special: false,
    },
    {
      name: "Banana Pancakes",
      description: "Fluffy pancakes made with ripe bananas and oats.",
      price: 7.99,
      special: false,
    },
    {
      name: "Peanut Butter Banana Smoothie",
      description: "Smoothie made with banana and peanut butter.",
      price: 6.99,
      special: false,
    },
    {
      name: "Tofu Stir-fry",
      description: "Stir-fried tofu with vegetables and soy sauce.",
      price: 8.99,
      special: false,
    },
    {
      name: "Ratatouille",
      description: "Stewed vegetable dish with zucchini, eggplant, and tomato.",
      price: 9.99,
      special: false,
    },
  ],
  mexican: [
    {
      name: "Tacos al Pastor",
      description: "Tacos filled with marinated pork and pineapple.",
      price: 9.99,
      special: true,
    },
    {
      name: "Guacamole",
      description: "Creamy avocado dip served with tortilla chips.",
      price: 5.99,
      special: false,
    },
    {
      name: "Chiles en Nogada",
      description: "Stuffed peppers topped with walnut sauce.",
      price: 12.99,
      special: true,
    },
    {
      name: "Tamales",
      description: "Corn dough filled with meat and wrapped in corn husks.",
      price: 8.99,
      special: false,
    },
    {
      name: "Mole Poblano",
      description:
        "Rich sauce made with chocolate and spices, served over chicken.",
      price: 14.99,
      special: true,
    },
    {
      name: "Quesadilla",
      description:
        "Flour tortilla filled with cheese and grilled until melted.",
      price: 7.99,
      special: false,
    },
    {
      name: "Sopes",
      description: "Thick corn tortillas topped with beans, meat, and salsa.",
      price: 8.99,
      special: false,
    },
    {
      name: "Fajitas",
      description: "Grilled meat served with sautéed peppers and onions.",
      price: 13.99,
      special: true,
    },
    {
      name: "Chimichangas",
      description: "Deep-fried burritos filled with meat and cheese.",
      price: 10.99,
      special: true,
    },
    {
      name: "Enchiladas",
      description:
        "Tortillas filled with meat or cheese, rolled and topped with sauce.",
      price: 9.99,
      special: false,
    },
    {
      name: "Ceviche",
      description:
        "Seafood marinated in lime juice and mixed with onions and cilantro.",
      price: 12.99,
      special: true,
    },
    {
      name: "Elote",
      description:
        "Grilled corn on the cob topped with mayonnaise, cheese, and chili powder.",
      price: 11.99,
      special: false,
    },
    {
      name: "Pozole",
      description:
        "Hearty soup made with hominy and meat, garnished with cabbage.",
      price: 10.99,
      special: false,
    },
    {
      name: "Tortilla Soup",
      description: "Tomato-based soup with tortillas, avocado, and cheese.",
      price: 9.99,
      special: false,
    },
    {
      name: "Burrito",
      description:
        "Flour tortilla filled with rice, beans, and choice of meat.",
      price: 8.99,
      special: false,
    },
    {
      name: "Churros",
      description: "Fried dough pastry rolled in sugar and cinnamon.",
      price: 6.99,
      special: false,
    },
    {
      name: "Flan",
      description: "Creamy caramel custard dessert.",
      price: 5.99,
      special: false,
    },
    {
      name: "Agua Fresca",
      description: "Refreshing fruit drink made with water and sugar.",
      price: 4.99,
      special: false,
    },
  ],
  indian: [
    {
      name: "Pani Puri",
      description:
        "Crispy puris filled with spiced water, tamarind chutney, and potatoes.",
      price: 5.99,
      special: true,
    },
    {
      name: "Masala Dosa",
      description:
        "Thin rice crepe filled with spiced potato filling, served with chutney and sambar.",
      price: 8.99,
      special: false,
    },
    {
      name: "Idli",
      description:
        "Steamed rice cakes often served with sambar and coconut chutney.",
      price: 4.99,
      special: false,
    },
    {
      name: "Vada",
      description:
        "Savory doughnuts made from fermented lentils, often served with sambar.",
      price: 6.99,
      special: false,
    },
    {
      name: "Bhindi Masala",
      description: "Stir-fried okra cooked with onions, tomatoes, and spices.",
      price: 7.99,
      special: false,
    },
    {
      name: "Rajma",
      description: "Red kidney beans cooked in a spiced tomato gravy.",
      price: 8.99,
      special: true,
    },
    {
      name: "Kofta Curry",
      description: "Spiced meat or vegetable balls served in a rich curry.",
      price: 12.99,
      special: true,
    },
    {
      name: "Fish Curry",
      description:
        "Tangy and spicy curry made with fresh fish and coconut milk.",
      price: 14.99,
      special: true,
    },
    {
      name: "Aloo Paratha",
      description:
        "Stuffed flatbread filled with spiced mashed potatoes, served with yogurt or pickle.",
      price: 5.99,
      special: false,
    },
    {
      name: "Baingan Bharta",
      description:
        "Roasted eggplant mashed and cooked with onions, tomatoes, and spices.",
      price: 7.99,
      special: false,
    },
    {
      name: "Paneer Butter Masala",
      description: "Paneer cubes cooked in a creamy tomato sauce.",
      price: 9.99,
      special: false,
    },
    {
      name: "Pesarattu",
      description: "Green gram (moong dal) crepes served with ginger chutney.",
      price: 6.99,
      special: false,
    },
    {
      name: "Chicken Chettinad",
      description:
        "Fiery chicken curry made with a variety of spices from the Chettinad region.",
      price: 12.99,
      special: true,
    },
    {
      name: "Gajar Ka Halwa",
      description: "Sweet carrot pudding cooked with milk, ghee, and sugar.",
      price: 8.99,
      special: false,
    },
    {
      name: "Pappadum",
      description:
        "Thin, crispy wafers made from lentil flour, often served as an accompaniment to meals.",
      price: 4.99,
      special: false,
    },
    {
      name: "Keema",
      description:
        "Minced meat curry, often made with lamb or goat, cooked with peas and spices.",
      price: 14.99,
      special: true,
    },
    {
      name: "Pulao",
      description:
        "Fragrant rice dish cooked with vegetables, meat, and spices.",
      price: 11.99,
      special: false,
    },
    {
      name: "Methi Thepla",
      description:
        "Flatbread made with fenugreek leaves and spices, popular in Gujarat.",
      price: 6.99,
      special: false,
    },
    {
      name: "Sev Puri",
      description:
        "Crispy puris topped with diced potatoes, onions, chutneys, and sev (crunchy noodles).",
      price: 9.99,
      special: true,
    },
    {
      name: "Rasgulla",
      description:
        "Soft, spongy cheese balls soaked in sugar syrup, a popular Bengali dessert.",
      price: 5.99,
      special: false,
    },
  ],
};

module.exports = {
  Cuisines,
  Dishes,
  Restaurants,
};

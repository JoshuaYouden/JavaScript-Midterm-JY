const { Restaurants, Cuisines } = require("./utils/data");
const express = require("express");
const path = require("path");
const {
  generateRandomMenuItem,
  generateMenu,
  selectRandomCuisine,
} = require("./utils/restaurantUtils");

const app = express();
let restaurantData = {}; //This should be populated soon

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */
app.get("/", (request, response) => {
  const randomCuisine = selectRandomCuisine();
  const randomMenuItem = generateRandomMenuItem(randomCuisine);
  const randomRestaurant =
    Restaurants[Math.floor(Math.random() * Restaurants.length)];
  response.render("index", {
    restaurants: Restaurants,
    randomMenuItem: randomMenuItem.name + " - " + randomMenuItem.description,
    randomMenuItemPrice: "$" + randomMenuItem.price,
    randomMenuItemSpecial: randomMenuItem.special,
    randomCuisine: randomCuisine,
    restaurantName: randomRestaurant.name,
  });
});

/**
 * GET /restaurant/:name
 * Displays a specific restaurant's random menu.
 * The cuisine is randomly selected and a menu is generated based on it.
 */
app.get("/restaurant", (request, response) => {
  const restaurantId = request.query.restaurantId;
  console.log(`restaurantId: ${restaurantId}`);
  const restaurant = Restaurants.find((r) => r.id === restaurantId);
  const menu = generateMenu(restaurant.cuisine, 5, 10);
  response.render("restaurant", {
    restaurant: restaurantData[restaurantId],
    restaurantName: restaurant,
    menu: menu,
  });
});

//Add any other required routes here
app.get("/alerts", (request, response) => {
  console.log("Alerts Page Opened!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const cuisine = Cuisines[Math.floor(Math.random() * Cuisines.length)];

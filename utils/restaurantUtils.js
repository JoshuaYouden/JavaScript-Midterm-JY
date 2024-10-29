const { Dishes, Cuisines, Restaurants } = require("./data");

/**
 * Generates a random menu item based on a given cuisine.
 * @param {string} cuisine - The desired cuisine for the menu item.
 * @returns {*} A random menu item with a name, description, price, and special status.
 */
function generateRandomMenuItem(cuisine) {
  const menuItems = Dishes[cuisine];
  const randomMenuItem =
    menuItems[Math.floor(Math.random() * menuItems.length)];
  return randomMenuItem;
}

/**
 * Selects a random cuisine type for a restaurant.
 * @returns {*} A random cuisine type.
 */
function selectRandomCuisine() {
  const cuisines = Cuisines;
  const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  return randomCuisine;
}

/**
 * Generates a menu for a restaurant, including a random cuisine type and a list of menu items.
 * @returns {*} An object representing the restaurant's menu, including the cuisine type and items.
 */
function generateMenu() {
  const cuisineType = Object.values(Cuisines);
  const randomCuisine =
    cuisineType[Math.floor(Math.random() * cuisineType.length)];
  const menuItems = [];

  for (let i = 0; i < 5; i++) {
    menuItems.push(generateRandomMenuItem(randomCuisine));
  }

  return {
    cuisine: randomCuisine,
    items: menuItems,
  };
}

/**
 * Additional utility functions can be defined here if needed.
 */

module.exports = { generateRandomMenuItem, selectRandomCuisine, generateMenu };

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
  return {
    name: randomMenuItem.name,
    description: randomMenuItem.description,
    price: randomMenuItem.price || (Math.random() * 20 + 5).toFixed(2),
    special:
      typeof randomMenuItem.special === "boolean"
        ? randomMenuItem.special
        : Math.random() < 0.5,
  };
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
function generateMenu(cuisine, minItems = 5, maxItems = 10) {
  const dishes = Dishes[cuisine] || [];
  const randomCuisine = Math.min(
    dishes.length,
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems
  );
  const menuItems = [];

  for (let i = 0; i < randomCuisine; i++) {
    menuItems.push(dishes[Math.floor(Math.random() * dishes.length)]);
  }

  return {
    cuisine: cuisine,
    items: menuItems,
  };
}

/**
 * Additional utility functions can be defined here if needed.
 */

module.exports = { generateRandomMenuItem, selectRandomCuisine, generateMenu };

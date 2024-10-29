const { Cuisines, Dishes } = require("../../utils/data");
const {
  generateRandomMenuItem,
  generateMenu,
  selectRandomCuisine,
} = require("../../utils/restaurantUtils");

describe("Restaurant Functions", () => {
  describe("generateRandomMenuItem", () => {
    test("Test should return a random menu item from a given cuisine", () => {
      const cuisine = Object.keys(Dishes)[0];
      const menuItem = generateRandomMenuItem(cuisine);
      expect(menuItem).toHaveProperty("name");
      expect(menuItem).toHaveProperty("description");
    });
  });

  describe("generateMenu", () => {
    test("Test should return between 5 and 10 menu items", () => {
      const menu = generateMenu();
      expect(menu.items.length).toBeGreaterThanOrEqual(5);
      expect(menu.items.length).toBeLessThanOrEqual(10);
    });
  });

  describe("selectRandomCuisine", () => {
    test("Test should return a random cuisine from the Cuisines array", () => {
      const cuisine = selectRandomCuisine();
      expect(Cuisines).toContain(cuisine);
    });
  });
});

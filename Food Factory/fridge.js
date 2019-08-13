const Ingredient = require("./ingredient")

class Fridge {
    constructor (ingredients) {
        this.items = ingredients;
    }
    getIngredientType (type) {
        return this.items.filter (i => i.type == type, 0);
    }
};

const ingredients = ["water", "olive_oil", "broth", "red_wine", "bay_leaf", "peppercorn", "beef", "chicken", "bacon", "pineapple", "apple", "blueberry", "mushroom", "carrot", "potato", "egg", "cheese", "sauce", "oatmeal", "rice", "brown_rice"];

let Frigidaire = new Fridge (ingredients);

let vegetables = Frigidaire.getIngredientType (Ingredient.vegetable);

console.log(vegetables);

module.exports = Fridge
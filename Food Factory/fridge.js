import Ingredient from "./ingredient.js";

export default class Fridge {
    constructor (ingredients) {
        this.items = ingredients;
    }
    get (type) {
        return this.items.filter (i => i.type == type, 0);
    }
};

const ingredients = ["water", "olive_oil", "broth", "red_wine", "bay_leaf", "peppercorn", "beef", "chicken", "bacon", "pineapple", "apple", "blueberry", "mushroom", "carrot", "potato", "egg", "cheese", "sauce", "oatmeal", "rice", "brown_rice"];

let Frigidaire = new Fridge (ingredients);

let vegetables = Frigidaire.get (Ingredient.vegetable);

console.log(vegetables);
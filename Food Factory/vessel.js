export default class Vessel {
    constructor (material, type) {
        this.material = material;
        this.type = type;
        this.ingredients = [];
        print (`Created ${this.material} ${this.type}`);
    }
    calories () {
        const reducer = (acc, ing) => (acc + ing.calories);
        let sum = this.ingredients.reduce (reducer, 0);
        print (`There are ${sum} calories in ${this.material} ${this.type}.`);
    }
    add (ingredient) {
        this.ingredients.push (ingredient);
        print (`Added ${ingredient.name} to ${this.material} ${this.type}.`);
    }
    cook () {
        console.log (`Cooking in ${this.material} ${this.type}`);
    }
};
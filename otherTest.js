//Constructor Function

/*function GameDetail (name, developer, year) {
    this.gameName = name;
    this.developerName = developer;
    this.launchYear = year;
}

let game1 = new GameDetail ("TLOZ", "Nintendo", 2017);
let game2 = new GameDetail ("Mario 64", "Nintendo", 1996);
console.log(game1);
console.log(game2);




function dog (breed, name, year, vaccinated) {
    this.dogBreed = breed;
    this.dogName = name;
    this.dogYear = year;
    this.dogVaccine = vaccinated;
}

let dog1 = new dog ("Chow-Chow", "Shaman", 12, true);
let dog2 = new dog ("Labrador", "Max", 12, false);
console.log(dog1);
console.log(dog2);

//typeof
console.log(typeof dog1);

let arr = [1, 2, 3];
console.log(typeof arr);

*/

//Passing Values By Reference
let x = 1;
let y = x;
console.log(x, y+1);
//Passing Values By Reference: Index
x = { p: 4 };
y = x;
console.log(x.p, y.p);
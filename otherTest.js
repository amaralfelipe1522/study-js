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

/*
//Passing Values By Reference
let x = 1;
let y = x;
console.log(x, y+1);
//Passing Values By Reference: Index
x = { p: 4 };
y = x;
console.log(x.p, y.p);
*/

/*
//Scope Quirks
//Primitive Types
//Template Strings
//let n = 0;
//console.log(`O loop passou por ${n} vezes`);
//Example with Ternary Operator:
for (let manchete = 0; manchete < 4; manchete++) {
    //let first = (manchete == 1);
    let is = manchete == 1 ? "É" : "São";
    let person = manchete == 1 ? "" : "s";
    console.log(`${is} ${manchete} pessoa${person} enganada${person}`);
}

var num = 3;
let result = num = 1 ? "Não é UM" : "É UM"
console.log (result);
*/

/*
// Constructors And Instances
let FrangoFrito = function(){
    this.qtdFrangoFrito = 0;
    this.fritar = function(){
        console.log("Fritando o frango...");
        this.qtdFrangoFrito++;
    } 
}

let frangoFrito = new FrangoFrito();

frangoFrito.fritar();
console.log(frangoFrito.qtdFrangoFrito);

*/

/*
<<<<<<< HEAD
let hamburguer = {
    carne: "bovina",
    salada: true,
    bacon: true,
    molho: "cheddar"
};
delete hamburguer.salada;

console.log (hamburguer);

console.log("salada" in hamburguer);
*/

/*
//spread
let arr1 = [1,2,3,4];
let arr2 = [4,5,6,7];
console.log(arr1);

arr1.push(...arr2);
console.log(arr1);
*/


/*
//Rest Example
function fDecente(...arrayDeItens){
	console.log(arrayDeItens.length)
	arrayDeItens.map(function(ItemDoArray){
		console.log(ItemDoArray);
	})
}
*/

/*
nota1 = {
    preço: 200,
    nome: "hamburguer"
}

nota2 = {
    preço: 300,
    nome: "hamburguerxx"
}

function somarComanda (...comandas){
    //console.log(comandas[0])
    comandas.map (function(comanda){
        console.log(comanda);
        console.log(Math.max(comanda.preço))
    });
}

somarComanda(nota1,nota2);

//[1,2,3,4,5].reduce((accumulator,currentVal)=>accumulator+currentVal)
=======
//Return Annonymous Function 
var plus = (function (){
    var counter = 0;
	return function (){
        counter++;
        return counter;
    }
})();

plus();
*/

/*
//Class
class dog {
    constructor (nameDog, ageDog) {
        this.nameDog = nameDog;
        this.ageDog = ageDog;
    }
    //method () {
    //    console.log(this.nameDog);
    //    console.log(this.ageDog);
    //}
}

dog1 = new dog("Shaman",12)
console.log(dog1);

>>>>>>> 0bb49ede7b6fe7cdc2d895dc73a23bf0a3ff2811
*/

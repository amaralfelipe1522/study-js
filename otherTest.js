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
*/

/*
//V1 - PUSH, MAP and Object
let myCart = [];

function addMyCart (item) {
    myCart.push(item);
    let myCartResult = myCart.map((item,index) => {
        console.log(`O ${item} foi adicionado na posição ${index+1}`);
        return `${index+1}:${item}`;
    });
    console.log(myCartResult);
}


addMyCart("Book 2");
addMyCart("Book 1");
addMyCart("Book 3");
*/

/*
//V2 - PUSH, MAP and Object
let myCart = [];
let myCartResult;

function addMyCart (...item) {
    myCart.push(...item);
    myCartResult = myCart.map((item,index) => {
        console.log(`O ${item} foi adicionado na posição ${index+1}`);
        return {index : index+1, item : item};
    });
}

addMyCart("Book 1","Book 2","Book 3");
console.log(myCartResult);


//let functionRest = (...items) => items.map(item => console.log(items));
//functionRest("A","B")

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arrAll.push = (arr1,arr2);
console.log(arrAll);

*/

// //Function SUM com REST
// function somar (...valores) {
//     let valorSomado = 0;
//     for (let valor of valores)
//         valorSomado += valor;
//         return valorSomado;
// }
// somar(2,2);

// //Other example
// let arr = [1,2,3,4,5,6];
// let somaArr = 0;
// for (let unit of arr){
//     somaArr += unit;
// }
// console.log(somaArr);

// //Calculator with ARRAY.REDUCE:
// //let somar1 = (...valores) => valores.reduce((valorA, valorB) => valorA + valorB, 0);
// //console.log(somar1(1,2,3,4));

// let arr = [1,2,3,4];
// let somaArr = arr.reduce((x,y) => x+y,3);
// console.log(somaArr);

// //Example of ARRAY.FILTER - Retira os valores repetidos
// let arrAll = [1,2,2,3,4,5,5];
// // let arrDistinct = arrAll.filter (
// //     function (valor, i, arrAll) {
// //         return arrAll.indexOf(valor)===i
// //     }
// // );
// //With arrow function
// let arrDistinct = arrAll.filter ((valor, i, arrAll) => arrAll.indexOf(valor)===i);
// console.log(arrDistinct);

let cuzoesDoUltra = {
    Oxiteno:{
        1:"João",
        2:"Giba"
    },
    Corp:{
        1:"Marilia",
        2:"Evandro"
    }
    };

let  {Oxiteno} = cuzoesDoUltra;
console.log(cuzoesDoUltra);
console.log(Oxiteno);
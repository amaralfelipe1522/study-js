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

// //Destructuring Assignment 
// let cuzoesDoUltra = {
//     Oxiteno:{
//         1:"João",
//         2:"Giba"
//     },
//     Corp:{
//         1:"Marilia",
//         2:"Evandro"
//     }
//     };

// let  {Oxiteno} = cuzoesDoUltra;
// console.log(cuzoesDoUltra);
// console.log(Oxiteno);

// Example of closure
// let sexta, sabado, domingo, segunda;

// function calcularFelicidade (){
//     // Morto por dentro tipo o Marcelo: 0
//     // Feliz com força e com talento: 10
//     console.log ("Iniciando a função calcularFelicidade()");
//     let vontadeDeViver = 9;
//     sexta = () => { console.log (`Nível na sexta: ${vontadeDeViver}`) }
//     sabado = () => { console.log (`Nível no sabado: ${vontadeDeViver = vontadeDeViver + 1}`) }
//     domingo = () => { console.log (`Nível no domingo: ${vontadeDeViver = vontadeDeViver - 8}`)}
//     segunda = () => { console.log (`Nível na segunda: ${vontadeDeViver = vontadeDeViver = null}`)}
// }

// calcularFelicidade();
// sexta();
// sabado();
// domingo();
// segunda();

// //Other example of Closure
// let get = null;

// function ClosureDoCapeta (){
//     this.valor = 0;
//     get = () => {console.log(this.valor);}

//     function aumentar (){
//         this.valor++;
//         console.log(`Aumentando: ${this.valor}`);
//     }
//     function diminuir (){
//         this.valor--;
//         console.log(`Diminuindo: ${this.valor}`);
//     }
//     function deletar (){
//         delete this.valor;
//         console.log(`Valor deletado: ${this.valor=null}`);
//     }

//     return [aumentar,diminuir,deletar];
// }

// let f = ClosureDoCapeta();

// let aument = f[0];
// let dimin = f[1];
// let del = f[2];

// aument();
// aument();
// aument();
// dimin();
// dimin();
// del();
// get();

// //Example of Arity
// function aridade (...args) {
//     console.log(args);
// }
// aridade(1,2,3);

// let sizeArity = aridade.length;
// console.log(sizeArity);

//Example of Curried Function
// let jogos1 = function (nome1){
//     console.log (`Meu jogo favorito é ${nome1}.`)
//     return function (nome2){
//         console.log(`Meus jogos favoritos são ${nome1} e ${nome2}.`);
//         return function (nome3){
//             console.log(`Meus jogos favoritos são ${nome1}, ${nome2} e ${nome3}.`);
//         }
//     }
// }

// let jogos2 = jogos1("Mario");
// let jogos3 = jogos2("Zelda");
// jogos3("Metroid");

// //Examples of FOR LOOP
// let gamesToBeat = 0;
// function jogar (...games){
//     for (i = 1; i <= games.length; i++){
//         gamesToBeat += 1;
//     }
//     console.log(`Qtd de jogos para finalizar: ${gamesToBeat}`);
// }
// jogar ("Mario","Zelda","Metroid");


// function jogar (...games){
//     let gamesToBeat = games.reduce((valor1, valor2) => valor1 + ", " + valor2);
//     console.log(`Jogos para finalizar: ${gamesToBeat}`);
//     console.log(`Qtd de jogos para finalizar: ${games.length}`);
// }
// jogar ("Mario","Zelda","Metroid");

// //Call a function
// let contador = 0;
// function Contar() {
//     contador++;
// }
// for (i = 0; i < 10; i++, Contar()) {
//     //console.log(i);
// }
// console.log(contador);

// //For Loop example with Ternary
// for (i = 0; i < 3; i++){
//     let cont = i == 1 ? "" : console.log (i);
// }

// //For Loop with break
// for (i = 0; i < 5; i++){
//     if (i > 3){
//         break;
//     } console.log(i);
// }

// //For Loop with label and break
// forX: for (x = 0; x < 2; x++){
//     forY: for (y = x; y < 2; y++){
//         console.log (x, y);
//         break forY;
//     }
// }

// //Examples of Shallow and Deep Copy in objects (SPREAD and JSONParse)

// arrNumber = [0,1,2];

// for (x = 0; x < arrNumber.length; x++){
//     for (y = 0; y < arrNumber.length; y++){
//         for (z = 0; z < arrNumber.length; z++){
//             console.log(arrNumber[x], arrNumber[y], arrNumber[z]);
//         }
//         //console.log(arrNumber[x], arrNumber[y]);
//     }
// }

arrNumber = [0,1,2,3,4,5,6,7,8,9];

for (x = 0; x < arrNumber.length; x++){
    for (y = 0; y < arrNumber.length; y++){
        for (z = 0; z < arrNumber.length; z++){
            console.log(arrNumber[x], arrNumber[y], arrNumber[z]);
        }
    }
}
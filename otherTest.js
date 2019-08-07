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

// arrNumber = [0,1,2];

// for (x = 0; x < arrNumber.length; x++){
//     for (y = 0; y < arrNumber.length; y++){
//         for (z = 0; z < arrNumber.length; z++){
//             console.log(arrNumber[x], arrNumber[y], arrNumber[z]);
//         }
//         //console.log(arrNumber[x], arrNumber[y]);
//     }
// }

// arrNumber = [0,1,2,3,4,5,6,7,8,9];

// //Export flie.txt
// function createFile (){
//     var fs = require('fs');
//     var stream = fs.createWriteStream("my_file.txt");
//         stream.once('open', function(fd) {
//         //stream.write(arrNumber[x], arrNumber[y], arrNumber[z], arrNumber[a], arrNumber[b], arrNumber[c], arrNumber[d], arrNumber[e], arrNumber[f], arrNumber[g]+" \n");
//         stream.write("My first row"+count+" \n");
//         stream.end();
//     });
// }

// let count = 0;

// for (x = 0; x < arrNumber.length; x++){
//     for (y = 0; y < arrNumber.length; y++){
//         for (z = 0; z < arrNumber.length; z++){
//             for (a = 0; a < arrNumber.length; a++){
//                 for (b = 0; b < arrNumber.length; b++){
//                     for (c = 0; c < arrNumber.length; c++){
//                         for (d = 0; d < arrNumber.length; d++){
//                             for (e = 0; e < arrNumber.length; e++){
//                                 for (f = 0; f < arrNumber.length; f++){
//                                     forCuzao: for (g = 0; g < arrNumber.length; g++){
//                                         count++;
//                                         if (count == 2){
//                                             break forCuzao;
//                                         }
//                                         createFile();
//                                         //console.log(arrNumber[x], arrNumber[y], arrNumber[z], arrNumber[a], arrNumber[b], arrNumber[c], arrNumber[d], arrNumber[e], arrNumber[f], arrNumber[g]);
//                                     }
//                                 }
//                             } 
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// //Example of Yield Function with FOR OF loop
// //Função de exemplo para chamar na Yield Function
// let incValue = 0;
// function inc () {
//     console.log (incValue+=1);
// }

// function* geradorYield () {
//     yield inc();
//     yield inc();
//     yield inc();
// }

// for (let valores of geradorYield()) {
//     console.log(valores);
// }

// let triggerYield = geradorYield();
// console.log (triggerYield.next().valores);


//Example FOR OF and STRING
// let stringExample = "Itaquaquecetuba";
// for (let caractere of stringExample) {
//     console.log (caractere);
// }


// //Example FOR OF in Objects
// let estojo = {
//     1 : "Lápis",
//     2 : "Caneta",
//     3 : "Borracha"
// };

// // for (usingKeys of Object.keys (estojo)){
// //     console.log (usingKeys);
// // }

// // for (usingValues of Object.values (estojo)){
// //     console.log (usingValues);
// // }

// // for (usingEntries of Object.entries (estojo)){
// //     console.log (usingEntries);
// // }


// //Example FOR IN in Objects
// let estojo = {
//     1 : "Lápis",
//     2 : "Caneta",
//     3 : "Borracha"
// };

// for (let values in estojo) {
//     console.log (values, estojo[values]);
// }


// // Example of While Loop
// let count = 0;
// while (count++ < 10){
//     console.log ("... "+count);
// } console.log ("Fim: "+count);


// //Example of Array.sort
// let estojo = [
//     { material : "Lápis", count: 14 },
//     { material : "Caneta", count: 17 },
//     { material : "Borracha", count: 9}
// ];

// //console.log(estojo);

// let  my_sort = (a,b) => {
//     console.log(a,b);
//     //retorna um boolean par a operação abaixo:
//     console.log (a.material > b.material);
//     return a.material > b.material;
// }
// //Organiza os materiais em ordem alfabética
// console.log (estojo.sort(my_sort));
// console.log(estojo);


// //Examples of Shallow and Deep Copy in objects (SPREAD and JSONParse) (Object Assignment vs. Primitive Assignment)
// let a = {
//     name : {
//         firstName : "Felipe",
//         surName : "Amaral"
//     },
//     age : 27
// };
// //with SPREAD = Shallow Copy
// let b = {...a};
// b.age=28;

// //With Json = Deep Copy (Serialize and De-serialize)
// let c = JSON.parse(JSON.stringify(a));
// c.name.firstName = "Danilo";
// c.name.surName = "Reis";
// c.age = 28;

// console.log ("Original object:");
// console.log (a);
// console.log ("With shallow copy:");
// console.log (b);
// console.log ("With deep copy:");
// console.log (c);

//Example of Array.forEach
// let arr = ["ABC", "DEF", "GHI"];
// let newArr = [];

// let addNumbers = function (element, index, object) {
//     newArr.push(element);
//     console.log (newArr);
// }
// arr.forEach(addNumbers);

// console.log(arr);
// console.log(newArr);

//or

// let arr = ["ABC", "DEF", "GHI"];
// let newArr = [];

// arr.forEach ((element, index, object) => {newArr.push(element); console.log (newArr);});

// console.log(arr);
// console.log(newArr);

// //Examples of Array.Every and Array.Some

// let arrNumber = [1,2,3,40,5,6];

// function maiorQue10 (valor) {
//     console.log(valor)
//     return valor > 10;
// }

// console.log(arrNumber.some(maiorQue10)); //vai repetir até retornar true
// console.log(arrNumber.every(maiorQue10)); //vai repetir até retornar false

// //Example with array.filter
// let arrNumber = [2,3,4,5,6,7,8];
// function maiorQue (number) {
//     return number > 5;
// }
// console.log(arrNumber.filter(maiorQue));
//or
// let arrNumber = [2,3,4,5,6,7,8];
// let condition = (value => value > 5);
// console.log(arrNumber.filter(condition));

// //Example of Array.map and push
// let arrNumber = [2,3,4,5,6,7,8];
// let condition = (value => value + " map.");
// let newArr = arrNumber.map(condition);
// console.log(newArr);
// let newArr2 =[];
// newArr2.push(arrNumber,newArr);
// console.log(newArr2);

//or

// let arrNumber = [2,3,4,5,6,7,8];
// let arrResult = arrNumber.map (value => value = value + 10);
// console.log (arrResult);

//A PORRA DA EXPLICAÇÃO DO THIS
// CPonto
// {
// 	int x;
// 	int y;
// }

// CQuadrado
// {
// 	CPonto p1
// 	CPonto p2		
// 	CPonto p3
// 	CPonto p4
// }

// CDesenhoGeometrico
// {
// 	CQuadrado quadrado;
// }

// void IniciaQuadrado()
// {
// 	p1.x =0
// 	p1.y =0

// 	CGeometrico geometrico;

// 	geometrico.quadrado = this;	
// }

// //Example of Array.flat()
// let arrMulti = [1,2,3,4,[5,6,7,8,[9,10,11,12]]];
// let arrSingle = arrMulti.flat().flat();
// console.log(arrSingle);

// //Example of Array.flatMap()
// let array = [1,2,3,4,5];
// console.log(array.map(x => [x, x * 2]));
// console.log(array.flatMap(x => [x, x * 2]));

//Matching Multiple Items
// //String.match()
// let string = "Paralelepipedo";
// let stringResult = string.match(/lep/);
// console.log (stringResult);
// stringResult = string.match(/le/g);
// console.log (stringResult);

// //With regex.exec
// const string = "azul*ceu preto*pe amarelo*urina";
// const regex = /(?<cor>.*?)\*(?<coisa>[a-z0-9]+)/g;
// while (stringRegex = regex.exec(string)) {
//     let color = stringRegex[1]; //[0]
//     let index = stringRegex.index;
//     let coiso = stringRegex[2];
//     let input = stringRegex.input;
//     console.log (`A cor é ${color}, no indice ${index}, o coiso é ${coiso} e o input é: ${input}.`);
//     console.log (stringRegex.groups.cor);
//     console.log (stringRegex.groups.coisa);
// }

//With string.matchAll()

// string = "Paralelepipedo";
// walkString = string.matchAll(/[p]/g);
// for (let match of walkString) {
//     console.log (match);
// }

// let string = "Paralelepipedo";
// let regex = RegExp('le*','g');
// let walkString = string.matchAll(regex);
// for (let match of walkString) {
//     console.log (match);
// }

// //To validate ARRAY type (typeof)
// let arr1 = [1,2];
// let arr2 = [1,2];
// let arr3 = [1,3];
// function isArray (value) {
//     return typeof value.reduce == "function" &&
//     typeof value.filter == "function" &&
//     typeof value.map == "function" &&
//     typeof value.length == "number";
// }
// function areArrays (a, b) {
//     if ((isArray(a) !== isArray(b))){
//         return false;
//     }
//     if (a.length !== b.length){
//         return false;
//     }
//     for (let i = 0; i < a.length; i++){
//         if (a[i] !== b[i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(areArrays(arr1,arr2));

//Anonymous Function
// let time = 6000
// setTimeout (function(){
//     console.log (`Print in ${time/1000} second`);
// },time);

//in Chrome:
// document.addEventListener("click", function(){
//     console.log("Something was clicked.")
// });

// //Safeguarding Function Parameters
// let funcMsg = function (){console.log("fudeu!");}
// function Fparameters (text,number,array,object,func) {
//     console.log(text);
//     console.log(number);
//     console.log(array);
//     console.log(object);
//     if (typeof func == "function"){
//         func();
//     }else console.log ("Is not a Function");
// }
// Fparameters("Texto", 123,[],{},funcMsg);

// //More examples of THIS
// //1º
// let player = {
//     name : "Felipe",
//     sayName () {
//         console.log (this.name);
//     }
// };
// player.sayName();

//2º With BIND
// let hero = {name : "Red"};
// let rival = {name : "Green"};
// let sayName = function (){
//     console.log(this.name);
// }
// let sayHeroName = sayName.bind(hero);
// let sayRivalName = sayName.bind(rival);
// sayHeroName();
// sayRivalName();

//3º With CALL and APPLY
// let player = {
//     name : "Goku",
//     hp : 100,
//     mp : 50,
//     printStatus () {
//         console.log(`O player ${this.name} tem ${this.hp} de HP e ${this.mp} de MP.`);
//     }
// };
// const levelUP = function (hp,mp) {
//     this.hp += hp;
//     this.mp += mp;
//     console.log ("LEVEL UP!!!");
//     this.printStatus();
// }
// player.printStatus();
// levelUP.call(player,5,2);
// levelUP.apply(player,[5,2]);

// //Example of Prototype
// //All functions in a single location of the memory
// const allFunctions = {
//     sleep() {
//         this.status = "sleeping";
//         console.log (`${this.name} is ${this.status}.`);
//         this.hunger += 1;
//         this.energy += 1;
//         console.log(this.hunger,this.energy);
//     },
//     wakeUp() {
//         this.status = "idle";
//         console.log (`${this.name} woke up.`);
//     },
//     eat(amount) {
//         this.status = "eating";
//         console.log (`${this.name} is ${this.status}: Qtd: ${amount}`);
//         if (this.hunger -= amount <= 0){
//             this.energy += 1;
//         }this.wakeUp();
//         console.log(this.hunger, this.energy);
//     },
//     wander() {
//         this.status = "wandering";
//         console.log (`${this.name} is ${this.status}`);
//         if (--this.energy < 1)
//             this.sleep(5);
//         console.log(this.energy);
//     }
// }

// function createCat (name, status,hunger,energy){
//     let cat = {};

//     cat.name = name;
//     cat.status = status;
//     cat.hunger = hunger;
//     cat.energy = energy;
    
//     cat.sleep = allFunctions.sleep;
//     cat.wakeUp = allFunctions.wakeUp;
//     cat.eat = allFunctions.eat;
//     cat.wander = allFunctions.wander;

//     return cat;
// }

// let cat1 = createCat("Felix", "idle", 0, 1);
// console.log(cat1.sleep());
// console.log(cat1.eat(5));
// let cat2 = createCat("Tom", "dead", 4, 3);
// console.log(cat2.wakeUp());


let num:Number= 9;
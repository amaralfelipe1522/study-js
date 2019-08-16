// const axios = require("axios");
// // const url = "https://pokeapi.co/api/v2/pokemon/";
// const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000"
// axios.get(url)
// .then(data => console.log(data.data))
// .catch(err => console.log(err));

// https://httpstat.us/200
// https://httpstat.us/404
// https://httpstat.us/302
// https://httpstat.us/500
// https://httpstat.us/201
// https://httpstat.us/400
// https://httpstat.us/401
const axios = require("axios");
let pokemon = {};

let getPokemonById = async (url)=>{
    return new Promise((resolve,reject)=>{
        axios.get(url)
        .then(async (data) => {
            var number = await data.data.id;
            var namee = await data.data.name;
            let jsonPokemon = `{"${number}":"${namee}"}`;
            return resolve(JSON.parse(jsonPokemon))
        })
        .catch(err => {return reject(err + ` erro no id ${i}`)});
    })
}

let start = async()=>{
    for (i = 0; i < 152; i++) {
        //console.log(i);
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        await getPokemonById(url)
            .then(result=>{
                Object.assign(pokemon,result);
                console.log(result);
            })
            .catch(err=>console.log(err))
    }
}

start()

//AMARALZ

    // for (i = 0; i < 152; i++) {
    //     //console.log(i);
        
    //     let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    //     axios.get(url)
    //     .then(async (data) => {
    //         var number = await data.data.id;
    //         var namee = await data.data.name;
    //         let jsonPokemon = `{"${number}":"${namee}"}`;
    //         Object.assign(pokemon,JSON.parse(jsonPokemon));
    //         console.log(pokemon);
    //     })
    //     .catch(err => console.log(err + ` erro no id ${i}`));
    // }

// let pokemon = {};
// // console.log(pokemon);
// pokemon = {1:"bulbassaur"};
// console.log(pokemon);
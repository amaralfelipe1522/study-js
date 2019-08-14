const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/150/";
axios.get(url)
.then(data => console.log(data.data.name))
.catch(err => console.log(err));

// https://httpstat.us/200
// https://httpstat.us/404
// https://httpstat.us/302
// https://httpstat.us/500
// https://httpstat.us/201
// https://httpstat.us/400
// https://httpstat.us/401


// const axios = require("axios");
//     for (i = 0; i < 152; i++) {
//         //console.log(i);
//         let pokemon = {};
//         var url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
//         axios.get(url)
//         .then((data) => {
//             var number = toString(data.data.id);
//             var namee = (data.data.name);
//             pokemon = {number : namee};
//             console.log(pokemon);
//             console.log(data.data.id);
//         })
//         .catch(err => console.log(err + ` erro no id ${i}`));
//     }

// let pokemon = {};
// console.log(pokemon);
// pokemon = {1:"bulbassaur"};
// console.log(pokemon);
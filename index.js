const axios = require("axios");
// (function createButton(){
//     var button = document.createElement('button');
//     button.innerHTML = 'Create Button';
//     button.onclick = function(){
//     createButton();
//     };
//     document.body.appendChild(button);
// })();

// function commit() {
//     let value = document.getElementById("testiculo").value;
//     document.getElementById("resultID").innerHTML = value;
// };

// function createUl () {
//     var ul = document.createElement("ul");
//     var i = 0;
//     ul.setAttribute("id","idUl");
//     document.body.appendChild(ul);
//     console.log(ul);
//     function commit() {
//         let valor = document.getElementById("testiculo").value;
//         document.getElementById("testiculo").value = '';
//         i += 1;
//         var li = document.createElement("li");
//         li.setAttribute ("id",`idLi${i}`);
//         ul.appendChild(li);
//         document.getElementById(`idLi${i}`).innerHTML = valor;
//         console.log(`idLi${i}`);
//     }
//     return [commit]
// };

/////////////////////////////////////////

// function createUl () {
//     var ul = document.createElement("ul");
//     ul.setAttribute("id","idUl");
//     document.body.appendChild(ul);
//     console.log(ul);
//     function commit() {
//         let valor = document.getElementById("testiculo").value;
//         document.getElementById("testiculo").value = '';
//         var li = document.createElement("li");
//         li.setAttribute ("id",`idLi`);
//         li.innerHTML = valor;
//         ul.appendChild(li);
//     }
//     return [commit]
// };

// let f = createUl();
// let commit = f[0];

////////////////////////////////////

let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=19342bb946104beb87d7d53b5023c7c7"
let news;
let startConnection = function () {
    axios.get(url)
    .then((data) => {
        if (data.status == 200) {
            console.log("OK!!");
            let total = data.data.articles;
            for (i = 0; i < total.length; i++) {
                news = data.data.articles[i];
                getNews(news);
            }
        } else {
            console.log(data);
        }
        
    })
    .catch((err) => {console.log(err)});
}
startConnection();
let getNews = function (news) {
    console.log (news);
}

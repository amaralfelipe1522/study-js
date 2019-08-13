// //Request web
// const http = new XMLHttpRequest();
// const url = "https://ultrabot.mybluemix.net/chat/ZmVsaXBlLmFzb3V6YQ==";
// http.open("GET",url);
// http.send();
// http.onreadystatechange = function(event) {
//     console.log(event);
// }

//////////////////////////

// const http = new XMLHttpRequest();
// const url = "https://ultrabot.mybluemix.net/chat/ZmVsaXBlLmFzb3V6YQ==";

// http.onreadystatechange = function(event) {
//     if (event.currentTarget.readyState == 4 && event.currentTarget.status == 200) {
//         console.log ("Abriu");
//         console.log(event);
//     }
// }
// http.open("GET",url);
// http.send();

//////////////////////////////
const http = new XMLHttpRequest();
const url = "https://ultrabot.mybluemix.net/chat/ZmVsaXBlLmFzb3V6YQ==";
http.open("GET",url);
http.send();
http.onreadystatechange = function(event) {
    let promise =  new Promise ((resolve, reject) => {
        if (event.currentTarget.readyState == 4 && event.currentTarget.status == 200) {
            resolve ("Access successfully.");
        } else {
            reject ("Invalid access.");
        }
    })
    .then((msg) => {console.log("Result: " + msg);})
    .catch((error) => {console.log("Result: " + error);})
    .finally(() => {console.log("Ending access test ...")});
};

let url = "https://ultrabot.mybluemix.net/chat/ZmVsaXBlLmFzb3V6YQ==";
fetch (url, {
    method: 'get'
})
.then(function(response){
    console.log("passou"+response);
})
.catch(function(err){
    console.log("não passou"+err);
});
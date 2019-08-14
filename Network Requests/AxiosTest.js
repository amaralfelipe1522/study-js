const axios = require("axios");
const url = "https://outlook.live.com/mail/inbox";
axios.get(url)
.then(data => console.log(data))
.catch(err => console.log(err));

// https://httpstat.us/200
// https://httpstat.us/404
// https://httpstat.us/302
// https://httpstat.us/500
// https://httpstat.us/201
// https://httpstat.us/400
// https://httpstat.us/401
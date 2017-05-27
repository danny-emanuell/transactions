let express = require("./config/express").express;
let config = require("./config/config");
let mongoose = require("mongoose");
let app = express();

app.listen(config.port, ()=>{
    console.log(`on server ${config.port}`);
})

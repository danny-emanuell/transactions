let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let mongoose = require("mongoose");

exports.express = ()=>{   

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    require("../app/routes/transaction.route").RouteTransactions(app);
    require("../app/routes/generica.route").RouteGenerica(app);


    return app;
}

let Generica = require("../controllers/generica.controller")

exports.RouteGenerica = (app)=>{
    app.route("/")
        .get(Generica.generica)
}
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let Schema = mongoose.Schema;
let config = require("../../config/config");

mongoose.connect(config.dbConection,(err)=>{
    (err) ? console.log(`err: ${err}`): console.log(`conexión correcta`);
})

let modelTransactions = {
    category:{
        type:String,
        required:true
        ,},
    description:String,
    amount:{
        type:Number,
        required:true
    },
    user:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
}

let transactionSchema = new Schema(modelTransactions);

module.exports = mongoose.model('Transactions',modelTransactions);
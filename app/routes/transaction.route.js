let ControllerTransaction = require("../controllers/transactions.controller");

exports.RouteTransactions = (app)=>{
    app.route('/transaction')
        .get(ControllerTransaction.getTransactions)
        .post(ControllerTransaction.createTransaction);


    app.route('/transaction/:id')
        .get(ControllerTransaction.getTransactionID)
        .delete(ControllerTransaction.deleteTransaction)
        .put(ControllerTransaction.updateTransaction);


        app.param('id', ControllerTransaction.getTransactionsByID);
}
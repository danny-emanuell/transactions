let DBTransactions = require("../models/transactions.model")

exports.createTransaction = (req,res,next)=>{

    let transaction = new DBTransactions(req.body);

    transaction.save((err,data)=>{
        if (err) return console.log(err)
        
        return res.json(`Transacción guardada: ${data}`);
    })
}


exports.getTransactions = (req,res,next)=>{
    DBTransactions.find({},(err,data)=>{
        res.send(data);
    })
}

exports.updateTransaction = (req,res,next)=>{
    DBTransactions.findByIdAndUpdate({_id:req.transaction.id},req.body,(err,transaction)=>{
        if(err){
            return next(err) 
        } else {
            res.send(`Transacción actualizada ${transaction}`);
        }
    })
}

exports.deleteTransaction = (req,res,next)=>{

        req.transaction.remove((err)=>{
            if(err){
                return next(err)
            } else {
                return res.send("Eliminado")
            }
        })
    
}

exports.getTransactionID = (req,res)=>{
    res.json(req.transaction);
}

exports.getTransactionsByID = (req,res,next,id)=>{
    DBTransactions.findById({_id:id},(err,transaction)=>{
      
      if(err){
          return next(err)
      } else {
          req.transaction = transaction;
          return next();
      }
    })
}
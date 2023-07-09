const conn = require("../index")


function getAll(callback) {

    conn.query("SELECT * FROM history", function (error, results) {
      callback(error, results)
    });
  }



  function addHistory (type, date, receive,amount, card_idcard, callback){
   
    conn.query("INSERT INTO history (type, date, receive,amount,card_idcard) VALUES (?, ?, ?, ?, ?)" , [type, date, receive,amount, card_idcard],function(error , result){
      callback(error , result)
    })

  }

  function deleteAll (callback){   
    conn.query("DELETE FROM history ",card_idcard,function(error , result){
        callback(error , result)
    })
  }

  function getHistoryByUserId( card_idcard ,callback){
   
    conn.query("SELECT *  FROM history WHERE card_idcard= ? ", [card_idcard] , function(error , result){
        callback(error , result)
    })

  }


  module.exports = {getAll , addHistory , deleteAll , getHistoryByUserId}

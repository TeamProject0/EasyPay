const conn = require("../index")


function getAll(callback) {

    conn.query("SELECT * FROM history", function (error, results) {
      callback(error, results)
    });
  }



  function addHistory (date, type, receive, card_idcard,amount , callback){
   
    conn.query("INSERT INTO history (date, type, receive, card_idcard,amount ) VALUES (?, ?, ?, ?, ?)" , [date, type, receive, card_idcard, amount ],function(error , result){

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

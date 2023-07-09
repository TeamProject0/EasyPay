const conn = require("../index")


function getAll(callback) {

    conn.query("SELECT * FROM history", function (error, results) {
      callback(error, results)
    });
  }


  function addHistory (date, type, reciver, card_idcard, users_idusers,amount , callback){
   
    conn.query("INSERT INTO history (date, type, reciver, card_idcard, users_idusers,amount ) VALUES (?, ?, ?, ?, ?, ?)" , [date, type, reciver, card_idcard, users_idusers , amount ],function(error , result){
        callback(error , result)
    })

  }
  function deleteAll (callback){
   
    conn.query("DELETE FROM history ", users_idusers ,function(error , result){
        callback(error , result)
    })

  }

  function getHistoryByUserId( users_idusers ,callback){
   
    conn.query("SELECT *  FROM history WHERE users_idusers= ? ", [users_idusers] , function(error , result){
        callback(error , result)
    })

  }


  module.exports = {getAll , addHistory , deleteAll , getHistoryByUserId}

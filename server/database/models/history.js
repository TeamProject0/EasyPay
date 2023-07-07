const conn = require("../index")


function getAll(callback) {

    conn.query("SELECT * FROM history", function (error, results) {
      callback(error, results);
    });
  }


  function addHistory (date, type, reciver, card_idcard, users_idusers, callback){
   
    conn.query("INSERT INTO history (date, type, reciver, card_idcard, users_idusers) VALUES (?, ?, ?, ?, ?)" , [date, type, reciver, card_idcard, users_idusers],function(error , result){
        callback(error , result)
    })

  }
  module.exports = {getAll , addHistory}

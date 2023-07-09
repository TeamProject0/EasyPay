const conn = require("../index")


function getAll(callback) {

    conn.query("SELECT * FROM history", function (error, results) {
      callback(error, results);
    });
  }


  function addHistory (type, date, receive,amount, card_idcard, callback){
   
    conn.query("INSERT INTO history (type, date, receive,amount,card_idcard) VALUES (?, ?, ?, ?, ?)" , [type, date, receive,amount, card_idcard],function(error , result){
        callback(error , result)
    })

  }
  module.exports = {getAll , addHistory}

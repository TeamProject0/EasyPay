const conn = require("../index.js")

module.exports = {
    getAll: function (callback) {
      const q = 'SELECT * FROM card'
      conn.query(q, function (error, results, fields) {
        callback(error, results);
      });
    },
     
      add: function(callback, values) {
        const q = "INSERT INTO card (cardnumber,cvv,balance,expiry,brand) VALUES (?,?,?,?,?)";
        conn.query(q, [values.cardnumber,values.cvv,values.balance,values.expiry,values.brand], function(err, results, fields) {
          callback(err, results);
        });
      },
      delete: function(idcards,callback ) {
        const q = "DELETE FROM card WHERE idcard = ?";
        conn.query(q,idcards, function(err, results, fields) {
          callback(err, results);
        });
      },
      update: function(idcards,cardnumber,cvv,balance,expiry,brand,callback ) {
        const q = "UPDATE  card SET cardnumber=?, `cvv`=?, balance=?, expiry=?, brand=? WHERE idcard = ?";
        conn.query(q,[idcards,cardnumber,cvv,balance,expiry,brand], function(err, results, fields) {
          callback(err, results);
        });
      }
      
    };
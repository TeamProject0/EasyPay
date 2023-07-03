const conn = require("../index.js")

module.exports = {
    //a function which fetches all the users.
    getAll: function (callback) {
      const q = 'SELECT * FROM card'
      conn.query(q, function (error, results, fields) {
        callback(error, results);
      });
    },
      //a function that retrieves one user record based on the provided id.
      getOne: function(idusers,callback) {
        const q="SELECT * FROM card WHERE idusers = ?"
        conn.query(q,idusers,function(err,result){
          callback(err,result)
        })
      },
      // a function that can be used to add a user to the users table.
      add: function(callback, values) {
        const q = "INSERT INTO card (name) VALUES (?)";
        conn.query(q, [values.name], function(err, results, fields) {
          callback(err, results);
        });
      },
      delete: function(idusers,callback ) {
        const q = "DELETE FROM card WHERE idusers = ?";
        conn.query(q,idusers, function(err, results, fields) {
          callback(err, results);
        });
      },
      update: function(idusers,name,callback ) {
        const q = "UPDATE  card SET name=? WHERE idusers = ?";
        conn.query(q,[name,idusers], function(err, results, fields) {
          callback(err, results);
        });
      }
      
    };
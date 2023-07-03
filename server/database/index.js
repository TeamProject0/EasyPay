const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'paypal',
});

connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to the database: ');
    }
    console.log("database connected");
  });

  module.exports = connection
const conn = require('../index.js');


function getAll  (callback) {

    conn.query("SELECT * FROM history", function (error, results) {
      callback(error, results);
    });
  }

  module.exports = {getAll}

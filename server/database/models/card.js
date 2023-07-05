const conn = require('../index.js');

module.exports = {
  getAll: function (callback) {
    const q = 'SELECT * FROM card';
    conn.query(q, function (error, results) {
      callback(error, results);
    });
  },

  add: function (callback, values, iduser) {
    const q =
      'INSERT INTO card (cardnumber,cvv,balance,expiry,brand,users_idusers) VALUES (?,?,?,?,?,?)';
    conn.query(
      q,
      [
        values.cardnumber,
        values.cvv,
        values.balance,
        values.expiry,
        values.brand,
        iduser,
      ],
      function (err, results) {
        callback(err, results);
      }
    );
  },
  delete: function (idcards, callback) {
    const q = `DELETE FROM card WHERE idcard = ${idcards}`;
    conn.query(q, function (err, results) {
      callback(err, results);
    });
  },
  update: function (values, idcard, callback) {
    const q = `UPDATE card SET balance=${values.balance} WHERE idcard =${idcard}`;
    conn.query(q, function (err, results) {
      callback(err, results);
    });
  },
};

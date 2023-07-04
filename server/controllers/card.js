const cards = require('../database/models/card');
module.exports = {
  getAllCard: function (req, res) {
    cards.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  addCard: function (req, res) {
    cards.add(function (err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }, req.body);
  },
  deleteUser: function (req, res) {
    cards.delete(
      req.params.idcards,
      function (err, results) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.sendStatus(204);
        }
      },
      req.params
    );
  },

  updateCard: function (req, res) {
    cards.update(
      req.body.cardnumber,
      req.body.cvv,
      req.body.balance,
      req.body.expiry,
      req.body.brand,
      req.params.idcard,
      function (err, results) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.sendStatus(200);
        }
      },
      req.params
    );
  },
};

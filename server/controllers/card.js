const cards = require('../database/models/card');
module.exports = {
  getAllCard: function (req, res) {
    cards.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  addCard: function (req, res) {
    cards.add(
      function (err, results) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(results);
        }
      },
      req.body,
      req.params.iduser
    );
  },
  deleteCard: function (req, res) {
    cards.delete(req.params.idcards, function (err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(202).send(results);
      }
    });
  },

  addBalance: function (req, res) {
    cards.update(req.body, req.params.idcards, function (err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
};

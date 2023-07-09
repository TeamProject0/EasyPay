
const history = require('../database/models/history');


function getAllHistory(req, res) {
    history.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  }

  function addHistory(req, res) {
    history.addHistory(req.body.date, req.body.type, req.body.reciver, req.body.card_idcard, req.body.amount , function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  }
  function deleteAll(req, res) {
    history.deleteAll( function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  }



  module.exports = { getAllHistory , addHistory , deleteAll};

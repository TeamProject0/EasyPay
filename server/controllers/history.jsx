const history = require('../database/models/history');


function getAllHistory(req, res) {
    history.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  }


  module.exports= {getAllHistory}

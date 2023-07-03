const users = require("../database/models/users")
module.exports = {
    getAllUsers: function(req, res) {
        users.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },
    addUser: function(req, res) {
        users.add(function(err, results) {
          if(err) {
            res.status(500).send(err);
          } else {
            res.json(results);
          }
        }, req.body);
      },
      deleteUser: function(req, res) {
        users.delete(req.params.idusers,function(err, results) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.sendStatus(204);
          }
        }, req.params);
      },

      updateUser: function(req, res) {
        users.update(req.body.username,req.body.email,req.body.password,req.body.name,req.body.lastname,req.body.country,req.params.idusers,function(err, results) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.sendStatus(200);
          }
        }, req.params);
      }

}
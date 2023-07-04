const conn = require("../index")
const cloudinary = require("../cloudConfig.js")

module.exports = {
    getAll: function (callback) {
        const q = 'SELECT * FROM users'
        conn.query(q, function (error, results) {
          callback(error, results);
        });
      },

      add: async function(callback, values) {
        try{
            const uploadResult =  await cloudinary.v2.uploader.upload(values.cover, {
                folder: 'paypal',
              })
              console.log(uploadResult.secure_url)
            const q = "INSERT INTO users (username, `email`, password, name, lastname, country, cover,) VALUES (?, ?, ?, ?, ?, ?, ?)";
            conn.query(q,[values.username,values.email,values.password,values.name,values.lastname,values.country,values.cover], function(err, results) {
              callback(err, results);
            });
        }catch(err){
            console.log(err);
        }
      },


      delete: function(idusers,callback ) {
        const q = "DELETE FROM users WHERE idusers = ?";
        conn.query(q,idusers, function(err, results) {
          callback(err, results);
        });
      },
      
      update: function(idusers,username,email,password,name,lastname,country,callback ) {
        const q = 'UPDATE users SET username = ?, `email` = ?, password = ?, name = ?, lastname = ?, country = ? WHERE idusers = ?';
        conn.query(q,[idusers,username,email,password,name,lastname,country], function(err, results, fields) {
          callback(err, results);
        });
      }

}
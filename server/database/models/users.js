const conn = require('../index');
const cloudinary = require("../cloudConfig.js")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
require('dotenv').config()
// const {ACCESS_TOKEN_SECRET}=require("./jwtConfig")
module.exports = {
  //* get all users from db
  getAll: function (callback) {
    const q = 'SELECT * FROM users';
    conn.query(q, function (error, results) {
      callback(error, results);
    });
  },
  //* add a user to db (signUp)
  add: async function (callback, values) {
    console.log(values);
    try {
      const hashedPassword= await bcrypt.hash(values.password,10)
      const q =
        'INSERT INTO users (username, email, password, name, lastname, country, cover) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const uploadResult = await cloudinary.uploader.upload(values.cover, {
          folder: "paypal" 
        });
        console.log(uploadResult.secure_url)
      conn.query(
        q,
        [
          values.username,
          values.email,
          hashedPassword,
          values.name,
          values.lastname,
          values.country,
          uploadResult.secure_url
        ],
        function (err, results, fields) {
          callback(err, results);
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
  //* delete a user from db (remove account)
  delete: function (idusers, callback) {
    const q = 'DELETE FROM users WHERE idusers = ?';
    conn.query(q, idusers, function (err, results) {
      callback(err, results);
    });
  },
 //* update user in db
      update: function (
    idusers,
    username,
    email,
    password,
    name,
    lastname,
    country,
    callback
  ) {
    const q =
      'UPDATE users SET username = ?, `email` = ?, password = ?, name = ?, lastname = ?, country = ? WHERE idusers = ?';
    conn.query(
      q,
      [idusers, username, email, password, name, lastname, country],
      function (err, results, fields) {
        callback(err, results);
      }
    );
  },
//*authentication 
  login:(values,cb)=>{
    const sql=`Select * from users where username="${values.username}"`
    conn.query(sql,(err,result)=>{
      if(err){
        cb(err,null)
      }
      else if(!result[0]){
        cb("User not found",null)
      }
      else{
        bcrypt.compare(values.password,result[0].password,(err,res)=>{
          if(res){
            const token=jwt.sign({
              username:result[0].username,
              password:result[0].password
            },ACCESS_TOKEN_SECRET)
            cb(null, token)
          }else{
            cb("Incorrect password",null)
          }
        })
      }
    })
  },
  //*get one user for login
  getOneUser:(username,cb)=>{
    const sql = `Select * from users where username="${username}"`
    conn.query(sql,(err,result)=>{
      cb(err,result)
    })
  }
};










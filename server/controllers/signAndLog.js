
const users = require('../database/models/users');

module.exports={
    authenticate:(req,res)=>{
      
        users.login(req.body,(err,result)=>{
            if (err) {
                console.error(err)
                res.status(401).send('Authentication failed')
              } else {
                res.json(result)
              }
        })
    }
}
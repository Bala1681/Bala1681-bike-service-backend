const mongo = require("../shared/connect");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.signup = async(req, res , next)=>
{
    const existUser = await mongo.db.collection("user").findOne({email:req.body.email})
     if(existUser) return res.status(400).send({msg:"Email already exist"})
      //Salt - It is an random strinng
     const salt = await bcrypt.genSalt(5);
     req.body.password = await bcrypt.hash(req.body.password , salt)

      var data = await mongo.db.collection("user").insertOne(req.body)
      res.send(data);

}
exports.signin = async(req , res , next)=>
{
    const existUser = await mongo.db.collection("user").findOne({email: req.body.email})
    if(!existUser) return res.status(400).send({msg:"Email is not registered"})

    const isValid = await bcrypt.compare(req.body.password , existUser.password )
    if(!isValid) return res.status(400).send({msg:"Incorrect Password"})
    
    const token = jwt.sign(existUser, "AGILI",{expiresIn:"365d"})
    res.send(token);


}   
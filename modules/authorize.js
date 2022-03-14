const jwt = require("jsonwebtoken");
exports.AuthenciateUser = async(req , res , next)=>
{
    if(!req.headers["access-token"])
    
        return res.status(400).send({msg:"Token not found"})
    try{
  req.body.user = await jwt.verify(req.headers["access-token"],"AGILI")
  
     next();
    }catch(err)
    {
res.send(401).send({msg: "unauthorised"})
    
    
    
    }
}

exports.isAdmin = async(req , res , next )=>
{
    if(req.body.user.role == "Admin")
    next()
    else{
        res.status(403).send({msg:"you are not admin"})
    }

}
const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(!token){
        return res.status(401).json({msg:"Access denied. No token provided."})
    }

    let decoded = jwt.verify(token,"yash")
    
    req.user = decoded

    next()
    
}

module.exports = auth
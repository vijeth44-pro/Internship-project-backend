import jwt from 'jsonwebtoken'

const SECRETKEY = 'lordkey'

 const  authUser = async(req,res,next) =>{
  try {
    // access token from api request
    // frontend inda access madudu
    const token = req.header("auth-token")
    if(!token){
        return req.status(401).json({
            success:false,
            message:"Token required"
        })
    }
     
    // decoding the token & verifing it with secret key
    // reomove secretkey only payload
    const decoded = jwt.verify(token,SECRETKEY)
    // attaching the decoded user data to the request object for further use
    req.user = decoded 
    next()
  } catch (error) {
    res.status(400).json()
    success:false
    message :"Token needed"
  }
 }
 export default authUser
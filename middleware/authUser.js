import jwt from 'jsonwebtoken'

const SECRETKEY = process.env.JWT_SECRET || 'lordKey'

 const  authUser = async(req,res,next) =>{
  try {
    // Accept either `auth-token` or standard `Authorization: Bearer <token>`
    const authTokenHeader = req.header("auth-token")
    const authorizationHeader = req.header("authorization")
    const bearerToken = authorizationHeader?.startsWith("Bearer ")
      ? authorizationHeader.split(" ")[1]
      : null
    const token = authTokenHeader || bearerToken

    if(!token){
        return res.status(401).json({
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
    return res.status(400).json({
      success:false,
      message :"Invalid or expired token"
    })
  }
 }
 export default authUser

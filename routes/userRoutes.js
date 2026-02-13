// function routing in backend 
// component routing in fronntend 
import express from  'express'
// inside {} for controller  {abvc,asfghj,diff function name from controller,}
import { createUser,getUser } from '../controller/userController.js';

// create router
const router = express.Router()

//routes 
//  router http method  path function name
// route structure -> varible.httpMethod("path",handler)
router.post("/addUser",createUser)
router.get("/getUser",getUser)

// export 
export default router;
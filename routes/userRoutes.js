// function routing in backend 
// component routing in fronntend 
import express from  'express'
// inside {} for controller  {abvc,asfghj,diff function name from controller,}
import { createUser,getUser , singleView , deleteUser , updateUser} from '../controller/userController.js';

// create router
const router = express.Router()

//routes 
//  router http method  path function name
// route structure -> varible.httpMethod("path",handler)
router.post("/addUser",createUser)
router.get("/getUser",getUser)
router.get("/singleView/:diplomo",singleView)
router.delete("/delete/:id", deleteUser)
router.put("/update/:id", updateUser)

// export 
export default router;
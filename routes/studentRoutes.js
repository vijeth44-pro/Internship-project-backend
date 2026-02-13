// function routing in backend 
// component routing in fronntend 
import express from  'express'
// inside {} for controller  {abvc,asfghj,diff function name from controller,}
import { createStudent,getStudent } from '../controller/studentController.js';

// create router
const router = express.Router()

//routes 
//  router http method  path function name
// route structure -> varible.httpMethod("path",handler)
router.post("/addStudent",createStudent)
router.get("/getStudent",getStudent)

// export 
export default router;
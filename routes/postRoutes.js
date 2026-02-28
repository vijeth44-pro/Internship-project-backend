// import express from 'express'
// const router  = express.Router();
// export default router;
import express from 'express';
import {createPost } from '../controller/postController.js';
import authUser from '../middleware/authUser.js'

const router  = express.Router();
router.post("/create",authUser,createPost)

export default router;
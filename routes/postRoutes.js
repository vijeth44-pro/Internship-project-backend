// import express from 'express'
// const router  = express.Router();
// export default router;
import express from 'express';
import {createPost } from '../controller/postController.js';

const router  = express.Router();
router.post("/create",createPost)

export default router;
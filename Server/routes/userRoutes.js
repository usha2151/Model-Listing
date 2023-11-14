import express from 'express';
import { addUsers } from '../controller/userController.js';

const router = express.Router();

router.post('/addUsers', addUsers);
      // .get('/verifyModels', verifyToken ,verifyModels);
   

export default router;
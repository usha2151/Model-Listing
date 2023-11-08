import express from 'express';
import { addModels, getModels, upload, loginModels} from '../controller/modelController.js';


const router = express.Router();

router.post('/addModels', upload.single('file'), addModels)
      .get('/getModels', getModels)
      .post('/loginModels', loginModels);
      // .get('/verifyModels', verifyToken ,verifyModels);
   

export default router;

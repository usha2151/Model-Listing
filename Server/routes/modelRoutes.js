import express from 'express';
import { addModels, getModels, upload,getModelsByid} from '../controller/modelController.js';


const router = express.Router();

router.post('/addModels', upload.array('file',9), addModels)
      .get('/getModels', getModels)
      .get('/getModels/:id', getModelsByid);
      // .get('/verifyModels', verifyToken ,verifyModels);
   

export default router;

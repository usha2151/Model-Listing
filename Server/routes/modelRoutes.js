import express from 'express';
import { addModels, getModels, upload, loginModels ,getModelsByid, FilterModels} from '../controller/modelController.js';


const router = express.Router();

router.post('/addModels', upload.single('file'), upload.array('files', 5), addModels)
      .get('/getModels', getModels)
      .post('/loginModels', loginModels)
      .get('/getModels/:id', getModelsByid).get('/filterModels', FilterModels);
      // .get('/verifyModels', verifyToken ,verifyModels);
   

export default router;

import express from 'express';
import { addModels, getModels, upload, getModelsByid, sentMail } from '../controller/modelController.js';

const router = express.Router();

router.post('/addModels', upload.array('file', 9), addModels)
  .get('/getModels', getModels)
  .get('/getModels/:id', getModelsByid);
router.post('/sentmail', sentMail)
// .get('/verifyModels', verifyToken, verifyModels);

export default router;

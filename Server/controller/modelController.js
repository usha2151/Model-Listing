import Models from "../model/ModelSchema.js";
import dotenv from 'dotenv';
dotenv.config();
import bcrypt from "bcryptjs";
import multer from 'multer';
import path from 'path';



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  // Allow only image files with specific mime types (adjust as needed)
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'), false);
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
// Register a model
export const addModels = async (req, res) => {
  const { name, email, experience, mobile, specialization, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    if (!name || !email || !experience || !mobile || !specialization || !password) {
      return res.status(422).json({ error: "Please fill in all required fields." });
    }

    const images = req.files.map(file => file.filename);

    // Check if the number of images is more than 8
    if (images.length > 8) {
      return res.status(422).json({ error: "Only 8 images are allowed." });
    }

    const newModel = new Models({
      name,
      email,
      mobile,
      experience,
      specialization,
      images,
      password: hashedPassword,
    });

    await newModel.save();
    console.log(newModel);

    return res.status(201).json(newModel);
  } catch (error) {
    return res.status(500).json({ error: "An error occurred while processing your request." });
  }
};
// Fetch all models
export const getModels = async (req, res) => {
  try {
    const models = await Models.find();
    res.json(models);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};



// get individual user

export const getModelsByid = async (req, res) => {
  try {
      // console.log(req.params);
      const {id} = req.params;

      const userindividual = await Models.findById({_id:id});
      // console.log(userindividual);
      res.status(201).json(userindividual);

  } catch (error) {
      res.status(422).json(error);
  }
};

import Models from "../model/ModelSchema.js";
import dotenv from 'dotenv';
dotenv.config();
import bcrypt from "bcryptjs";
import multer from 'multer';
import path from 'path';



// Import your Models schema or model definition here

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

export  const upload = multer({ storage: storage });


// Register a model
export const addModels = async (req, res) => {
  console.log(req.body);
  const { name, email, experience, mobile, specialization, password } = req.body; // Destructure these values from req.body
   // Hash the user's password before saving it
   const saltRounds = 10; // You can adjust the number of salt rounds
   const hashedPassword = await bcrypt.hash(password, saltRounds);
console.log(hashedPassword);
  try {
    if (!name || !email || !experience || !mobile || !specialization || !password) {
      return res.status(422).json({ error: "Please fill in all required fields." });
    }

    // You should have your Models schema/model defined and imported here
    // Example: const newModel = new Models({
    const newModel = new Models({
      name,
      email,
      mobile,
      experience,
      specialization,
      image: req.file ? req.file.filename : null, // File path or null if no file uploaded
      password: hashedPassword, // Hashed password
    });

    await newModel.save();

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

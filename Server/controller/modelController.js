import Models from "../model/ModelSchema.js";
import dotenv from 'dotenv';
dotenv.config();
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
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
  const { name, email, experience, mobile, specialization, password } = req.body; // Destructure these values from req.body

  // Hash the user's password before saving it
  const saltRounds = 10; // You can adjust the number of salt rounds
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    if (!name || !email || !experience || !mobile || !specialization || !password) {
      return res.status(422).json({ error: "Please fill in all required fields." });
    }

    // Create a new model instance with the required data
    const newModel = new Models({
      name,
      email,
      mobile,
      experience,
      specialization,
      password: hashedPassword, // Hashed password

      // Check if a single file is uploaded
      image: req.file ? req.file.filename : null,

      // Check if multiple files are uploaded
      files: req.files ? req.files.map((file) => file.path) : [],
    });
  console.log(files);
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


// Login model
export const loginModels = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user with the provided email exists in the database
    const user = await Models.findOne({ email });

    if (!user) {
      console.log("Invalid email or password: Email not found");
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.log("Invalid email or password: Password mismatch");
      return res.status(401).json({ error: "Invalid email or password." }); 
    }

    // If the password is correct, generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    console.log("Login successful. Token generated:", token);
    res.header('Access-Control-Allow-Credentials', true);

    // Set the token as a cookie with httpOnly and maxAge options
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 });

    // Include the image in the user data
    const userData = {
      _id: user._id,
      email: user.email,
      image: user.image, // Assuming user.image is the image URL
    };

    // Send the token and user data in the response
    res.status(200).json({ token, user: userData });

  } catch (error) {
    console.log("An error occurred while logging in:", error);
    res.status(500).json({ error: "An error occurred while logging in." });
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


// Filter Models Data by Category

export const FilterModels = async (req, res) => {
  const { name, specialization } = req.query;
  try {
    let query = {};
    if (name) {
      query.name ={ $regex: new RegExp(name, 'i') };
    }
    if (specialization) {
      query.specialization = { $regex: new RegExp(specialization, 'i') };;
    }
    const models = await Models.find(query);
    res.json(models);
  } catch (err) {
    console.error('Error fetching models: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

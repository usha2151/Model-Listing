import Models from "../model/ModelSchema.js";
import dotenv from 'dotenv';
dotenv.config();
import bcrypt from "bcryptjs";
import multer from 'multer';
import path from 'path';
import nodemailer from 'nodemailer';
import Rating from '../model/Rating.js'



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
  console.log(req.body);
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
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "aftabalam9008@gmail.com",
    pass: "emkb wrou ijrt uwhi",
  },
});

export async function sentMail(req, res) {
  const { email } = req.body;

  try {
    // Send email to subscriber
    const subscriberInfo = await transporter.sendMail({
      from: '"model listing 👻" <aftabalam9008@gmail.com>',
      to: email,
      subject: 'Subscription Confirmation',
      text: 'Hello world?',
      html: 'Thank you for subscribing!',
    });

    // Send email to admin
    const adminEmail = 'aftabalam9008@gmail.com'; // Replace with your admins email
    const adminInfo = await transporter.sendMail({
      from: '"model listing 👻" <aftabalam9008@gmail.com>',
      to: adminEmail,
      subject: 'New Subscription',
      text: `A new subscriber with email ${email} has subscribed.`,
      html: `A new subscriber with email ${email} has subscribed.`,
    });

    console.log("Subscriber Message sent: %s", subscriberInfo.messageId);
    console.log("Admin Message sent: %s", adminInfo.messageId);

    // Respond to the client
    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
}

export const saveRating = async (req, res) => {
  console.log('Received rating request:', req.params);
  console.log(req.body);

  try {
    const { modelId, user } = req.params;
    const { rating, review, title } = req.body;

    const newRating = new Rating({
      modelId,
      user,
      rating,
      review,
      title,
    });

    await newRating.save();

    // Calculate average rating
    const ratings = await Rating.find({ modelId });
    const totalRating = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    const averageRating = totalRating / ratings.length;

    console.log(newRating);

    res.status(200).json({ message: 'Rating saved successfully', averageRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



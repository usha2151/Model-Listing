import Users from "../model/userSchema.js";
import Models from "../model/ModelSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv';
dotenv.config();



// Login model
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user with the provided email exists in the database
        const model = await Models.findOne({ email });
        const users = await Users.findOne({ email });

        // Ensure that at least one of the models has found a user
        if (!model && !users) {
            console.log("Invalid email or password: Email not found");
            return res.status(401).json({ error: "Invalid email or password." });
        }

        // Use the correct user based on the model that found a user
        const user = model || users;

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
            name: user.name,
            image:user.image, // Assuming user.image is the image URL
        };

        // Send the token and user data in the response
        res.status(200).json({ token, user: userData });

    } catch (error) {
        console.log("An error occurred while logging in:", error);
        res.status(500).json({ error: "An error occurred while logging in." });
    }
};

  
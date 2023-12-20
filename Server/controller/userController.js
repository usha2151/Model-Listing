import Users from "../model/userSchema.js";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv';
dotenv.config();


// Register a User
export const addUsers = async (req, res) => {
    console.log('body',req.body);
    const { fname, lname, email, mobile, password } = req.body; // Destructure these values from req.body
    // Hash the user's password before saving it
    const saltRounds = 10; // You can adjust the number of salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log(hashedPassword);
    try {
        if (!fname || !lname || !email || !mobile || !password) {
            return res.status(422).json({ error: "Please fill in all required fields." });
        }

        // Combine fname and lname into a single variable
        const fullName = `${fname} ${lname}`;

        // You should have your Models schema/model defined and imported here
        // Example: const newModel = new Models({
        const newUser = new Users({
            name: fullName,
            email,
            mobile,
            password: hashedPassword, // Hashed password
        });

        await newUser.save();

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email, // Include the email in the response
                mobile: newUser.mobile,
            }
        });
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while processing your request." });
    }
};

  
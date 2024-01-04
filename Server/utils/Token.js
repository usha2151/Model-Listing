import jwt from 'jsonwebtoken';
import Models from '../model/ModelSchema.js';
import Users from '../model/userSchema.js'
import dotenv from 'dotenv';
dotenv.config();

export const userFromToken = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify the JWT token using the secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
 

    let user;

    // Check both schemas to find the user based on the decoded token (e.g., user ID)
    user = await Models.findById(decoded.userId) || await Users.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Create a new user object without sensitive information
    const userWithoutPassword = { ...user._doc };
    delete userWithoutPassword.password;
    delete userWithoutPassword.verificationCode;

    res.status(200).json({ message: 'User found', user: userWithoutPassword });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

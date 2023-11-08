import jwt from 'jsonwebtoken'
import Models from '../model/ModelSchema.js';
import dotenv from 'dotenv';
dotenv.config();

export const userFromToken= async (req, res) => {
    try {
        const {authorization} = req.headers;
        const token=authorization.split(' ')[1]
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
  console.log(decoded);
      // Find the user data based on the decoded token (e.g., user ID)
      const user = await Models.findById(decoded.userId);
  
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      
    // Create a new user object without the password
    const userWithoutPassword = { ...user._doc };
    delete userWithoutPassword.password;
    delete userWithoutPassword.verificationCode

    console.log(user);
      res.status(200).json({ user:userWithoutPassword });
    } catch (error) {
      console.error('Token verification error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
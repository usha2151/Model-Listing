import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url'; // Import the 'fileURLToPath' function
import path from "path";
import dotenv from 'dotenv';
import Connection from "./database/connection.js";
import Routes from './routes/modelRoutes.js';
import userRoutes from './routes/userRoutes.js';
import {login} from './controller/loginController.js';
import { userFromToken } from "./utils/Token.js";


dotenv.config(); // Configure dotenv to load environment variables from .env file
console.log(process.env.SECRET_KEY);
const __filename = fileURLToPath(import.meta.url); // Get the current module's filename
const __dirname = path.dirname(__filename); // Get the current module's directory name

const app = express();
const port = 8080;

// Serve static files from the 'public/upload' folder
app.use('/public/upload', express.static(path.join(__dirname, 'public', 'upload')));

Connection();
app.use(cors());
app.use(express.json());
app.use('/token-data',userFromToken)
app.use('/login', login);

app.use('/models', Routes);
app.use('/users', userRoutes);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

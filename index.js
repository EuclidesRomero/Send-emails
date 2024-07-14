import  express from "express";
import dotenv from 'dotenv';
import { sendEmail } from "./backend/controllers/sendMessageController.js";
import sendMessageRoutes from './backend/routes/sendMessageRoutes.js'

const app = express();
dotenv.config();
app.use(express.json());


app.use("/api/sendEmail",sendMessageRoutes);

const PORT  = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('server up in the port: ', PORT);
})

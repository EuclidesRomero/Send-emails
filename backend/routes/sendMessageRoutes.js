import  Express  from "express";
import { sendEmail } from "../controllers/sendMessageController.js";

const router = Express.Router();

router.post('/send-individual-email', sendEmail)

export default router;
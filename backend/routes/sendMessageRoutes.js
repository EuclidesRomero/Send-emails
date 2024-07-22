import  Express  from "express";
import { sendEmail, sendMultipleEmails } from "../controllers/sendMessageController.js";

const router = Express.Router();

router.post('/send-individual-email', sendEmail)
router.post('/send-multiple-emails', sendMultipleEmails )

export default router;
import {sendMultipleEmail, sendSingleEmail} from '../services/emailService.js';

const sendEmail = async (req, res) => {
  try {
    const result = await sendSingleEmail();
    res.json({message: result});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

const sendMultipleEmails = async (req, res) => {
  const {emailAddresses} = req.body;
  try {
    const result = await sendMultipleEmail(emailAddresses);
    res.json({message: result})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


export { 
    sendEmail,
    sendMultipleEmails
} 
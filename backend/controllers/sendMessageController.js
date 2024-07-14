import {sendSingleEmail} from '../services/emailService.js'
const sendEmail = async (req, res) => {
   res.send(sendSingleEmail())
  
}


export { 
    sendEmail,
} 
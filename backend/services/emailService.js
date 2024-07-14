import nodemailer from 'nodemailer'

const sendSingleEmail = () => {
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: 'pruebatestbq@gmail.com', // sender address
          to: "euclidesantonioromeroibarra@gmail.com", // list of receivers
          subject: "Correo de prueba", // Subject line
          text: "Funcionó correctamente el envio de correo", // plain text body
          html: "<b>Este es un mensaje de prueba utilizando el servicio de AWS</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main().catch(console.error);
    

      return {msg: 'El mensaje fue enviado'}

}

export {
    sendSingleEmail
}
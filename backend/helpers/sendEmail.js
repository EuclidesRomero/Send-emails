import nodemailer from 'nodemailer'

const sendEmail = async (datos) =>{
    const { email, nombre, apellido } = datos; 
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false, 
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
      },
    });
    
    
    async function main() {
      const info = await transporter.sendMail({
        from: 'pruebatestbq@gmail.com', 
        to: "euclidesantonioromeroibarra@gmail.com", 
        subject: "Correo de prueba", 
        text: "Funcionó correctamente el envio de correo", 
        html: "<b>Este es un mensaje de prueba utilizando el servicio de AWS</b>", 
      });
    
      console.log("Message sent: %s", info.messageId);
      
    }
    
    main().catch(console.error);
    res.status(200).json({
        ok: true,
        message: 'Se envio correctamente'
    })

}
import { SendEmailCommand, SendBulkTemplatedEmailCommand} from '@aws-sdk/client-ses';
import { SESv2Client} from "@aws-sdk/client-sesv2"; 
import { awsConfig } from '../../config.js';

//Instanciamos el cliente
const client = new SESv2Client(awsConfig);
//Envia un mensaje:
const sendSingleEmail = async () => {
  const input = {
    Source: process.env.EMAIL_SOURCE,
    Destination: {
      ToAddresses: [process.env.EMAIL_DESTINATION],
    },
    Message: {
      Subject: {
        Data: "Correo de prueba",
        Charset: "UTF-8",
      },
      Body: {
        Text: {
          Data: "Funcionó correctamente el envio de correo",
          Charset: "UTF-8",
        },
        Html: {
          Data: "<b>Este es un mensaje de prueba utilizando el servicio de AWS</b>",
          Charset: "UTF-8",
        },
      },
    },
    ReplyToAddresses: [process.env.EMAIL_SOURCE],
  };

  try {
    const command = new SendEmailCommand(input);
    const response = await client.send(command);
    console.log("Message sent: %s", response.MessageId);
    return {
      statusCode: 200,
      body: JSON.stringify( response.MessageId ),
    };
  } catch (error) {
    console.error("Error sending email: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
    
  }
};

//Envia multiples emails:
const sendMultipleEmail = async (destinatarios) => {
  const bulkEmailEntries = destinatarios.map(email => ({
    Destination: {
      ToAddresses: [email],
    },
    ReplacementTemplateData: JSON.stringify({
      subject: "Correo de prueba",
      text: "Funcionó correctamente el envío de correo",
      html: "<b>Este es un mensaje de prueba utilizando el servicio de AWS parte masica</b>",
    }),
  }));

 
  const input = {
    Source: process.env.EMAIL_SOURCE,
    Template: 'Prueba',
    Destinations: bulkEmailEntries,
    DefaultTemplateData: '{}',  
    ReplyToAddresses: [process.env.EMAIL_SOURCE],
  };

  const command = new SendBulkTemplatedEmailCommand(input);

  try {
    const response = await client.send(command); 
    console.log('Emails enviados con éxito:', response);
    return {
      statusCode: 200,
      body: JSON.stringify( response.MessageId),
    };
  } catch (error) {
    console.error('Error al enviar los emails:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};

export {
  sendSingleEmail,
  sendMultipleEmail
}
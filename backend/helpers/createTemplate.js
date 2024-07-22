import { SESv2Client, CreateEmailTemplateCommand } from "@aws-sdk/client-sesv2";
import { awsConfig } from "../../config";

const client = new SESv2Client(awsConfig);
const createTemplate = async () => {
  const input = {
    TemplateName: "YourTemplateName", // Nombre de tu plantilla
    TemplateContent: {
      Subject: "Correo de prueba",
      Html: "<b>Este es un mensaje de prueba utilizando el servicio de AWS</b>",
      Text: "Funcionó correctamente el envío de correo",
    },
  };

  const command = new CreateEmailTemplateCommand(input);

  try {
    const response = await client.send(command);
    console.log('Plantilla creada con éxito:', response);
  } catch (error) {
    console.error('Error al crear la plantilla:', error);
  }
};

createTemplate();

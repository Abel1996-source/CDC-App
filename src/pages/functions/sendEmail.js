const nodemailer = require("nodemailer");
 export const sendEmail = async (recipientEmail) => {
    try {
      // Créez un transporteur SMTP pour l'envoi de l'e-mail
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'k.kouakouabel96@gmail.com',
          pass: 'IngenieurPro96'
        }
      });
  
      // Configurez les détails de l'e-mail à envoyer
      let mailOptions = {
        from: 'k.kouakouabel96@gmail.com',
        to: recipientEmail,
        subject: 'Sujet de l\'e-mail',
        text: 'Contenu de l\'e-mail'
      };
  
      // Envoyez l'e-mail
      let info = await transporter.sendMail(mailOptions);
      console.log('E-mail envoyé :', info.messageId);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
  };
  
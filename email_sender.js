const nodemailer = require("nodemailer");
async function sendEmail() {
  
  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: "votre-email@gmail.com", 
      pass: "votre-mot-de-passe",    
    },
  });

  
  const mailOptions = {
    from: "votre-email@gmail.com", 
    to: "destinataire@gmail.com",  
    subject: "Test Email Node.js", 
    text: "Ceci est un email envoyé depuis un script Node.js avec Nodemailer.", // Contenu texte
    html: "<h1>Ceci est un email envoyé depuis Node.js !</h1>", // Contenu HTML
  };

  try {
    
    const info = await transporter.sendMail(mailOptions);
    console.log("Email envoyé avec succès :", info.response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
  }
}


sendEmail();

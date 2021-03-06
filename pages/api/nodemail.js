const mailer = require('nodemailer');
const user = process.env.users;
const pass = process.env.pass;

module.exports = (email, nome, mensagem) => {
  const smtpTransport = mailer.createTransport({
    host: 'smtp.umbler.com',
    port: 587,
    secure: false, //SSL/TLS
    auth: {
      user,
      pass,
    },
  });

  const mail = {
    from: user,
    to: email,
    subject: `Formulario de Contato Site Goias Caldeiraria`,
    text: `${nome} deixou seu email ${email}  para contato e deixou essa mensagem ${mensagem}`,
  };

  return new Promise((resolve, reject) => {
    smtpTransport
      .sendMail(mail)
      .then(response => {
        smtpTransport.close();
        return resolve(response);
      })
      .catch(error => {
        smtpTransport.close();
        return reject(error);
      });
  });
};
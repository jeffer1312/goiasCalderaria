const mailer = require('nodemailer');

const user = process.env.USER; //'sitegoiascaldeiraria@gmail.com'; //
const pass = process.env.PASS; // 'Gustavo1*';

module.exports = (email, nome, mensagem) => {
  console.log(user, pass);
  const smtpTransport = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, //SSL/TLS
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mail = {
    from: 'Formulario de Contato Site <sitegoiascaldeiraria@gmail.com>',
    to: 'jeffer1312@gmail.com', //'goias.montagem@gmail.com',
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

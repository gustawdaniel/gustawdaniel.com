const functions = require('firebase-functions');

// const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
// admin.initializeApp();

const DOMAIN = functions.config().mailgun.domain;
const API_KEY = functions.config().mailgun.api_key;
const mailGun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.setHeader('Content-Type', 'application/json');

    // getting dest email by query string
    const { name, email, description } = req.query;

    if (!name || !email || !description) {
      return res.send(JSON.stringify({ error: 'name, email and description should be added as query' }));
    }

    const data = {
      from: `${name} <${email}>`, // postmaster@sandbox3e1c244cb08946ed9b5eceb6b1fdc0e5.mailgun.org
      to: 'gustaw.daniel@gmail.com',
      subject: 'Message from https://gustawdaniel.com',
      text: `Name: ${name}
Email: ${email}

Message: ${description}`
    };

    mailGun.messages().send(data, function (error, body) {
      if (error) {
        throw error;
        // return res.send(erro.toString());
      }
      return res.send(JSON.stringify(body));
    });
  });
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

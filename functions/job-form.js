'use strict';
const Stream = require('stream').Readable;
const fs = require('fs');

const sendgrid = require('@sendgrid/mail');
const multiparty = require('multiparty');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  var data = {};
  try {
    var form = new multiparty.Form();

    let stream = new Stream();
    stream.push(event.body);
    stream.push(null);
    stream.headers = event.headers;

    form.parse(stream, async function (err, fields, files) {
      if (err) throw err;

      data = { ...fields, ...files };

      const {
        jobTitle = '',
        jobDescription = '',
        firstName,
        lastName,
        phone,
        email,
        message,
        resume,
      } = data;

      await sendgrid.send({
        to: 'ne4eporenko.v@gmail.com',
        from: 'website@ese-srl.com',
        subject: jobDescription
          ? `New sign up at the Job form - ${jobDescription[0]} position!`
          : 'New sign up at the Job form!',
        html: `
          <!DOCTYPE html>
          <html>
            <body>
              <h2>Dear Admin,</h2>
              <p>Another user has submitted the Job form at the ESE-SRL website${
                jobTitle ? `, ${jobTitle[0]} - ${jobDescription[0]}` : '!'
              }</p>
              <h3>Info:</h3>
              <div><b>First name:</b> ${firstName[0]}</div>
              <div><b>Last name:</b> ${lastName[0]}</div>
              <div><b>Phone number:</b> ${phone[0]}</div>
              <div><b>Email address:</b> ${email[0]}</div>
              <div><b>Message:</b> ${message[0]}</div>
            </body>
          </html>
          `,
        attachments: [
          {
            content: fs.readFileSync(resume[0].path).toString('base64'),
            filename: resume[0].originalFilename,
            type: resume[0].headers['content-type'],
            disposition: 'attachment',
          },
        ],
      });
    });
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message, data }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ error: '' }),
  };
};

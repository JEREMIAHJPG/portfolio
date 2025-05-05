import { defineEventHandler, readBody, setResponseStatus } from 'h3';
import nodemailer from 'nodemailer';
import { useRuntimeConfig } from '#imports';

const EmailUser = useRuntimeConfig().EmailUser;
const Emailpass = useRuntimeConfig().Emailpass;
// Nodemailer Setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: EmailUser,
    pass: Emailpass, // Fixed variable name typo
  },
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, subject, html,name, message } = body;

    if (!email || !subject || !html || !name || !message) {
      setResponseStatus(event, 400);
      return { message: 'Missing required fields' };
    }

    const info = await transporter.sendMail({
      from: email,
      to: `"Asastra-Dev" <${EmailUser}>`,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    return { message: 'Email sent successfully', info };
  } catch (error: any) {
    console.error('Error in /api/send-email:', error);
    setResponseStatus(event, 500);
    return { message: 'Failed to send email', error: error.message };
  }
});

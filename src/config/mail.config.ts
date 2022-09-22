export default {
  from: process.env.MAIL_FROM_ADDRESS,
  name: process.env.MAIL_FROM_NAME,
  mailServer: {
    host: process.env.MAIL_SERVER_HOST || '',
    password: process.env.MAIL_PASSWORD || ''
  }
};

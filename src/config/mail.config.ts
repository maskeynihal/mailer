export default {
  from: process.env.MAIL_FROM_ADDRESS,
  mailServer: {
    host: process.env.MAIL_SERVER_HOST || '',
    password: process.env.MAIL_PASSWORD || ''
  }
};

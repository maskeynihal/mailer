import getSecret from '../strategies/secretStrategies/secretStrategy';

const getMailConfig = async () => {
  const keys = [
    'MAIL_FROM_ADDRESS',
    'MAIL_FROM_NAME',
    'MAIL_SERVER_HOST',
    'MAIL_PASSWORD'
  ];

  const [from, name, host, password] = await Promise.all(keys.map(getSecret));

  const mailConfig = {
    from,
    name,
    mailServer: {
      host,
      password
    }
  };

  return mailConfig;
};

export default getMailConfig;

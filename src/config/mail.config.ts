import getSecret from '../strategies/secretStrategies/secretStrategy';
import storageProvider, {
  MAIL_CONFIG_KEYS
} from '../providers/awsConfigStorage.provider';

const getMailConfig = async () => {
  if (!storageProvider.size) {
    const [from, name, host, password] = await Promise.all(
      Object.keys(MAIL_CONFIG_KEYS).map(getSecret)
    );

    storageProvider.set(MAIL_CONFIG_KEYS.MAIL_FROM_ADDRESS, from);
    storageProvider.set(MAIL_CONFIG_KEYS.MAIL_FROM_NAME, name);
    storageProvider.set(MAIL_CONFIG_KEYS.MAIL_SERVER_HOST, host);
    storageProvider.set(MAIL_CONFIG_KEYS.MAIL_PASSWORD, password);
  }

  const mailConfig = {
    from: storageProvider.get(MAIL_CONFIG_KEYS.MAIL_FROM_ADDRESS),
    name: storageProvider.get(MAIL_CONFIG_KEYS.MAIL_FROM_NAME),
    mailServer: {
      host: storageProvider.get(MAIL_CONFIG_KEYS.MAIL_SERVER_HOST),
      password: storageProvider.get(MAIL_CONFIG_KEYS.MAIL_PASSWORD)
    }
  };

  return mailConfig;
};

export default getMailConfig;

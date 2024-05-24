import {
  GetSecretValueCommand,
  SecretsManagerClient
} from '@aws-sdk/client-secrets-manager';

import mailConfig from '../config/mail.config';

const client = new SecretsManagerClient({ region: mailConfig.awsRegion });

const command = new GetSecretValueCommand({
  SecretId: mailConfig.secretManagerName
});

const getSecretValue = async () => {
  try {
    const data = await client.send(command);

    return JSON.parse(data.SecretString);
  } catch (error) {
    console.error(error);
  }
};

export default getSecretValue;

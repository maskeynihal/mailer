import * as AwsSecret from './awsSecretStrategy';
import * as EnvSecret from './envSecretStrategy';
import type { IMailerSecretKey, IMailerSecretKeys } from './secrets';

async function getSecret(
  key: IMailerSecretKey
): Promise<IMailerSecretKeys[typeof key]> {
  const awsSecret = AwsSecret.getSecrets(key);

  console.log({ awsSecret, key });

  if (awsSecret) {
    return awsSecret;
  }

  const envSecret = EnvSecret.getSecrets(key);

  if (envSecret) {
    return envSecret;
  }
}

export default getSecret;

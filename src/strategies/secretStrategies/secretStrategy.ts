import * as AwsSecret from './awsSecretStrategy';
import * as EnvSecret from './envSecretStrategy';
import type { IMailerSecretKey, IMailerSecretKeys } from './secrets';

async function getSecret(
  key: IMailerSecretKey
): Promise<IMailerSecretKeys[IMailerSecretKey]> {
  const awsSecret = await AwsSecret.getSecrets(key);

  if (awsSecret) {
    return awsSecret;
  }

  const envSecret = EnvSecret.getSecrets(key);

  if (envSecret) {
    return envSecret;
  }
}

export default getSecret;

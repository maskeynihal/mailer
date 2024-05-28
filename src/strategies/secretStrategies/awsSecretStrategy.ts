import { SecretsManager } from '@aws-sdk/client-secrets-manager';

import awsConfig from '../../config/aws.config';
import { IMailerSecretKey, IMailerSecretKeys } from './secrets';

/**
 * Fetches secrets from AWS Secret Manager.
 */
async function fetchSecrets(): Promise<Record<IMailerSecretKey, string>> {
  const client = new SecretsManager({
    region: awsConfig.region
  });

  const data = await client.getSecretValue({
    SecretId: awsConfig.secretManagerName
  });

  try {
    return JSON.parse(data.SecretString || '');
  } catch {
    throw new Error('Invalid secret string');
  }
}

/**
 * Get the secret value from the AWS Secret Manager.
 */
async function getSecrets(key: IMailerSecretKey) {
  const awsSecretValues = await fetchSecrets();

  return awsSecretValues[key] || '';
}

export { getSecrets };

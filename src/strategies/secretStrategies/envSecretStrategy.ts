import type { IMailerSecretKey, IMailerSecretKeys } from './secrets';

function getSecrets(key: IMailerSecretKey): IMailerSecretKeys[typeof key] {
  return process.env[key] || '';
}

export { getSecrets };

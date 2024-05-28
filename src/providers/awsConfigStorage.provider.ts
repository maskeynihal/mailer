export const MAIL_CONFIG_KEYS = {
  MAIL_FROM_ADDRESS: 'MAIL_FROM_ADDRESS' as const,
  MAIL_FROM_NAME: 'MAIL_FROM_NAME' as const,
  MAIL_SERVER_HOST: 'MAIL_SERVER_HOST' as const,
  MAIL_PASSWORD: 'MAIL_PASSWORD' as const
};

type MAIL_CONFIG_KEYS = keyof typeof MAIL_CONFIG_KEYS;

export default new Map<MAIL_CONFIG_KEYS, string>();

import axios from 'axios';

import mailConfig from '../config/mail.config';

import type { IMailNode } from './mail';
import getSecretValue from '../config/secret.config';

const http = axios.create();

export const createPayload = (payload: IMailNode) => {
  return {
    message: payload.body,
    toEmails: payload.to,
    bcc: payload.bcc,
    from: payload.fromName
      ? `${payload.fromName} <${payload.fromAddress}>`
      : payload.fromAddress,
    subject: payload.subject,
    ccEmails: payload.cc
  };
};

export const sendMail = async (payload: IMailNode) => {
  const secretValue = await getSecretValue();

  return await http.post(mailConfig.mailServer.host, createPayload(payload), {
    headers: {
      'x-api-key':
        secretValue['MAIL_SERVER_PASSWORD'] || mailConfig.mailServer.password
    }
  });
};

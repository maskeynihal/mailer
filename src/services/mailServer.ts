import axios from 'axios';

import getMailConfig from '../config/mail.config';

import type { IMailNode } from './mail';

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
  const mailConfig = await getMailConfig();

  return await http.post(mailConfig.mailServer.host, createPayload(payload), {
    headers: {
      'x-api-key': mailConfig.mailServer.password
    }
  });
};

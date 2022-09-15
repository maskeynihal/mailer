import axios from 'axios';

import mailConfig from '../config/mail.config';

import type { IMailNode } from './mail';

const http = axios.create();

export const createPayload = (payload: IMailNode) => {
  return {
    message: payload.body,
    toEmails: payload.to,
    bcc: payload.bcc,
    from: payload.from,
    subject: payload.subject,
    ccEmails: payload.cc
  };
};

export const sendMail = async (payload: IMailNode) => {
  return await http.post(mailConfig.mailServer.host, createPayload(payload), {
    headers: {
      'x-api-key': mailConfig.mailServer.password
    }
  });
};

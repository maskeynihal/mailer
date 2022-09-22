import * as fs from 'fs';
import { render } from 'ejs';

import en from '../lang/en';

import mailConfig from '../config/mail.config';

import { sendMail } from './mailServer';

export interface IMailNode {
  to: Array<string>;
  fromAddress?: string;
  fromName?: string;
  subject: string;
  body?: string;
  bcc?: Array<string>;
  cc?: Array<string>;
}

class Mail {
  private mailNode: IMailNode = {} as IMailNode;

  constructor(mailNode: IMailNode = {} as IMailNode) {
    this.mailNode = mailNode;
  }

  to(tos: Array<string> | string) {
    if (typeof tos === 'string') {
      tos = [tos];
    }

    this.mailNode.to = tos;

    return this;
  }

  cc(ccs: Array<string> | string) {
    if (typeof ccs === 'string') {
      ccs = [ccs];
    }

    this.mailNode.cc = ccs;

    return this;
  }

  bcc(bccs: Array<string> | string) {
    if (typeof bccs === 'string') {
      bccs = [bccs];
    }

    this.mailNode.bcc = bccs;

    return this;
  }

  from(fromAddress: string, fromName?: string) {
    this.mailNode.fromAddress = fromAddress;
    this.mailNode.fromName = fromName;

    return this;
  }

  subject(subject: string) {
    this.mailNode.subject = subject;

    return this;
  }

  view(fileName: string, data: Record<string, unknown>) {
    this.mailNode.body = render(fs.readFileSync(fileName).toString(), {
      dirname: process.cwd(),
      ...data
    });

    return this;
  }

  text(body: string) {
    this.mailNode.body = body;

    return this;
  }

  send() {
    if (!this.mailNode.to.length) {
      throw new Error(en.error.mail.to);
    }

    if (!this.mailNode.subject) {
      throw new Error(en.error.mail.subject);
    }

    if (!this.mailNode.fromAddress) {
      this.from(mailConfig.from, mailConfig.name);
    }

    return sendMail(this.mailNode);
  }
}

export default Mail;

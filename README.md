# Mail Service

This module provides a `Mail` class for sending emails. It uses the `sendMail` function from the `mailServer` module to send the emails.

## Installation

This module requires Node.js and npm. You can install it by running `npm install @maskeynihal/mailer` or `yarn install @maskeynihal/mailer` in the root directory of the project.

## Usage

First, import the `Mail` class:

```typescript
import Mail from './mail';
```

Then, create a new `Mail` object and use its methods to configure the email:

```typescript
const mail = new Mail()
  .to('recipient@example.com')
  .from('sender@example.com', 'Sender Name')
  .subject('Hello, world!')
  .text('This is a test email.');
```

Finally, call the `send` method to send the email:

```typescript
await mail.send();
```

## API

The `Mail` class provides the following methods:

- `to(tos: Array<string> | string)`: Sets the recipients of the email. If `tos` is a string, it's converted to an array with one element.
- `cc(ccs: Array<string> | string)`: Sets the CC recipients of the email. If `ccs` is a string, it's converted to an array with one element.
- `bcc(bccs: Array<string> | string)`: Sets the BCC recipients of the email. If `bccs` is a string, it's converted to an array with one element.
- `from(fromAddress: string, fromName?: string)`: Sets the sender of the email.
- `subject(subject: string)`: Sets the subject of the email.
- `view(fileName: string, data: Record<string, unknown>)`: Sets the body of the email to the rendered contents of an EJS template file.
- `text(body: string)`: Sets the body of the email to a plain text string.
- `send()`: Sends the email. This method is asynchronous and returns a promise.

## Error Handling

The `send` method throws an error if the `to` field is empty or if the `subject` field is not set. It also fetches mail configuration from AWS Secrets Manager and sets the `from` field to the configured sender if it's not already set.

## Localization

Error messages are localized using the `en` module. You can add more languages by creating similar modules and importing them instead of `en`.
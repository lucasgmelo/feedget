import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7901705034c7c7",
    pass: "d07c1cc290d8de",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oie@feedget.com>",
      to: "Lucas <lucasgmelo1203@gmail.com>",
      subject,
      html: body,
    });
  }
}

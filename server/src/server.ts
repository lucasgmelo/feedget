import express from 'express';
import nodemailer from 'nodemailer'

import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7901705034c7c7",
    pass: "d07c1cc290d8de"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot} = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oie@feedget.com>',
    to: 'Lucas <lucasgmelo1203@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n'),
  })

  return res.status(201).send({data: feedback})
})

app.listen(3333, () => {
  console.log('server is running babe')
})
import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'zimetsujo@gmail.com',
    pass: 'fabensrhjksspmzl',
  },
});


export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const { name, email, feedback } = req.body;

	try {
		await transporter.sendMail({
			from: 'tyagishelabh@gmail.com',
			to: 'zimetsujo@gmail.com', //redecom99@gmail.com
			subject: 'New Contact made!',
			html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Feedback: ${feedback}</p>`,
		});
		res.status(200).json({ message: 'Email sent' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error sending email' });
	}
};
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	port: 465,
	secure: true,
	auth: {
		user: 'redecom99@gmail.com',
		pass: 'jmhsdgpiftuhguri',
	},
});


export async function POST(req: NextRequest, res: NextResponse) {
	

	try {
		const { name, company, organisation, email, number, type_of_business, current_turnover , current_marketplace, goals, start_date, duration, budget, heard_about_us, comments } = await req.json();
		await transporter.sendMail({
			from: 'redecom99@gmail.com',
			to: 'redecom99@gmail.com', //redecom99@gmail.com
			subject: 'New Consulting Contact Recieved!',
			html: `
				<p>Name: ${name}</p>
				<p>Company: ${company}</p>
				<p>Organisation: ${organisation}</p>
				<p>Email: ${email}</p>
				<p>Phone Number: ${number}</p>
				<p>Type of Business: ${type_of_business}</p>
				<p>Current Turnover of Business: ${current_turnover}</p>
				<p>Current Marketplacce of Business: ${current_marketplace}</p>
				<p>Goals: ${goals}</p>
				<p>Start Date of Consulting: ${start_date}</p>
				<p>Duration of Consulting: ${duration}</p>
				<p>Budget Range: ${budget}</p>
				<p>Heard about us : ${heard_about_us}</p>
				<p>Additional Comments or Questions: ${comments}</p>
			`,
		});

		await transporter.sendMail({
			from: 'redecom99@gmail.com',
			to: email,
			subject: 'Your Contact Info recieved',
			html: `
			  <p>Hi,</p>
			  <p>Your contact info as been recived, Thanks for taking the initiative!</p>
			  <p>We look forward to speaking with you!</p>
			`,
		});
		  
		return new NextResponse(JSON.stringify({ message: 'Email sent' }));
	} catch (err) {
		console.log(err);
		return new NextResponse(JSON.stringify({ message: 'Error sending email' }));
	}
};
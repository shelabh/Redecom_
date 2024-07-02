import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	port: 465,
	secure: true,
	auth: {
		user: 'zimetsujo@gmail.com',
		pass: 'fabensrhjksspmzl',
	},
});


export async function POST(req: NextRequest, res: NextResponse) {
	

	try {
		const { name, company, organisation, email, number, type_of_consulting, description_of_business, goals, start_date, duration, budget, heard_about_us, comments } = await req.json();
		await transporter.sendMail({
			from: 'tyagishelabh@gmail.com',
			to: 'redecom99@gmail.com', //redecom99@gmail.com
			subject: 'New Consulting Contact Recieved!',
			html: `
				<p>Name: ${name}</p>
				<p>Company: ${company}</p>
				<p>Organisation: ${organisation}</p>
				<p>Email: ${email}</p>
				<p>Phone Number: ${number}</p>
				<p>Type of Consulting: ${type_of_consulting}</p>
				<p>Description of Business: ${description_of_business}</p>
				<p>Goals: ${goals}</p>
				<p>Start Date of Consulting: ${start_date}</p>
				<p>Duration of Consulting: ${duration}</p>
				<p>Budget Range: ${budget}</p>
				<p>Heard about us : ${heard_about_us}</p>
				<p>Additional Comments or Questions: ${comments}</p>
			`,
		});
		return new NextResponse(JSON.stringify({ message: 'Email sent' }));
	} catch (err) {
		console.log(err);
		return new NextResponse(JSON.stringify({ message: 'Error sending email' }));
	}
};
'use client';

import { useRef, useState } from "react";
import React from 'react';

interface FeedbackFormProps {}



const Contact_Form: React.FC<FeedbackFormProps> = () => {
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [sending, setSending] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

	const [formData, setFormData] = useState({
		name: '',
		company: '',
		organisation: '',
		email: '',
		number: '',
		type_of_business: '',
		current_turnover : '',
		current_marketplace: '',
		goals: '',
		start_date: '',
		duration: '',
		budget: '',
		heard_about_us: '',
		comments: ''
	});
	const [countryCode, setCountryCode] = useState('+1');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
		  	...formData,
		  	[e.target.name]: e.target.value,
		});
	};
	const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCountryCode(e.target.value);
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSending(true)
		const combinedPhoneNumber = countryCode + formData.number;
		try {
			const response = await fetch('/api/form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...formData,
					number: combinedPhoneNumber,
				}),
			});
			if(response.ok) {
				console.log("Email sent!");
				setSubmitted(true);
            			setError(false);
				setFormData({ 
					name: '', 
					company: '',
					organisation: '',
					email: '',
					number: '',
					type_of_business: '',
					current_turnover: '',
					current_marketplace: '',
					goals: '',
					start_date: '',
					duration: '',
					budget: '',
					heard_about_us: '',
					comments: ''
				})
				setCountryCode('+1');
				setSending(false)
				setShowMessage(true);
        			setTimeout(() => setShowMessage(false), 5000);
				//You can show a message to the user that the email sent successfully
			} else {
				console.log("Error sending email");
				setError(true);
				setSending(false)
				//You can show a message to the user that an error occurred
			}
		} catch (error) {
			console.log("An error occurred while sending the email");
			setError(true);
			setSending(false)
			//You can show a message to the user that an error occurred
		}
	};

	    
	return (
		<>
		<div className="flex flex-col justify-between gap-5  p-5">
			<div className="text-black text-2xl font-medium">
				Closer Than a Click Away
			</div>
			<form  className="border w-full text-black flex flex-col gap-5   md:p-10 p-5 rounded-lg " onSubmit={handleSubmit}>
				<input
					className="w-full  border-b p-2 focus:outline-none "
					type="text"
					id="name"
					name="name"
					placeholder="Name"
					required
					onChange={handleChange}
					value={formData.name} 
					defaultValue={formData.name}
				/>
				<input
					className="w-full  border-b p-2 focus:outline-none "
					type="text"
					id="company"
					name="company"
					placeholder="Company"
					required
					onChange={handleChange}
					value={formData.company} 
					defaultValue={formData.company}
				/>
				
				<input
					className="w-full  border-b p-2 focus:outline-none "
					type="text"
					id="organisation"
					name="organisation"
					placeholder="Organisation"
					required
					onChange={handleChange}
					value={formData.organisation} 
					defaultValue={formData.organisation}
				/>
				<input
					className="w-full border-b p-2 focus:outline-none "
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					required
					onChange={handleChange}
					value={formData.email} 
					defaultValue={formData.email}
				/>
				<div className="flex flex-row gap-4 items-center">
						<select
							className="w-full border-b p-2 focus:outline-none"
							id="countryCode"
							name="countryCode"
							required
							onChange={handleCountryCodeChange}
							value={countryCode}
							defaultValue={countryCode}
						>
							<option value="+1">+1 (USA)</option>
							<option value="+91">+91 (India)</option>
							<option value="+44">+44 (UK)</option>
							<option value="+61">+61 (Australia)</option>
							<option value="+81">+81 (Japan)</option>
							<option value="+86">+86 (China)</option>
							<option value="+49">+49 (Germany)</option>
							<option value="+33">+33 (France)</option>
							{/* Add more country codes as needed */}
						</select>
						<input
							className="w-full border-b p-2 focus:outline-none "
							type="number"
							id="number"
							name="number"
							placeholder="Number"
							required
							onChange={handleChange}
							value={formData.number}
							defaultValue={formData.number}
						/>
					</div>
				<select
					className="w-full border-b p-2 focus:outline-none"
					id="type_of_business"
					name="type_of_business"
					required
					onChange={handleChange}
					value={formData.type_of_business}
					defaultValue={formData.type_of_business}
				>
					<option value="">Type of Business</option>
					<option value="Agriculture">Agriculture</option>
					<option value="Automobile and auto components">Automobile and auto components</option>
					<option value="Chemicals and petrochemicals">Chemicals and petrochemicals</option>
					<option value="Construction and engineering">Construction and engineering</option>
					<option value="Education">Education</option>
					<option value="Fashion">Fashion</option>
					<option value="FMCG">FMCG</option>
					<option value="Food and beverages">Food and beverages</option>
					<option value="Finance">Finance</option>
					<option value="Health care">Health care</option>
					<option value="Manufacturing">Manufacturing</option>
					<option value="Media">Media</option>
					<option value="Pharmaceutics">Pharmaceutics</option>
					<option value="Retail">Retail</option>
					<option value="Technology">Technology</option>
					<option value="Textile, Apparels and accessories">Textile, Apparels and accessories</option>
					<option value="Transport">Transport</option>
					<option value="Other">Other</option>
				</select>
				<input
					className="w-full border-b p-2 focus:outline-none "
					type="text"
					id="current_turnover"
					name="current_turnover"
					placeholder="Current Turnover of Business/Organisation"
					required
					onChange={handleChange}
					value={formData.current_turnover} 
					defaultValue={formData.current_turnover}
				/>
				<select
					className="w-full border-b p-2 focus:outline-none"
					id="current_marketplace"
					name="current_marketplace"
					required
					onChange={handleChange}
					value={formData.current_marketplace}
					defaultValue={formData.current_marketplace}
				>
					<option value="">Current Marketplace</option>
					<option value="India">India</option>
					<option value="US">US</option>
					<option value="APAC">APAC</option>
					<option value="MENA">MENA</option>
					<option value="AFRICA">AFRICA</option>
					<option value="AMERICAS">AMERICAS</option>
					<option value="EUROPE">EUROPE</option>
					<option value="AUSTRALIA">AUSTRALIA</option>
				</select>
				<textarea
					className="w-full border-b p-2 focus:outline-none "
					id="goals"
					name="goals"
					placeholder="What specific challenges or goals are you looking to address through consulting"
					required
					onChange={handleChange}
					value={formData.goals} 
					defaultValue={formData.goals}
				></textarea>
				<div className="flex flex-col gap-4 ">
					<div>
						<label>
							Preferred Start Date 
						</label>
						<input
							className="w-full border-b p-2 focus:outline-none "
							type="date"
							id="start_date"
							name="start_date"
							placeholder=""
							required
							onChange={handleChange}
							value={formData.start_date} 
							defaultValue={formData.start_date}
						/>
					</div>
					<div>
						<select
							className="w-full border-b p-2 focus:outline-none"
							id="duration"
							name="duration"
							required
							onChange={handleChange}
							value={formData.duration}
							defaultValue={formData.duration}
						>
							<option value="">Estimated Duration</option>
							<option value="1 week">1 week</option>
							<option value="1 month">1 month</option>
							<option value="1 quarter">1 quarter</option>
							<option value="6 months">6 months</option>
							<option value="1 year">1 year</option>
							<option value="2 years">2 years</option>
							<option value="3 years">3 years</option>
							<option value="4 years">4 years</option>
							<option value="5 years">5 years</option>
						</select>
					</div>
				</div>
				<input
					className="w-full border-b p-2 focus:outline-none "
					type="text"
					id="budget"
					name="budget"
					placeholder="Budget Range"
					required
					onChange={handleChange}
					value={formData.budget} 
					defaultValue={formData.budget}
				/>
				<input
					className="w-full border-b p-2 focus:outline-none "
					type="text"
					id="heard_about_us"
					name="heard_about_us"
					placeholder="How did you hear about us"
					required
					onChange={handleChange}
					value={formData.heard_about_us} 
					defaultValue={formData.heard_about_us}
				/>
				<button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-2  py-2 px-4 rounded-lg ">
					{sending ? <>Sending..</> : <>Submit Form</>}
				</button>
			</form>
		</div>
		
		{submitted && showMessage &&
			<div className="absolute right-0 bottom-0 lg:mr-[5vh]  lg:mb-[5vh] p-4 rounded-lg bg-white text-green-600 text-lg font-medium ">
				Your feedback has been sent!  
			</div>
		}
		{error && showMessage &&
			<div className="absolute right-0 bottom-0 lg:mr-[5vh] lg:mb-[5vh] p-4 rounded-lg bg-white text-red-600 text-lg font-medium ">
				An error occurred. Your feedback was not sent!
			</div>
		}
		</>

	)
}

export default Contact_Form
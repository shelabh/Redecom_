'use client';

import { useRef, useState } from "react";

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
		type_of_consulting: '',
		description_of_business: '',
		goals: '',
		start_date: '',
		duration: '',
		budget: '',
		heard_about_us: '',
		comments: ''
	});
	    
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
		  	...formData,
		  	[e.target.name]: e.target.value,
		});
	};
	
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSending(true)
		try {
			const response = await fetch('/api/form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
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
					type_of_consulting: '',
					description_of_business: '',
					goals: '',
					start_date: '',
					duration: '',
					budget: '',
					heard_about_us: '',
					comments: ''
				})
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
			<form  className="border w-full text-black flex flex-col gap-5   p-10 rounded-lg " onSubmit={handleSubmit}>
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
				<input
					className="w-full border-b p-2 focus:outline-none "
					type="text"
					id="type_of_consulting"
					name="type_of_consulting"
					placeholder="Type of Consulting"
					required
					onChange={handleChange}
					value={formData.type_of_consulting} 
					defaultValue={formData.type_of_consulting}
				/>
				<textarea
					className="w-full border-b p-2 focus:outline-none "
					id="description_of_business"
					name="description_of_business"
					placeholder="Brief Description of Business/Organization"
					required
					onChange={handleChange}
					value={formData.description_of_business} 
					defaultValue={formData.description_of_business}
				></textarea>
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
				<div className="flex flex-row gap-4 items-center">
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
						<label>
							Estimated Duration
						</label>
						<input
							className="w-full border-b p-2 focus:outline-none "
							type="text"
							id="duration"
							name="duration"
							required
							onChange={handleChange}
							value={formData.duration} 
							defaultValue={formData.duration}
						/>

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
				<input
					className="w-full border-b p-2 focus:outline-none "
					type="text"
					id="comments"
					name="comments"
					placeholder="Additional Comments or Questions"
					onChange={handleChange}
					value={formData.comments} 
					defaultValue={formData.comments}
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
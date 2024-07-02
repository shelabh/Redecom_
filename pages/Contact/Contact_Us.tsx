'use client';


import Contact_Form from "@/components/Contact_Form";
import React from "react";


const Contact_Us = () => {
	return (
		<div className="w-full bg-white ">
			<div className=" flex flex-row  justify-between max-w-7xl w-full mx-auto gap-16  py-16">
				<div className="flex flex-col    w-full gap-10  rounded-md shadow-lg px-10 py-20 rouned-md bg-gradient-to-b from-indigo-400 to-cyan-400">
					<div className="text-5xl font-medium ">
						Lets Connect and<br/> Create Together!
					</div>
					<div>
						Phone<br/>
						+91 9625472793
					</div>
					<div>
						Email<br/>
						redecom99@gmail.com
					</div>
				</div>
				<div className="w-full ">
					<Contact_Form />
				</div>
			</div>
		</div>
	)
}

export default Contact_Us
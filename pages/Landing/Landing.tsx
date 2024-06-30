'use client';


import React from "react";
import Head from "./Sections/Head";
import Banner from "./Sections/Banner";
import B_Services from "./Sections/B_Services";
import P_Services from "./Sections/P_Services";
import B_Features from "./Sections/B_Features";
import P_Features from "./Sections/P_Features";
import FAQ from "./Sections/FAQ";
import Contact_Banner from "./Sections/Contact_Banner";


const Landing = () => {
	return (
		<>
			<div className="flex flex-col ">
				<Head />
				<Banner />
				<B_Services />
				<B_Features />
				<P_Services />
				<P_Features />
				<FAQ />
				<Contact_Banner />
			</div>
		</>
	)
}

export default Landing
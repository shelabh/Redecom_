'use client';


import React from "react";
import Head from "./Sections/Head";
import Banner from "./Sections/Banner";
import B_Services from "./Sections/B_Services";
import P_Services from "./Sections/P_Services";


const Landing = () => {
	return (
		<>
			<div className="flex flex-col ">
				<Head />
				<Banner />
				<B_Services />
				<P_Services />
			</div>
		</>
	)
}

export default Landing
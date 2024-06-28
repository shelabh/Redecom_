'use client';


import React from "react";
import Head from "./Sections/Head";
import Banner from "./Sections/Banner";


const Landing = () => {
	return (
		<>
			<div className="flex flex-col ">
				<Head />
				<Banner />
			</div>
		</>
	)
}

export default Landing
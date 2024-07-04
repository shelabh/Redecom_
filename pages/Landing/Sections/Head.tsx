'use client';


import React from "react";


const Head = () => {
	return (
		<div  className="bg-[url('/images/bg.png')] bg-center bg-cover bg-black text-white w-full">
			<div className="flex md:flex-row flex-col items-center md:gap-16 gap-8 justify-center h-screen md:max-w-7xl  md:mx-auto">
				<div className="w-full p-5 md:p-0 flex flex-col items-center md:items-start gap-1">
					<div className="text-transparent bg-clip-text bg-gradient-to-b from-pink-600 to-yellow-400 text-md">
						#1 solution for your business
					</div>
					<div className="md:text-8xl text-center md:text-start text-6xl font-bold">
						Business Consulting
					</div>
				</div>
				<div className="w-full p-5 md:p-0 flex flex-col items-center md:items-start md:gap-10 gap-5">
					<div className="md:text-2xl text-center md:text-start">
						We offer innovative solution and techniques based on years of experience working on various companies.
					</div>
					<div>
						<button className="w-48 flex  flex-row items-center justify-between py-3 px-4 bg-gradient-to-l from-amber-500 to-pink-500 rounded-full">
							<span>
								Learn More
							</span>
							<span>
								<img src="/images/right_arrow_white.svg" draggable="false" />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Head
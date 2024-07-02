'use client';


import React from "react";


const Head = () => {
	return (
		<div  className="bg-[url('/images/bg.png')]">
			<div className="flex flex-row items-center gap-16 justify-center h-screen max-w-7xl  mx-auto">
				<div className="w-full flex flex-col gap-1">
					<div className="text-transparent bg-clip-text bg-gradient-to-b from-pink-600 to-yellow-400 text-md">
						#1 solution for your business
					</div>
					<div className="text-8xl font-bold">
						Business Consulting
					</div>
				</div>
				<div className="w-full flex flex-col gap-10">
					<div className="text-2xl">
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
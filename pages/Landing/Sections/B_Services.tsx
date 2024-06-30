'use client'

import React from 'react'


const B_Services = () => {
	return (
		<>
			<div className='flex flex-col items-center gap-10 p-16'>
				<div className='text-3xl font-medium'>
					Our Services
				</div>
				<div className='flex flex-row items-center max-w-7xl  gap-10 mx-auto p-16'>
					<div className='flex flex-col gap-5 w-full'>
						<div className='text-7xl font-semibold'>
							Business Consulting
						</div>
						<div>
							Provide strategic guidance and practical solutions to impact market and revenue share of businesses globally.
						</div>	
						<div>
							<button className="w-48 flex text-black  bg-white flex-row items-center justify-between py-3 px-4  rounded-full">
								<span>
									Get Started
								</span>
								<span className='rounded-full w-6 bg-gradient-to-l from-amber-500 to-pink-500 text-white'>
									-
								</span>
							</button>
						</div>
					</div>
					<div className='flex flex-col gap-10 w-full'>
						<div className='flex flex-row gap-3 '>
							<img src="/" />
							<div>
								Strategic planning and execution to fulfill the core business's short and long-term objectives, through actionable strategies.
							</div>
						</div>
						<div className='flex flex-row gap-3 '>
							<img src="/" />
							<div>
								Discovery workshops on product-market fit, pricing, gap analysis, market analysis to tap into opportunities with a clear business road map.
							</div>
						</div>
						<div className='flex flex-row gap-3 '>
							<img src="/" />
							<div>
								Business model and GTM strategy to scale market and revenue share for the business.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export default B_Services
'use client'

import Link from 'next/link'
import React from 'react'


const B_Services = () => {
	return (
		<>
			<div id="services" className="flex bg-[url('/images/b_services.png')] bg-cover bg-center flex-col items-center gap-10  md:p-16 py-10 bg-black text-white">
				<div className='text-3xl font-medium'>
					Our Services
				</div>
				<div className='flex md:flex-row flex-col items-center md:max-w-7xl  gap-10 md:mx-auto md:p-16 p-5'>
					<div className='flex flex-col gap-5 w-full'>
						<div className='md:text-7xl text-4xl font-semibold'>
							Business Consulting
						</div>
						<div>
							Provide strategic guidance and practical solutions to impact market and revenue share of businesses globally.
						</div>	
						<div>
							<Link href="/contact" >
								<button className="w-48 flex text-black  bg-white flex-row items-center justify-between py-3 px-4  rounded-full">
									<span>
										Get Started
									</span>
									<span className='rounded-full p-1 bg-gradient-to-l from-amber-500 to-pink-500 text-white'>
										<img src="/images/right_arrow_white.svg" draggable="false" />
									</span>
								</button>
							</Link>
						</div>
					</div>
					<div className='flex flex-col gap-10 w-full'>
						<div className='flex flex-row gap-5 items-center '>
							<div className='p-4 rounded-full bg-white flex flex-row justify-center'>
								<img src="/images/b_1.svg" draggable="false" className='w-14' />
							</div>
							<div className=' '>
								Strategic planning and execution to fulfill the core business's short and long-term objectives, through actionable strategies.
							</div>
						</div>
						<div className='flex flex-row gap-5 items-center'>
							<div className='p-4 rounded-full bg-white flex flex-row justify-center'>
								<img src="/images/b_2.svg" draggable="false" className='w-16' />
							</div>
							<div>
								Discovery workshops on product-market fit, pricing, gap analysis, market analysis to tap into opportunities with a clear business road map.
							</div>
						</div>
						<div className='flex flex-row gap-5 items-center'>
							<div className='p-4 rounded-full bg-white flex flex-row  justify-center'>
								<img src="/images/b_3.svg" draggable="false" className='w-10' />
							</div>
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
'use client'

import Link from 'next/link'
import React from 'react'


const P_Services = () => {
	return (
		<>
			<div className='bg-white text-black p-16'>
				<div className='flex flex-row-reverse items-center max-w-7xl  gap-10 mx-auto p-16'>
					<div className='flex flex-col gap-5 w-full items-end'>
						<div className='text-7xl text-right font-semibold'>
							Payment Consulting
						</div>
						<div className='text-right'>
							Provide innovative comprehensive and effective payment solutions that meet the needs and drive business growth.
						</div>	
						<div className=''>
							<Link href="/contact">
								<button className="w-48 flex  border-2 flex-row items-center justify-between py-3 px-4  rounded-full">
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
							<div className='p-4 rounded-full border-2 flex flex-row  justify-center'>
								<img src="/images/b_1.svg" draggable="false" className='w-12' />
							</div>
							<div>
								Strategic planning and execution to fulfill business-specific payment ecosystems through actionable strategies.
							</div>
						</div>
						<div className='flex flex-row gap-5 items-center '>
							<div className='p-4 rounded-full border-2 flex flex-row  justify-center'>
								<img src="/images/p_2.svg" draggable="false" className='w-14' />
							</div>
							<div>
								Handhold domestic and global payment project planning and execution to scale opportunities with a clear sustainable road map.
							</div>
						</div>
						<div className='flex flex-row gap-5 items-center'>
							<div className='p-4 rounded-full border-2 flex flex-row  justify-center'>
								<img src="/images/p_3.svg" draggable="false" className='w-16' />
							</div>
							<div>
								Domain specific business Intelligence, innovation, improvements to increase efficiency, security and user experience for a seemless payment experience.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export default P_Services
'use client'

import Link from 'next/link'
import React from 'react'


const P_Services = () => {
	return (
		<>
			<div className='bg-white text-black md:p-16 py-10'>
				<div className='flex md:flex-row-reverse flex-col items-center md:max-w-7xl  gap-10 md:mx-auto md:p-16 p-5'>
					<div className='flex flex-col gap-5 w-full md:items-end '>
						<div className='md:text-7xl text-4xl md:text-right font-semibold'>
							Business Funding Initiatives
						</div>
						<div className='md:text-right w-full '>
							We ensure the business is ready to proceed to meet the statute funding requirements.
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
						<div className='flex flex-row gap-5 items-start'>
							<div className='p-4 rounded-full border-2 flex flex-row  justify-center'>
								<img src="/images/b_1.svg" draggable="false" className='w-9' />
							</div>
							<div>
								Facilitate Business Loan Process Initiation:  Project Report Preparation, Financial Report Preparation and Pitch Deck Report Preparation.
							</div>
						</div>
						<div className='flex flex-row gap-5 items-start'>
							<div className='p-4 rounded-full border-2 flex flex-row  justify-center'>
								<img src="/images/p_2.svg" draggable="false" className='w-14 ' />
							</div>
							<div>
								Handhold businesses on Document Preparation: Detailed Project Report (DPR), Fund Utilization Report, 5-Year Business Roadmap, 2-Year ROI Calculation, Employment Generation Plan.	 
							</div>
						</div>
						<div className='flex flex-row gap-5 items-start'>
							<div className='p-4 rounded-full border-2 flex flex-row  justify-center'>
								<img src="/images/p_3.svg" draggable="false" className='w-24' />
							</div>
							<div>
							Domain specific business Intelligence, competitive analysis and other statutory business requirements for a faster efficient business: Competitor Analysis (Domain Specific Market R&D), Application Submission to the Department, Resolution of Department Queries, Government approvals, Government certified Patent and filing, Business Trademark / Logo Registration.

							</div>
						</div>
					</div>
				</div>
				<div className=' text-center'>
				If you have any questions or require further clarification, please do contact us.
				</div>
			</div>
		</>
	)
}


export default P_Services
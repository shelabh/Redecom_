'use client'

import React from 'react'


const P_Features = () => {
	return (
		<div className="bg-white text-black bg-[url('/images/p_services.png')] bg-cover bg-center">
			<div className='flex flex-col gap-10 md:max-w-7xl  md:mx-auto md:p-16 p-5'>
				<div className='text-4xl font-medium italic'>
					Features
				</div>
				<div className='grid  md:grid-cols-3 grid-flow-row gap-10'>
					<div className='flex flex-col items-center gap-5'>
						<div className='aspect-video w-full h-[250px]'>
							<img src="/images/business_loan.jpeg" draggable="false" className='w-full h-full object-cover rounded-lg'/>
						</div>
						<span className='text-xl font-medium'>
							business loan pitch deck & financials 
						</span>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<div className='aspect-video w-full h-[250px]'>
							<img src="/images/collateral.jpeg" draggable="false" className='w-full h-full object-cover object-left rounded-lg' />
						</div>
						<span className='text-xl font-medium'>
							collateral free business loans 
						</span>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<div className='aspect-video w-full h-[250px]'>
							<img src="/images/govt.jpeg" draggable="false" className='w-full h-full object-cover rounded-lg' />
						</div>
						<span className='text-xl font-medium text-center'>
							government sponsored udyam & start-up business loans 
						</span>
					</div>

				</div>
			</div>
		</div>
	)
}

export default P_Features;
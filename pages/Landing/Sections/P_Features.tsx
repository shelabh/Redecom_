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
						<img src="/images/digital_payment.png" draggable="false" />
						<span className='text-xl font-medium'>
							digital online payments
						</span>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<img src="/images/payment_planning.png" draggable="false" />
						<span className='text-xl font-medium'>
							payments planning & innovation
						</span>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<img src="/images/advisory.png" draggable="false" />
						<span className='text-xl font-medium text-center'>
							efficient & secure banking and digital payments  advisory
						</span>
					</div>

				</div>
			</div>
		</div>
	)
}

export default P_Features;
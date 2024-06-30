'use client'

import React from 'react'


const P_Features = () => {
	return (
		<div className='bg-white text-black'>
			<div className='flex flex-col gap-10 max-w-7xl  mx-auto p-16'>
				<div className='text-4xl font-medium italic'>
					Features
				</div>
				<div className='grid grid-cols-3 gap-10'>
					<div className='flex flex-col items-center gap-5'>
						<img src="/images/strategic_planning.png" draggable="false" />
						<span className='text-xl font-medium'>
							digital online payments
						</span>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<img src="/images/discovery_workshop.png" draggable="false" />
						<span className='text-xl font-medium'>
							payments planning & innovation
						</span>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<img src="/images/business_model.png" draggable="false" />
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
'use client'

import React from 'react'


const B_Features = () => {
	return (
		<div className="bg-black text-white">
			<div className='flex flex-col  gap-10 md:max-w-7xl md:mx-auto md:p-16 p-5'>
				<div className='text-4xl font-medium italic'>
					Features
				</div>
				<div className='grid md:grid-cols-3 grid-flow-row gap-10'>
					<div className='flex flex-col items-center gap-5'>
						<img src="/images/strategic_planning.png" draggable="false" />
						<span className='text-xl font-medium'>
							strategic planning
						</span>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<img src="/images/discovery_workshop.png" draggable="false" />
						<span className='text-xl font-medium'>
							discovery workshops
						</span>
					</div>
					<div className='flex flex-col items-center gap-5'>
						<img src="/images/business_model.png" draggable="false" />
						<span className='text-xl font-medium text-center'>
							business model, market & revenue advisory
						</span>
					</div>

				</div>
			</div>
		</div>
	)
}

export default B_Features;
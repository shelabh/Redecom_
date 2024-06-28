'use client';

import React from 'react';



const Banner = () => {
	return (
		<>
			<div className='h-80 bg-white text-black w-full flex flex-col gap-5 items-center justify-center'>
				<div className='text-5xl w-1/3 font-medium text-center'>
					Evolutionary Path of Our Consultancy Agency
				</div>
				<div className='w-1/2'>
					We've established a platform for budding enterpreneurs to master the art of intiating and expanding their businesses successfully.
				</div>
				<div>
					<button className="w-48 flex  flex-row items-center justify-between py-3 px-4 bg-gradient-to-l from-amber-500 to-pink-500 rounded-full">
						<span>
							Get Started
						</span>
						<span>
							-
						</span>
					</button>
				</div>
			</div>
		</>
	)
}


export default Banner;
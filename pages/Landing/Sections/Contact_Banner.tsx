'use client'

import React from 'react'


const Contact_Banner = () => {
	return (
		<>
			<div className="  bg-[url('/images/contact_banner.png')] bg-cover h-96 bg-center">
				<div className='bg-gradient-to-r from-amber-500 to-pink-500 h-4 w-full'>

				</div>
				<div className='flex flex-row items-center mt-10  p-20 justify-between max-w-7xl mx-auto'>
					<div className='text-6xl w-full'>
						Book Consultation with Us
					</div>
					<div className='w-full flex flex-row justify-center'>
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

			</div>
		</>
	)
}

export default Contact_Banner
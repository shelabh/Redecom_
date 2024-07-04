'use client'

import Link from 'next/link'
import React from 'react'


const Contact_Banner = () => {
	return (
		<>
			<div className="  bg-[url('/images/contact_banner.png')] bg-cover h-full bg-center bg-black text-white">
				<div className='bg-gradient-to-r from-amber-500 to-pink-500 h-4 w-full'>

				</div>
				<div className='flex md:flex-row flex-col items-center mt-10  p-10 md:p-20  justify-between md:max-w-7xl md:mx-auto md:gap-16 gap-8 '>
					<div className='md:text-6xl text-5xl  text-center md:text-start w-full font-medium'>
						Set up a Consultation.
					</div>
					<div className='w-full flex flex-row md:justify-end justify-center'>
						<Link href="/contact">
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

			</div>
		</>
	)
}

export default Contact_Banner
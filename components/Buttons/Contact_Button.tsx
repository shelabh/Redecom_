'use client'

import React from 'react';
import Link from 'next/link';
const Contact_Button = () => {
	return (
		<>
			<div className=''>
				<Link href="/contact" >
				<button className='m-4 p-1 rounded-full  max-w-sm bg-gradient-to-r from-amber-500 to-pink-500  '>
					<div className='px-4 py-2 w-full bg-black rounded-full  '>
						Contact Us
					</div>		
				</button>
				</Link>
			</div>
		</>
	)
}

export default Contact_Button
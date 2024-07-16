'use client'

import React from 'react'
import Logo from './Logo';

const Footer = () => {
	return (
		<>
			<div className='md:px-16 px-4 pb-8 pt-10 bg-black text-white'>
				<div className=' flex flex-col gap-10 justify-between'>
					<div className='flex flex-row justify-between items-center'>
						<div>
							<Logo />
						</div>
					</div>
					<div className='flex flex-row border-t-gray-500 border-t pt-5 justify-between items-center'>
						<div className='text-sm'>
						Copyright &copy; {new Date().getFullYear()} Redecom. All rights
						reserved.
						</div>
						<div className='flex flex-row gap-2 items-center'>
							<img src="/images/ig.svg" draggable="false" />
							<img src="/images/fb.svg" draggable="false" />
							<img src="/images/x.svg" draggable="false" />
						</div>

					</div>

				</div>
				
			</div>
		</>
	)
}


export default Footer;
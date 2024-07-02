'use client'

import React from 'react'
import Logo from './Logo';

const Footer = () => {
	return (
		<>
			<div className='px-16 pb-8 pt-10'>
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
							<img src="/" />
							<img src="/" />
							<img src="/" />
						</div>

					</div>

				</div>
				
			</div>
		</>
	)
}


export default Footer;
'use client'

import React from 'react';
import Logo from './Logo';
import Contact_Button from './Buttons/Contact_Button';
import {  usePathname } from 'next/navigation';




const Navbar = () => {

	const pathname = usePathname()
	const contact = pathname === '/contact'
	return (
		<>
			<div className={contact ? " bg-black/80 backdrop-blur-2xl px-16 py-3 flex flex-row justify-between  items-center w-full " : " bg-black/80 backdrop-blur-2xl px-16 py-3 flex flex-row justify-between  items-center w-full fixed"}>
				<div>
					<Logo />	
				</div>
				<div className="flex text-sm flex-row items-center gap-5">
					<div className='flex flex-row gap-3'>
						About Us
					</div>
					<div>
						Services
					</div>
					<div>
						Reviews
					</div>
				</div>
				<div>
					<Contact_Button />
				</div>
			</div>
		</>
	)
}

export default Navbar
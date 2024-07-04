'use client'

import React from 'react';
import Logo from './Logo';
import Contact_Button from './Buttons/Contact_Button';
import {  usePathname } from 'next/navigation';
import Link from 'next/link';




const Navbar = () => {

	const pathname = usePathname()
	const contact = pathname === '/contact'
	return (
		<>
			<div className={contact ? " bg-black/80 backdrop-blur-2xl md:px-16 px-5 py-3 flex flex-row justify-between text-white items-center w-full " : " bg-black/80 backdrop-blur-2xl text-white md:px-16 px-5 py-3 flex flex-row justify-between  items-center w-full md:fixed"}>
				<div>
					<Logo />	
				</div>
				<div className="md:flex hidden  text-sm flex-row items-center gap-5">
					<div className='flex flex-row gap-3'>
						About Us
					</div>
					<Link href="#services">
						Services
					</Link>
					<Link href="#reviews">
						Reviews
					</Link>
					
				</div>
				<div>
					<Contact_Button />
				</div>
			</div>
		</>
	)
}

export default Navbar
'use client'

import Link from 'next/link';
import React from 'react';


const Logo = () => {
	return (
		<>
			<Link href="/">
			<div className=''>
				<img src="/images/redecom_logo.png" draggable="false" alt="logo" width="120" />
			</div>
			</Link>
		</>
	)
}

export default Logo

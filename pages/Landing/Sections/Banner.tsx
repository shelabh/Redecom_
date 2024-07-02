'use client';

import React from 'react';



const Banner = () => {
	return (
		<>
			<div className="h-full bg-white  bg-[url('/images/banner.png')] bg-cover bg-center  text-black w-full flex flex-col gap-5 items-center justify-center py-32">
				<div className='text-5xl w-1/2 font-semibold text-center'>
					Evolutionary Path of Our Consultancy Agency
				</div>
				<div className='w-1/3 text-center'>
					We have established a platform for budding enterpreneurs to master the art of intiating and expanding their businesses successfully.
				</div>
			</div>
		</>
	)
}


export default Banner;
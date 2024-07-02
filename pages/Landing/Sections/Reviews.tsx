'use client'

import React from 'react';

const Reviews = () => {
	return (
		<>
			<div id="reviews" className='flex flex-col max-w-7xl mx-auto p-28 gap-10'>
				<div className='text-3xl font-medium'>
					Early Reviews
				</div>
				<div className='flex flex-row items-center gap-10'>
					<div className=' text-black p-8 bg-white rounded-md shadow-xl shadow-white/50 flex flex-col items-end gap-5'>
						<div>
							REDECOM comes with a growth mindset and a positive attitude to teaching and learning. They was able to articulate the problems we are solving, with our product, and it's market in no time. Validating our GTM strategy from an experienced team of professionals like Mr.Gooha, double-downed confidence levels in our thought process. I look forward to collaborate with Deb as opportunities unfold.
						</div>
						<div className='text-slate-500'>
							Sujeet Kanuganti Founder CEO  @ Aspecto 
						</div>
					</div>
					<div className=' text-black p-8 bg-white rounded-md shadow-xl shadow-white/50 flex flex-col items-end gap-5'>
						<div>
							REDECOM mentored us in developing a cracker of a product/solution on our platform as the ultimate value proposition for the B2B-merchant business. Bundled, reconciliation smart inventory and CRM management tools along with Pazybill hardware as the value we bring for the merchant business. Compelling digital bills reconciliation, finance management tools on the Pazybill APP for that merchant customer, APP with build-in campaign, loyalty, and redemption management capabilities. REDECOM advised us on developing the market pitch, building the brand GTM strategies, ATL, BTL, digital marketing, SEO, and SEM for the Indian marketplace.
						</div>
						<div className='text-slate-500'>
							Jayakumar Kandasamy Founder & CEO @ OnePe
						</div>
					</div>

				</div>

			</div>
		</>
	)
}


export default Reviews;
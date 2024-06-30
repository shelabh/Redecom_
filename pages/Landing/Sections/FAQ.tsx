'use client'

import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";


const FAQ = () => {
	const defaultContent1 =
    "Consultants bring specialized knowledge and skills that might not be available in-house. Extensive experience in their field, providing high-level of insights and solutions to business pain points.";

    const defaultContent2 =
    "Detailed analysis of the current state of the business, including strengths, weaknesses, opportunities, and threats. Identification of gaps between the current state and desired future state, highlighting areas for improvement.";
    
	const defaultContent3 =
	"The duration of a project with a business consultant and the timeframe for measuring results can vary significantly based on several factors, including the scope of the project, the complexity of the issues being addressed, and the specific goals of the engagement.";	
    return (
		<div className='bg-white'>
			<div className='flex  flex-col gap-10 p-16 items-center max-w-4xl mx-auto w-full '>
				<div className="text-2xl  text-black font-medium">
					Frequently Asked Questions
				</div>
			<Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="What is the advantage of hiring
a consultant instead of doing it
in-house?" className='text-slate-500'>
        {defaultContent1}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" className='text-slate-500' title="What kind of deliverables are to be expected?">
        {defaultContent2}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" className='text-slate-500' title="How long will the project take
and how long until results can be
measured?">
        {defaultContent3}
      </AccordionItem>
    </Accordion>
				
			</div>
		</div>
	)
}


export default FAQ;
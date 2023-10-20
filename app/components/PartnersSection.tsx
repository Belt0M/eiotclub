import Image from 'next/image'
import { FC } from 'react'
import { companiesData } from '../data/companies.data'

const PartnersSection: FC = () => {
	return (
		<section className='md:px-44 px-4 h-[50vh] flex gap-4 pb-8 bg-lightGray flex-col items-center'>
			<h1 className='text-[2rem] mt-14 font-bold'>Worldwide Partners</h1>
			<div className='grid md:grid-cols-5 grid-cols-3 gap-6 mt-6 w-full'>
				{companiesData.map((el, index) => (
					<div
						key={index}
						className='relative rounded-3xl md:gap-y-8 md:h-[4.5rem] h-10 gap-y-16'
					>
						<Image src={el} alt={`Company ${index}`} fill />
					</div>
				))}
			</div>
		</section>
	)
}

export default PartnersSection

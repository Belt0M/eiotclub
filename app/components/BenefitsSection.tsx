import { FC } from 'react'
import { benefitsData } from '../data/benefits.data'

const BenefitsSection: FC = () => {
	return (
		<section className='md:px-44 px-4 md:h-[25vh] h-[40vh] bg-lightGray py-10 gap-8 justify-between items-center md:flex grid grid-cols-2 text-center'>
			{benefitsData.map(el => (
				<div
					className='flex justify-center items-center flex-col gap-6'
					key={el.name}
				>
					<span className='text-primary text-5xl'>{el.icon}</span>
					<span>{el.name}</span>
				</div>
			))}
		</section>
	)
}

export default BenefitsSection

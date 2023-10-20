import { FC } from 'react'
import Button from '../atoms/Button'
import { supportDate } from '../data/support.date'

const SupportSection: FC = () => {
	return (
		<section className='md:px-44 px-4 md:h-[60vh] h-[70vh] flex gap-4 pb-8 md:flex-row flex-col'>
			{supportDate.map(el => (
				<div
					key={el.name}
					className={`flex-1 flex h-full rounded-3xl bg-cover justify-center md:px-14 px-4 flex-col`}
					style={{ backgroundImage: `url(${el.img})` }}
				>
					<p className='md:text-lg text-base'>{el.desc}</p>
					<h1 className='md:text-2xl text-xl font-bold'>{el.name}</h1>
					<Button
						name={el.btn}
						fontSize='text-[.85rem] '
						py='py-2.5 '
						width='w-48 '
					/>
				</div>
			))}
		</section>
	)
}

export default SupportSection

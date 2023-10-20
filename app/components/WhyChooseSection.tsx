import Image from 'next/image'
import { FC } from 'react'
import { whyChooseData } from '../data/whychoose.data'

const WhyChooseSection: FC = () => {
	return (
		<section className='md:px-44 px-4 md:h-[90vh] h-[105vh] bg-white py-10'>
			<div className='flex md:flex-row flex-col rounded-3xl bg-lightGray h-full overflow-hidden items-center'>
				<div className='md:w-1/2 w-full md:h-full h-2/3 md:py-20 md:pl-20 md:pr-10 p-6'>
					<h1 className='md:text-[2rem] text-2xl font-bold md:mt-0 mt-4'>
						Why Choose EIOTCLUB
					</h1>
					<div className='mt-10 '>
						{whyChooseData.map(el => (
							<div key={el.name} className='flex gap-4 h-1/3 items-center mt-6'>
								<div className='relative h-16 w-16 '>
									<Image src={el.img} alt={el.name} fill />
								</div>
								<div className='flex flex-col gap-4 w-4/5'>
									<h4 className='md:text-lg text-base font-bold'>{el.name}</h4>
									<p className='md:text-base text-sm'>{el.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='md:w-1/2 w-full relative md:h-full h-1/3'>
					<Image
						src='https://www.eiotclub.com/cdn/shop/files/PART5-02-720x690-0424_ddf96475-e5bb-4125-82ad-a6bca3bf2430.jpg?v=1683186502&width=900'
						alt='EIOTClub Card'
						fill
					/>
				</div>
			</div>
		</section>
	)
}

export default WhyChooseSection

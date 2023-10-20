import Image from 'next/image'
import { FC } from 'react'
import Button from '../atoms/Button'
import { networkData } from '../data/network.data'

const NetworkSection: FC = () => {
	return (
		<section className='px-40 h-[95svh] text-center'>
			<h1 className='text-[2rem] mt-14 font-bold'>Shop by Network</h1>
			<p className='mt-3 text-lg'>
				Finding the perfect prepaid SIM card for your network
			</p>
			<div className='flex justify-between mt-8'>
				{networkData.map(item => (
					<div
						key={item.name}
						className='rounded-3xl overflow-hidden bg-lightGray shadow-md'
					>
						<Image src={item.img} alt={item.name} width={380} height={250} />
						<div className='flex flex-col items-center pb-6 pt-4'>
							<h2 className='mt-3 text-2xl font-bold'>{item.name}</h2>
							<p className='text-lg mt-2'>{item.desc}</p>
							<Button name='Shop Now' fontSize='text-sm ' py='py-2.5 ' />
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default NetworkSection

'use client'
import Image from 'next/image'
import { FC } from 'react'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../atoms/Button'
import { sliderData } from '../data/slider.data'

const Slider: FC = () => {
	return (
		<section className='h-[85vh]'>
			<h1 className=' pl-44 text-3xl'>Shop by Device</h1>
			<Swiper
				slidesPerView={4.3}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				spaceBetween={30}
				modules={[FreeMode, Pagination]}
				className='mySwiper mt-6 h-[59vh]'
			>
				{sliderData.map(el => (
					<SwiperSlide key={el.name}>
						<div className='relative flex flex-col justify-end w-full h-full p-7'>
							<Image
								src={el.img}
								alt={el.name}
								fill
								className='absolute inset-0'
							/>
							<h5 className='text-lg text-white z-10'>{el.name}</h5>
							<Button name='Shop Now' fontSize='text-[.85rem] ' py='py-2.5 ' />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Slider

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { guidesData } from '../data/guides.data'

const GuidesSlider: FC = () => {
	return (
		<section className='h-[58vh] pb-8'>
			<div className='pl-44 flex gap-6 items-center'>
				<h1 className='text-3xl'>Buying Guides</h1>
				<Link
					href='/'
					className=' pt-1 text-primary hover:brightness-105 transition'
				>
					All Blog
				</Link>
			</div>
			<Swiper
				slidesPerView={3.5}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				spaceBetween={30}
				modules={[FreeMode, Pagination]}
				className='mySwiper mt-6 h-4/5'
			>
				{guidesData.map(el => (
					<SwiperSlide key={el.desc}>
						<div className='relative flex flex-col justify-start overflow-hidden rounded-2xl w-full h-full'>
							<Image
								src={el.img}
								alt={el.desc}
								fill
								className='absolute inset-0 z-10'
							/>
							<div
								className='z-10 p-8 pb-10'
								style={{
									background:
										'linear-gradient(rgba(95, 206, 139, 1) 70%, rgba(95, 206, 139, .7), rgba(95, 206, 139, 0))',
								}}
							>
								<p className='text-midGray font-bold text-xs'>{el.date}</p>
								<h5 className='text-white'>{el.desc}</h5>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default GuidesSlider

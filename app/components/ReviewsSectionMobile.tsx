'use client'
import { useState } from 'react'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { reviewsData } from '../data/review.data'
import ReviewItemMobile from './ReviewItemMobile'

const ReviewsSectionMobile = () => {
	const [active, setActive] = useState<string>(reviewsData[0].name)

	const handleHover = (name: string) => {
		setActive(name)
	}

	return (
		<section className='md:px-44 md:hidden px-4 flex flex-col gap-4 justify-center items-center h-50vh bg-lightGray'>
			<h1 className='mt-12 text-2xl font-bold'>Recommended By</h1>
			<Swiper
				slidesPerView={1.2}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				spaceBetween={30}
				modules={[FreeMode, Pagination]}
				className='mySwiper mt-6 h-full w-full p-4'
			>
				{reviewsData.map((item, index) => (
					<SwiperSlide key={item.review}>
						<ReviewItemMobile
							data={item}
							active={active}
							onHover={handleHover}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default ReviewsSectionMobile

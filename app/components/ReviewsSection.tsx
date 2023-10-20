'use client'
import { useState } from 'react'
import { reviewsData } from '../data/review.data'
import ReviewItem from './ReviewItem'

const ReviewsSection = () => {
	const [active, setActive] = useState<string>(reviewsData[0].name)

	const handleHover = (name: string) => {
		setActive(name)
	}

	return (
		<section className='md:px-44 px-4 md:flex hidden flex-col gap-4 justify-center items-center h-[55vh] bg-lightGray'>
			<h1 className='text-3xl font-bold'>Recommended By</h1>
			<div className='flex gap-4 mt-3'>
				{reviewsData.map((item, index) => {
					if (!index) {
						return (
							<ReviewItem
								key={item.review}
								data={item}
								active={active}
								onHover={handleHover}
							/>
						)
					}
					return (
						<ReviewItem
							key={item.review}
							data={item}
							active={active}
							onHover={handleHover}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default ReviewsSection

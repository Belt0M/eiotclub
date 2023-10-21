import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import Button from '../atoms/Button'
import { IReview } from '../types/IReview'

interface Props {
	data: IReview
	active: string
	onHover: (name: string) => void
}

const ReviewItem: FC<Props> = ({ data, active, onHover }) => {
	const isActive = active === data.name

	return (
		<div className='flex' onMouseEnter={() => onHover(data.name)}>
			<Image
				src={data.img}
				alt={data.name}
				width={170}
				height={300}
				className={clsx(
					isActive ? 'rounded-tl-xl rounded-bl-xl ' : 'rounded-xl',
					' transition-all cursor-pointer min-w-[11rem]'
				)}
			/>
			<div
				className={clsx(
					isActive ? 'flex flex-[2]' : 'flex-[0] hidden',
					'bg-white rounded-tr-xl rounded-br-xl flex-col justify-between py-5 px-6 transition-all duration-500 max-h-[256px] origin-top'
				)}
			>
				<div>
					<h3 className='text-lg font-bold'>{data.name}</h3>
					<p className='mt-1 text-base max-h-[6rem] overflow-y-auto'>
						{data.review}
					</p>
				</div>
				<div className='p-2 mb-0 flex justify-between gap-3 items-center overflow-hidden'>
					<Image
						src={data.productImg}
						alt={data.name}
						width={60}
						height={150}
					/>
					<span className='max-h-4'>{data.productName}</span>
					<Button
						name='Shop Now'
						py='py-2.5 '
						fontSize='text-[.85rem] '
						width='w-60 '
						mt='mt-0 '
					/>
				</div>
			</div>
		</div>
	)
}

export default ReviewItem

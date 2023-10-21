import Image from 'next/image'
import { FC } from 'react'
import Button from '../atoms/Button'
import { IReview } from '../types/IReview'

interface Props {
	data: IReview
	active: string
	onHover: (name: string) => void
}

const ReviewItemMobile: FC<Props> = ({ data, active, onHover }) => {
	const isActive = active === data.name

	return (
		<div className='flex flex-col' onMouseEnter={() => onHover(data.name)}>
			<div
				className={
					'relative overflow-hidden rounded-tl-xl rounded-tr-xl cursor-pointer h-80 w-full'
				}
			>
				<Image src={data.img} alt={data.name} fill />
			</div>
			<div
				className={
					'flex flex-[2] bg-white rounded-tr-xl rounded-br-xl flex-col justify-between py-5 px-6 '
				}
			>
				<div>
					<h3 className='text-lg font-bold'>{data.name}</h3>
					<p className='mt-1 text-base max-h-[6rem] overflow-y-auto'>
						{data.review}
					</p>
				</div>
				<div className='p-2 mb-0 flex flex-col justify-between gap-3 items-center overflow-hidden'>
					<div className='relative w-1/3 h-20'>
						<Image src={data.productImg} alt={data.name} fill />
					</div>
					<span className='max-h-7 md:max-h-full overflow-hidden'>
						{data.productName}
					</span>
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

export default ReviewItemMobile

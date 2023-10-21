import { FC } from 'react'
import Button from '../atoms/Button'

const ExpSection: FC = () => {
	return (
		<section className='md:px-40 px-4 h-[34.5rem] bg-lightGray bg-banner1 bg-cover'>
			<div className='h-full flex justify-center flex-col'>
				<h1 className='text-[2.5rem] font-semibold'>
					Experience seamless connectivity
				</h1>
				<p className='text-lg'>
					Lightning-fast signal strength for a smarter, more efficient life
				</p>
				<Button name='Learn more' />
			</div>
		</section>
	)
}

export default ExpSection

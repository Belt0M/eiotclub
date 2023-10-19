import { NextPage } from 'next'
import Button from './atoms/Button'

const Home: NextPage = () => {
	return (
		<main>
			<section className='px-40 h-[34.5rem] bg-lightGray bg-banner1 bg-cover'>
				<div className='h-full flex justify-center flex-col'>
					<h1 className='text-[2.5rem] font-semibold'>
						Experience seamless connectivity
					</h1>
					<p className='text-lg'>
						Lightning-fast signal strength for a smarter, more efficient life
					</p>
					<Button />
				</div>
			</section>
			<section className='h-16 bg-banner2 bg-cover'></section>
		</main>
	)
}

export default Home

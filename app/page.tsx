import { NextPage } from 'next'
import Image from 'next/image'
import 'swiper/css'
import Button from './atoms/Button'
import ExpSection from './components/ExpSection'
import Footer from './components/Footer'
import GuidesSlider from './components/GuidesSlider'
import NetworkSection from './components/NetworkSection'
import ReviewsSection from './components/ReviewsSection'
import Slider from './components/Slider'
import VideosSection from './components/VideosSection'
import { benefitsData } from './data/benefits.data'
import { companiesData } from './data/companies.data'
import { supportDate } from './data/support.date'
import { whyChooseData } from './data/whychoose.data'

const Home: NextPage = () => {
	return (
		<main>
			<ExpSection />
			<section className='h-16 bg-banner2 bg-cover'></section>
			<NetworkSection />
			<Slider />
			<section className='px-44 h-[60vh] flex gap-4 pb-8'>
				{supportDate.map(el => (
					<div
						key={el.name}
						className={`flex-1 flex h-full rounded-3xl bg-cover justify-center px-14 flex-col`}
						style={{ backgroundImage: `url(${el.img})` }}
					>
						<p className='text-lg'>{el.desc}</p>
						<h1 className='text-2xl font-bold'>{el.name}</h1>
						<Button
							name={el.btn}
							fontSize='text-[.85rem] '
							py='py-2.5 '
							width='w-48 '
						/>
					</div>
				))}
			</section>
			<ReviewsSection />
			<VideosSection />
			<section className='px-44 h-[50vh] flex gap-4 pb-8 bg-lightGray flex-col items-center'>
				<h1 className='text-[2rem] mt-14 font-bold'>Worldwide Partners</h1>
				<div className='grid grid-cols-5 gap-6 mt-6 w-full'>
					{companiesData.map((el, index) => (
						<div
							key={index}
							className='relative rounded-3xl gap-y-8 h-[4.5rem]'
						>
							<Image src={el} alt={`Company ${index}`} fill />
						</div>
					))}
				</div>
			</section>
			<section className='px-44 h-[90vh] bg-white py-10'>
				<div className='flex rounded-3xl bg-lightGray h-full overflow-hidden'>
					<div className='w-1/2 h-full py-20 pl-20 pr-10'>
						<h1 className='text-[2rem] font-bold'>Why Choose EIOTCLUB</h1>
						<div className='mt-10 '>
							{whyChooseData.map(el => (
								<div
									key={el.name}
									className='flex gap-4 h-1/3 items-center mt-6'
								>
									<div className='relative h-16 w-16 '>
										<Image src={el.img} alt={el.name} fill />
									</div>
									<div className='flex flex-col gap-4 w-4/5'>
										<h4 className='text-lg font-bold'>{el.name}</h4>
										<p>{el.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='w-1/2 relative h-full'>
						<Image
							src='https://www.eiotclub.com/cdn/shop/files/PART5-02-720x690-0424_ddf96475-e5bb-4125-82ad-a6bca3bf2430.jpg?v=1683186502&width=900'
							alt='EIOTClub Card'
							fill
						/>
					</div>
				</div>
			</section>
			<GuidesSlider />
			<section className='px-44 h-[25vh] bg-lightGray py-10 flex gap-8 justify-between items-center'>
				{benefitsData.map(el => (
					<div
						className='flex justify-center items-center flex-col gap-6'
						key={el.name}
					>
						<span className='text-primary text-5xl'>{el.icon}</span>
						<span>{el.name}</span>
					</div>
				))}
			</section>
			<Footer />
		</main>
	)
}

export default Home

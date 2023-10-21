import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import Button from '../atoms/Button'
import { footerData } from '../data/footer.data'
import { networksIcons } from '../data/soc-net-icons.data'

const Footer: FC = () => {
	return (
		<footer className='md:px-44 px-4 md:h-[80vh] h-auto bg-black pt-20 p-5 text-white'>
			<div className='flex gap-8 justify-between'>
				<div className='flex justify-between md:flex-row flex-col gap-14'>
					<div className='flex-[3]'>
						<h1 className='text-2xl mb-5'>SIGN UP AND SAVE</h1>
						<p>
							Subscribe to get special offers, free giveaways, and
							once-in-a-lifetime deals.
						</p>
						<div className='flex gap-3 items-center mt-6'>
							<input
								type='text'
								placeholder='Enter your email'
								className='w-2/3 focus:outline-none rounded-full bg-white text-black px-4 placeholder:text-midGray focus:border-opacity-80 border-transparent border-[.2rem] focus:border-primary py-[.55rem]'
							/>
							<Button
								name='Subscribe'
								mt='0 '
								width='w-32 '
								fontSize='text-sm '
								py='py-[.9rem] '
							/>
						</div>
						<div className='flex gap-3 text-white text-[1.7rem] mt-4'>
							{networksIcons.map(el => (
								<Link href='/' key={el.name}>
									{el.icon}
								</Link>
							))}
						</div>
					</div>
					{footerData.map(el => (
						<div className='flex-1.2 flex flex-col' key={el.title}>
							<h1 className='uppercase text-2xl mb-7 md:border-none border-t border-b py-3 border-opacity-40 md:p-0 px-2 border-lightGray'>
								{el.title}
							</h1>
							{el.items.map(item => (
								<Link href='/' key={item} className='mb-3 md:px-0 px-2'>
									{item}
								</Link>
							))}
						</div>
					))}
					<div className='flex-[1.4]'>
						<h1 className='uppercase text-2xl mb-7 md:border-none border-t border-b py-3 border-opacity-40 md:p-0 px-2 border-lightGray'>
							Contact
						</h1>
						<div className='md:block grid grid-cols-2 md:p-0 p-2'>
							<div className='flex gap-2 mb-2'>
								<IoChatboxEllipsesOutline className='text-[2.2rem]' />
								<div>
									<Link
										href='/'
										className='relative before:w-0 before:h-0.5 before:duration-500 before:bg-white before:absolute before:bottom-0 before:left-0 pb-1 hover:before:w-full before:transition-all'
									>
										Live Chat
									</Link>
									<h5 className='mt-2 mb-2'>Monday to Sunday</h5>
									<h6 className='text-darkGray text-sm'>7*24h</h6>
								</div>
							</div>
							<div className='flex gap-2 mb-2'>
								<AiOutlineMail className='text-[2.2rem]' />
								<div>
									<Link
										href='/'
										className='relative before:w-0 before:h-0.5 before:bg-white before:absolute before:bottom-0 before:left-0 pb-1 hover:before:w-full before:transition-all before:duration-500 '
									>
										Email Us
									</Link>
									<h6 className='text-darkGray text-sm mt-2.5'>
										info@eiotclub.com
									</h6>
								</div>
							</div>
							<div className='flex gap-2 mb-2'>
								<HiOutlineDevicePhoneMobile className='text-[2.2rem]' />
								<div className='mt-1.5'>
									<Link
										href='/'
										className='relative before:w-0 before:h-0.5 before:bg-white before:absolute before:bottom-0 before:left-0 pb-1 hover:before:w-full before:transition-all before:duration-500'
									>
										APP Download
									</Link>
								</div>
							</div>
						</div>
						<div className='md:block flex items-center justify-center'>
							<div className='relative w-[10rem] h-12 mt-4 ml-2.5 p-3 py-6 rounded-md border-2 border-white border-opacity-50'>
								<Link href='/'>
									<Image
										src='https://lacountylibrary.org/wp-content/uploads/2018/05/app-store-badge-apple.png'
										alt='Download on the AppStore'
										fill
									/>
								</Link>
							</div>
							<div className='relative w-44 md:h-20 h-[4.7rem] md:mt-2 mt-4'>
								<Link href='/'>
									<Image
										src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
										alt='Download on the AppStore'
										fill
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-6 flex md:flex-row flex-col-reverse items-center justify-between'>
				<span className='text-xs'>© 2023 Eiotclub All Rights Resvered.</span>
				<div className='relative md:w-2/5 w-full h-12'>
					<Image
						alt='Cards'
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_ZQ2qS1Lwfk4nH9-ortOuuSinMlWzzEBBPfFZmlzZ0I_7KuO'
						fill
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer

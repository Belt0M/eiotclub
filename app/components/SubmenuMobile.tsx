import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { navbarData } from '../data/navbar.data'

interface Props {
	onClick: () => void
}

const SubmenuMobile: FC<Props> = ({ onClick }) => {
	const [currentSub, setCurrentSub] = useState<string>('')

	const handleClick = (name: string) => {
		if (name === currentSub) {
			setCurrentSub('')
		} else {
			setCurrentSub(name)
		}
	}

	return (
		<div className='fixed inset-0 bg-dark bg-opacity-40 flex justify-end'>
			<div className='w-[90%] h-full bg-white'>
				<AiOutlineClose
					className='absolute top-6 right-6 text-dark text-xl hover:scale-110 transition cursor-pointer'
					onClick={onClick}
				/>
				<nav className='flex flex-col p-8 py-24 gap-4 list-none overflow-y-auto max-h-[100vh]'>
					{navbarData.map((item, index) => (
						<li key={item.name} className='cursor-pointer'>
							<h2
								className='flex items-center justify-between font-bold text-xl py-4 border-b border-dark border-opacity-20'
								onClick={() => handleClick(item.name)}
							>
								<span>{item.name}</span>
								{index !== 2 && (
									<MdOutlineKeyboardArrowDown
										className={currentSub === item.name && 'rotate-180'}
									/>
								)}
							</h2>
							{currentSub === item.name && index !== 2 && (
								<div>
									<ul className='list-none flex flex-col mt-2'>
										{navbarData[index].subItems?.map(el => (
											<Link href='/' key={el.subName}>
												<li className='py-2 px-0.5 font-semibold'>
													{el.subName}
												</li>
											</Link>
										))}
									</ul>
									<div className='flex gap-6 flex-col items-center'>
										{navbarData[index].subItems?.map(item => {
											if (item.img) {
												return (
													<Link
														key={item.img}
														href='/'
														className='flex flex-col items-center'
													>
														<Image
															src={item.img}
															width={225}
															height={150}
															alt={item.subName}
														/>
														<p className='text-lg font-semibold mt-3'>
															{item.subName}
														</p>
													</Link>
												)
											}
										})}
									</div>
								</div>
							)}
						</li>
					))}
					<li className='cursor-pointer'>
						<Link
							href='/'
							className='flex items-center justify-between font-bold text-xl py-4 border-b border-dark border-opacity-20'
						>
							<span>Log in</span>
						</Link>
					</li>
				</nav>
			</div>
		</div>
	)
}

export default SubmenuMobile

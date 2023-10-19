import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { INavbar } from '../types/INavbar'

interface Props {
	data: INavbar
}

const Submenu: FC<Props> = ({ data }) => {
	return (
		<div className='flex px-44 pt-10 fixed left-0 top-24 w-full bg-white h-96 shadow-md justify-between'>
			<ul className='list-none flex flex-col'>
				{data.subItems?.map(item => (
					<Link href='/' key={item.subName}>
						<li className='relative w-auto p-1 m-1.5 text-lg font-semibold before:absolute before:h-[0.1rem] before:bottom-0 before:bg-dark before:w-0 hover:before:w-full before:transition-all cursor-pointer before:duration-500'>
							{item.subName}
						</li>
					</Link>
				))}
			</ul>
			<div className='flex gap-4 justify-center'>
				{data.subItems?.map(item => {
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
								<p className='text-lg font-semibold mt-3'>{item.subName}</p>
							</Link>
						)
					}
				})}
			</div>
		</div>
	)
}

export default Submenu

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { TfiUser } from 'react-icons/tfi'
import { navbarData } from '../data/navbar.data'
import Submenu from './Submenu'

import { useRouter } from 'next/navigation'
import { useOutsideClick } from '../hooks/useOutsideClick'
import ContextMenu from './ContextMenu'

const Navbar: FC = () => {
	const [currentNav, setCurrentNav] = useState<string>('')
	const router = useRouter()

	const ref = useOutsideClick(() => {
		setCurrentNav('')
	})

	const handleClick = (name: string) => {
		if (name === navbarData[2].name) {
			router.push('/')
		} else if (currentNav === name) {
			setCurrentNav('')
		} else {
			setCurrentNav(name)
		}
	}

	return (
		<header>
			<section className='bg-dark flex justify-center py-1.5 text-white text-base'>
				Free shipping and returns
			</section>
			<section
				ref={ref}
				className='relative flex justify-between items-center bg-white mx-40 py-4'
			>
				<Link href='/'>
					<Image
						alt='Logo Image'
						src='https://www.eiotclub.com/cdn/shop/files/EIOTCLUB-LOGO2-600x85-0504.png?v=1683165137&width=1200'
						width={140}
						height={40}
					/>
				</Link>
				<nav className='flex items-center gap-4 list-none'>
					{navbarData.map(item => (
						<li
							key={item.name}
							onClick={() => handleClick(item.name)}
							className='cursor-pointer'
						>
							{item.name}
						</li>
					))}
				</nav>
				<div className='flex items-center gap-6 text-xl'>
					<Link href='/'>
						<TfiUser />
					</Link>
					<Link href='/'>
						<FiSearch />
					</Link>
					<Link href='/'>
						<BsBag />
					</Link>
				</div>
				{currentNav === navbarData[0].name && <Submenu data={navbarData[0]} />}
				{currentNav === navbarData[1].name && <Submenu data={navbarData[1]} />}
				{currentNav === navbarData[3].name && (
					<ContextMenu data={navbarData[3]} />
				)}
			</section>
		</header>
	)
}

export default Navbar

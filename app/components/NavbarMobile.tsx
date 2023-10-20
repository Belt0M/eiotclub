'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'

import { AiOutlineMenu } from 'react-icons/ai'
import SubmenuMobile from './SubmenuMobile'

const NavbarMobile: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const handleClick = () => {
		setIsVisible(prev => !prev)
	}

	return (
		<header className='sticky top-0 flex z-50 border-b-2 border-dark border-opacity-5 justify-between items-center bg-white px-4 py-1 md:hidden h-12'>
			<div className='relative w-1/3 h-1/2'>
				<Link href='/'>
					<Image
						alt='Logo Image'
						src='https://www.eiotclub.com/cdn/shop/files/EIOTCLUB-LOGO2-600x85-0504.png?v=1683165137&width=1200'
						fill
					/>
				</Link>
			</div>
			<div className='flex items-center gap-6 text-[1.4rem]'>
				<Link href='/'>
					<FiSearch />
				</Link>
				<AiOutlineMenu className='cursor-pointer' onClick={handleClick} />
				<Link href='/'>
					<BsBag />
				</Link>
			</div>
			{isVisible && <SubmenuMobile onClick={handleClick} />}
		</header>
	)
}

export default NavbarMobile

import Link from 'next/link'
import { FC } from 'react'
import { INavbar } from '../types/INavbar'

interface Props {
	data: INavbar
}

const ContextMenu: FC<Props> = ({ data }) => {
	return (
		<ul className='fixed top-20 right-[28rem] pl-5 pt-3 pb-1 pr-12 list-none flex flex-col bg-white shadow-lg'>
			{data.subItems?.map(item => (
				<Link
					href='/'
					key={item.subName}
					className='py-2  hover:translate-x-2 transition-all duration-300'
				>
					{item.subName}
				</Link>
			))}
		</ul>
	)
}

export default ContextMenu

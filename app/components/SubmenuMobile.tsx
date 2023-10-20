import { FC } from 'react'
import { navbarData } from '../data/navbar.data'

interface Props {
	onClick: () => void
}

const SubmenuMobile: FC<Props> = ({ onClick }) => {
	return (
		<div
			className='fixed inset-0 bg-dark bg-opacity-40 flex justify-end'
			onClick={onClick}
		>
			<div className='w-[95%] h-full bg-white'>
				<nav className='flex flex-col items-center gap-4 list-none'>
					{navbarData.map(item => (
						<li
							key={item.name}
							// onClick={() => handleClick(item.name)}
							className='cursor-pointer'
						>
							{item.name}
						</li>
					))}
				</nav>
			</div>
		</div>
	)
}

export default SubmenuMobile

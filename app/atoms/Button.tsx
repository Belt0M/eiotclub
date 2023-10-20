import Link from 'next/link'
import { FC } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

interface Props {
	name: string
	py?: string
	width?: string
	fontSize?: string
	left?: number
	mt?: string
}

const Button: FC<Props> = ({
	name,
	py = 'py-3 ',
	width = 'w-44 ',
	fontSize = 'text-base ',
	left = 4,
	mt = 'mt-6 ',
}) => {
	const leftV = `left-${left}`
	const minWidth = 'min-w-[' + width + '] '
	return (
		<Link
			href='/'
			className={
				py +
				width +
				fontSize +
				mt +
				minWidth +
				'relative flex justify-center bg-primary text-white font-semibold rounded-3xl group items-center'
			}
		>
			<span className='group-hover:-translate-x-4 transition-all duration-300 flex items-center gap-2'>
				{name}
				<MdArrowRightAlt
					className={
						leftV +
						` absolute scale-[2] scale-x-[2.5] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 translate-x-20`
					}
				/>
			</span>
		</Link>
	)
}

export default Button

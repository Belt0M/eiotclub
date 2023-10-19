import Link from 'next/link'
import { FC } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

const Button: FC = () => {
	return (
		<Link
			href='/'
			className='relative flex justify-center bg-primary w-44 py-3 text-white font-semibold rounded-3xl mt-6 group items-center'
		>
			<span className='group-hover:-translate-x-4 transition-all duration-300'>
				Learn more
			</span>
			<MdArrowRightAlt className='absolute scale-[2] scale-x-[2.5] translate-x-20 opacity-0 group-hover:translate-x-14 group-hover:opacity-100 transition-all duration-300 delay-75' />
		</Link>
	)
}

export default Button

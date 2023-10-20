import { FC } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

interface Props {
	onClick: (name: string) => void
	data: string
}

const PlayButton: FC<Props> = ({ onClick, data }) => {
	return (
		<button
			className='w-12 h-12 rounded-full place-items-center grid bg-primary border border-primary hover:bg-white transition-all text-white text-2xl hover:text-primary'
			onClick={() => onClick(data)}
		>
			<BsFillPlayFill />
		</button>
	)
}

export default PlayButton

import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IVideo } from '../types/IVideo'

interface Props {
	data: IVideo
	onClose: (name: string) => void
}

const VideoModal: FC<Props> = ({ data, onClose }) => {
	return (
		<div className='fixed inset-0 bg-dark grid place-items-center z-50'>
			<AiOutlineClose
				className='absolute top-6 right-6 text-white text-xl hover:scale-110 transition cursor-pointer'
				onClick={() => onClose('')}
			/>
			<iframe
				width='560'
				height='315'
				src={data.src}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
				className='w-3/5 h-2/3'
			></iframe>
		</div>
	)
}

export default VideoModal

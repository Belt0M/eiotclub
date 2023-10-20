'use client'
import clsx from 'clsx'
import { FC, useState } from 'react'
import { videoData } from '../data/video.data'
import PlayButton from './PlayButton'
import VideoModal from './VideoModal'

const VideosSection: FC = () => {
	const [active, setActive] = useState<string>(videoData[0].img)
	const [currentModal, setCurrentModal] = useState<string>('')

	const handleHover = (name: string) => {
		setActive(name)
	}

	const handleClick = (name: string) => {
		setCurrentModal(name)
	}
	return (
		<section className='h-[100vh] px-44 flex flex-col gap-4 justify-center items-center pb-20'>
			<h1 className='text-3xl'>Recommended By</h1>
			<div className='flex justify-between gap-2 h-4/5 w-full mt-3'>
				{videoData.map((el, index) => {
					const isActive = active === el.img
					return (
						<div
							key={el.img}
							style={{ backgroundImage: `url(${el.img})` }}
							className={clsx(
								isActive ? 'flex-[2.5]' : 'flex-1',
								' rounded-xl h-full bg-cover bg-center transition-all duration-700 grid place-items-center'
							)}
							onMouseEnter={() => handleHover(el.img)}
						>
							<PlayButton onClick={handleClick} data={el.img} />
						</div>
					)
				})}
			</div>
			{currentModal === videoData[0].img && (
				<VideoModal data={videoData[0]} onClose={handleClick} />
			)}
			{currentModal === videoData[1].img && (
				<VideoModal data={videoData[1]} onClose={handleClick} />
			)}
			{currentModal === videoData[2].img && (
				<VideoModal data={videoData[2]} onClose={handleClick} />
			)}
		</section>
	)
}

export default VideosSection

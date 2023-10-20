import { BsTwitter } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { MdFacebook } from 'react-icons/md'
import { INetIcons } from '../types/INetIcon'

export const networksIcons: INetIcons[] = [
	{
		icon: <FiInstagram />,
		name: 'instagram',
	},
	{
		icon: <MdFacebook />,
		name: 'facebook',
	},
	{
		icon: <FaYoutube />,
		name: 'youtube',
	},
	{
		icon: <BsTwitter />,
		name: 'twitter',
	},
]

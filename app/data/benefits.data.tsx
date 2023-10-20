import { BsCreditCard } from 'react-icons/bs'
import { PiHeadphones, PiPackage } from 'react-icons/pi'
import { RiExchangeDollarLine } from 'react-icons/ri'
import { IBenefit } from '../types/IBenefit'

export const benefitsData: IBenefit[] = [
	{
		name: 'Fast  Shipping',
		icon: <PiPackage />,
	},
	{
		name: 'Lifetime Customer Support',
		icon: <PiHeadphones />,
	},
	{
		name: '10-Day Money-Back Guarantee',
		icon: <RiExchangeDollarLine />,
	},
	{
		name: 'Secure payment',
		icon: <BsCreditCard />,
	},
]

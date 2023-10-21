import type { Metadata } from 'next'
import FreeShipping from './components/FreeShipping'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'EIOTClub',
	description: 'EIOTClub website',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<FreeShipping />
				<Navbar />
				<NavbarMobile />
				{children}
			</body>
		</html>
	)
}

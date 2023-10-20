import { NextPage } from 'next'
import 'swiper/css'
import BenefitsSection from './components/BenefitsSection'
import DevicesSlider from './components/DevicesSlider'
import ExpSection from './components/ExpSection'
import Footer from './components/Footer'
import GuidesSlider from './components/GuidesSlider'
import NetworkSection from './components/NetworkSection'
import OperatorsSection from './components/OperatorsSection'
import PartnersSection from './components/PartnersSection'
import ReviewsSection from './components/ReviewsSection'
import ReviewsSectionMobile from './components/ReviewsSectionMobile'
import SupportSection from './components/SupportSection'
import VideosSection from './components/VideosSection'
import WhyChooseSection from './components/WhyChooseSection'

const Home: NextPage = () => {
	return (
		<main>
			<ExpSection />
			<OperatorsSection />
			<NetworkSection />
			<DevicesSlider />
			<SupportSection />
			<ReviewsSection />
			<ReviewsSectionMobile />
			<VideosSection />
			<PartnersSection />
			<WhyChooseSection />
			<GuidesSlider />
			<BenefitsSection />
			<Footer />
		</main>
	)
}

export default Home

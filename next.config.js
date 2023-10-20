/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'www.eiotclub.com',
			'help.opportunitynetwork.com',
			'pnglib.nyc3.cdn.digitaloceanspaces.com',
			'freeiconshop.com',
			'lacountylibrary.org',
			'play.google.com',
			'encrypted-tbn0.gstatic.com',
		],
		formats: ['image/avif', 'image/webp'],
	},
}

module.exports = nextConfig

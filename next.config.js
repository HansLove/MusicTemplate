/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	images: { loader: 'akamai', path: '', },

};

module.exports = nextConfig;

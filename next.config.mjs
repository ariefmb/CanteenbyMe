/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/canteens',
                permanent: false
            },
        ]
    },
    images: {
        domains: ['res.cloudinary.com', 'source.unsplash.com']
    },
};

export default nextConfig;

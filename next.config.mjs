/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/canteens',
                permanent: true
            },
        ]
    },
    images: {
        domains: ['res.cloudinary.com']
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'build',
    domains: [
        'stephyang.xyz',
        'notes.stephyang.xyz',
    ],
};

export default nextConfig;

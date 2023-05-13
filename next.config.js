/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com','images.unsplash.com','wpmedia.roomsketcher.com','upload.wikimedia.org','www.livehome3d.com'],
  },
}


module.exports = nextConfig

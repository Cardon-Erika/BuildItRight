/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'randomuser.me',
          port: '',
        },
      ],
    },
  // }
};

export default nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'randomuser.me',
//         port: '',
//         pathname: '',
//       }
//     ]
//   }
// }
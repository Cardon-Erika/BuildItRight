/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath: '/BuildItRight',

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
    // distDir: 'build'
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
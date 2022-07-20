const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
/** @type {import('next').NextConfig} */
module.exports = withMDX({
   pageExtensions: ['ts', 'tsx', 'mdx'],
   reactStrictMode: true,
   async redirects() {
      return [
         {
            source: '/dotfiles',
            destination: 'https://github.com/riyuzenn/dotfiles',
            permanent: false,
         }
      ]
   } 
})

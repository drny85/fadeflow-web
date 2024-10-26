/** @type {import('next').NextConfig} */
const nextConfig = {
   // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
   //    config.experiments = {
   //       asyncWebAssembly: true
   //    }
   //    return config
   // },
   webpack: (config, { webpack }) => {
      config.plugins.push(
         new webpack.IgnorePlugin({
            resourceRegExp: /^pg-native$|^cloudflare:sockets$/
         })
      )

      return config
   },

   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/**'
         },
         {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com'
         }
      ]
   },
   experimental: {
      headers() {
         return [
            {
               source: '/.well-known/apple-app-site-association',
               headers: [{ key: 'content-type', value: 'application/json' }]
            },
            {
               source: '/.well-known/assetlinks.json',
               headers: [{ key: 'content-type', value: 'application/json' }]
            }
         ]
      }
   }
}

export default nextConfig

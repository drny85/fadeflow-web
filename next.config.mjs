

/** @type {import('next').NextConfig} */
const nextConfig = {
   // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
   //    config.experiments = {
   //      asyncWebAssembly: true,
        
       
       
   //    };
   //    return config;
   //  },
    experimental: {
       headers() {
          return [
             {
                source: '/.well-known/apple-app-site-association',
                headers: [{ key: 'content-type', value: 'application/json' }],
             },
             {
                source: '/.well-known/assetlinks.json',
                headers: [{ key: 'content-type', value: 'application/json' }],
             },
          ];
       },
    },
 };
 
 export default nextConfig;
 
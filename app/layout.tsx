import localFont from 'next/font/local'
import './globals.css'

// Load custom fonts
const geistSans = localFont({
   src: './fonts/GeistVF.woff',
   variable: '--font-geist-sans',
   weight: '100 900'
})
const geistMono = localFont({
   src: './fonts/GeistMonoVF.woff',
   variable: '--font-geist-mono',
   weight: '100 900'
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="en">
         <head>
            {/* Primary Meta Tags */}
            <meta charSet="UTF-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta
               name="description"
               content="Find and book barbers effortlessly with FadeFlow. Schedule haircuts, explore grooming services, and stay fresh."
            />
            <meta
               name="keywords"
               content="barber, barbershop, haircut, booking app, barbers appointment, barberia, barbero, fade, men's grooming, FadeFlow, barber booking app"
            />
            <meta name="author" content="FadeFlow" />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="FadeFlow | Barber Booking App" />
            <meta
               property="og:description"
               content="Find and book barbers effortlessly with FadeFlow. Schedule haircuts, explore grooming services, and stay fresh."
            />
            <meta property="og:image" content="/images/web-banner.png" />
            <meta property="og:url" content="https://fadeflow.vercel.app" />
            <meta property="og:type" content="website" />

            {/* Apple Meta Tags */}
            <meta name="apple-itunes-app" content="app-id=6711330027" />
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Font Preloading */}
            <link
               rel="preload"
               href="/fonts/GeistVF.woff"
               as="font"
               type="font/woff"
               crossOrigin="anonymous"
            />
            <link
               rel="preload"
               href="/fonts/GeistMonoVF.woff"
               as="font"
               type="font/woff"
               crossOrigin="anonymous"
            />
         </head>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            {children}
         </body>
      </html>
   )
}

export default RootLayout

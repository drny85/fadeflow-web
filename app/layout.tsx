import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { FirebaseAuthProvider } from '@/providers/FirebaseAuthProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { SessionProvider } from 'next-auth/react'

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

// export const metadata: Metadata = {
//    title: '',
//    description:
//       'FadeFlow is your ultimate barber booking app, offering seamless appointments, personalized grooming services, and a curated selection of top barbers. Experience easy scheduling, exclusive offers, and a tailored grooming experience at your fingertips. Join FadeFlow today and elevate your style effortlessly!'
// }
const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <SessionProvider>
         <FirebaseAuthProvider>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <html lang="en">
                  <head>
                     <meta
                        name="apple-itunes-app"
                        content="app-id=6711330027"
                     />

                     <meta
                        property="og:title"
                        content="FadeFlow - Barber Booking App"
                     />
                     <meta
                        property="og:description"
                        content="Find and book barbers effortlessly with FadeFlow. Schedule haircuts, explore grooming services, and stay fresh."
                     />
                     <meta
                        name="keywords"
                        content="barber, barbershop, haircut, booking app, barbers appointment, barberia, barbero, fade, men's grooming, FadeFlow, barber booking app"
                     />
                     <meta property="og:image" content="/images/banner.png" />
                     <meta
                        property="og:url"
                        content="https://fadeflow.vercel.app"
                     />
                  </head>

                  <body
                     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                  >
                     {children}
                  </body>
               </html>
            </ThemeProvider>
         </FirebaseAuthProvider>
      </SessionProvider>
   )
}

export default RootLayout

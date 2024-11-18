'use client'
import { useEffect, useState } from 'react'

const AppChecker = () => {
   const [appInstalled, setAppInstalled] = useState(false)

   useEffect(() => {
      const checkAppInstallation = () => {
         // Attempt to open the app using a deep link
         const scheme = 'fadeflow://' // Replace with your app's scheme
         const appStoreLink = 'https://apps.apple.com/app/6711330027' // Replace with iOS App Store link
         const playStoreLink =
            'https://play.google.com/store/apps/details?id=net.robertdev.fadeflow' // Replace with Play Store link

         const fallbackUrl = /iPhone|iPad/.test(navigator.userAgent)
            ? appStoreLink
            : playStoreLink

         const timeout = setTimeout(() => {
            window.location.href = fallbackUrl // Redirect to app store
         }, 1500) // Adjust timeout for your case

         window.location.href = scheme

         // Clear timeout if app opens (browser behavior may vary)
         setTimeout(() => clearTimeout(timeout), 1500)
      }

      checkAppInstallation()
   }, [])

   return (
      <div className="flex flex-col items-center justify-center h-10 min-h-svh">
         {appInstalled ? (
            <h1 className="text-2xl font-bold text-green-500">App Detected</h1>
         ) : (
            <h1 className="text-2xl font-bold text-red-500">
               Checking for App...
            </h1>
         )}
      </div>
   )
}

export default AppChecker

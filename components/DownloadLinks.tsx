'use client';
import { useDeviceType } from '@/hooks/useDeviceType';
import React from 'react';

export default function DownloadLinks() {
   const deviceType = useDeviceType();

   return (
      <section className="w-full max-w-sm mt-8 sm:hidden  text-center absolute z-10 bottom-6 p-4">
         <h2 className="text-xl font-semibold text-gray-100">
            Download the App Now!
         </h2>
         <p className="text-gray-100 mt-4 text-sm">
            Download FadeFlow app now. Available on both iOS and Android.
         </p>
         <div className="mt-8 items-center justify-center space-x-8 flex h-40">
            {deviceType === 'android' && (
               <a href="https://play.google.com/store/apps/details?id=net.robertdev.moyabarber">
                  <img src="/images/google.png" alt="Get it on Google Play"  
                     className="h-16" />
               </a>
            )}
            {deviceType === 'iphone' && (
               <a href="https://apps.apple.com/app/6711330027" className="mx-2">
                  <img
                     src="/images/apple.png"
                     alt="Download on the App Store"
                     className="h-16"
                  />
               </a>
            )}
         </div>
      </section>
   );
}

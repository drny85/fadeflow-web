'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function ReturnUrl() {
    const params = useSearchParams()
   const url = params.get('returnUrl')
   console.log(url)

   useEffect(() => {
    if(url){
        window.location.replace(url)
    }
   }, [url])
  return (
    <div className='flex-1 justify-center items-center h-full w-full'>
      <p className='text-2xl font-serif'>Redirecting</p>
    </div>
  )
}

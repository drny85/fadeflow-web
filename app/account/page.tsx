'use client'
import Image from 'next/image'
import React from 'react'

function Account() {
   return (
      <div className="flex-1 container flex-col mx-auto h-svh items-center p-4 justify-center w-full  gap-4">
         <h1 className="text-center text-2xl font-semibold">
            Account Deletion
         </h1>
         <div className="items-center justify-center mt-5">
            <p className="text-center text-xl">
               To delete your account, you must be signed into the app and go to
               the Profile tab then scroll to the bottom and click on Delete
               Account
            </p>
            <div className="mt-6 self-center flex justify-center items-center flex-col gap-y-3">
               <button
                  onClick={() => {
                     window.location.replace('fadeflow://profile')
                  }}
                  className="bg-black text-white px-8 py-2 rounded-full font-bold mb-3"
               >
                  Click Here
               </button>
               <Image
                  src={'/images/delete.png'}
                  alt="delete"
                  height={500}
                  width={300}
                  className=" border-yellow-200 border-4"
               />
            </div>
         </div>
      </div>
   )
}

export default Account

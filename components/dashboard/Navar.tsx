import React from 'react'
import { ThemeToggle } from '../ThemeToggle'

import Link from 'next/link'

export default function Navar() {
   return (
      <header className="flex items-center gap-x-4 p-3 justify-between bg-slate-200">
         <div className="flex items-center gap-x-3">
            <Link href={'/dashboard'}>
               <h1 className="text-3xl font-semibold mr-4">Dashboard</h1>
            </Link>
            <div>
               {/* Add your navigation links here */}
               <Link href="/dashboard/users">Customers</Link>
            </div>
         </div>
         <div className="flex items-center gap-x-4">
            <ThemeToggle />
         </div>
      </header>
   )
}

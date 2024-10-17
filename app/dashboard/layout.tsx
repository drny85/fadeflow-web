import Navar from '@/components/dashboard/Navar'
import { FirebaseAuthProvider } from '@/providers/FirebaseAuthProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import React from 'react'

export default function DashboardLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <FirebaseAuthProvider>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
         >
            <div className="flex h-dvh flex-col">
               <Navar />
               {children}
            </div>
         </ThemeProvider>
      </FirebaseAuthProvider>
   )
}

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import admin, { verifyIdToken } from './lib/admin'
import { getIdToken , getAuth} from 'firebase/auth'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/', '/barbers/:path*', '/privacy', '/stripe-redirect'])

export default clerkMiddleware((auth, request) => {
    const url = request.cookies.get('__session')
    console.log("MIDDLEWARE +>", url?.value)
 
  
    if (request.url.includes('/dashboard')) {
        const session = auth().userId
      
       
        if (!session) {
            auth().protect()
            // url.pathname = '/sign-in'
            // return NextResponse.redirect(url)
        }
       
       // return NextResponse.next()
    } 
 
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    '/dashboard/:path*'
  ],
}
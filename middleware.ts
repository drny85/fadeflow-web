import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import authConfig from '@/auth.config'

const { auth } = NextAuth(authConfig)
export default auth((req) => {
   // Your custom middleware logic goes here
   console.log('middleware', req.auth, req.nextUrl.pathname)
   if (!req.url.includes('/dashboard')) {
      return NextResponse.next()
   }
   if (!req.auth && req.nextUrl.pathname !== '/signin') {
      const newUrl = new URL('/api/auth/signin', req.nextUrl.origin)
      newUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
      return NextResponse.redirect(newUrl)
   }

   // if (req.auth && req.auth.user?.email !== 'robertm3lendez@gmail.com') {
   //    const newUrl = new URL('/api/auth/signin', req.nextUrl.origin)
   //    newUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
   //    return NextResponse.redirect(newUrl)
   // }

   if (req.auth && req.nextUrl.pathname === '/signin') {
      const newUrl = new URL('/dashboard', req.nextUrl.origin)
      return NextResponse.redirect(newUrl)
   }
})

export const config = {
   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

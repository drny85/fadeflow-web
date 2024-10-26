import authConfig from '@/auth.config'
import { FirestoreAdapter } from '@auth/firebase-adapter'
import { signInWithCredential, signInWithCustomToken } from 'firebase/auth'
import NextAuth from 'next-auth'
import { auth as authentication } from './firebase'

export const { handlers, signIn, signOut, auth } = NextAuth({
   adapter: FirestoreAdapter(),
   secret: process.env.AUTH_SECRET,
   session: {
      strategy: 'jwt'
   },

   callbacks: {
      async jwt({ token, user }) {
         if (user) {
            token.uid = user.id
         }
         return token
      },
      async session({ session, token }) {
         if (token?.uid) {
            session.user.id = token.uid as string
         }

         return session
      }
   },
   ...authConfig
})

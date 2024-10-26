import { FirestoreAdapter } from '@auth/firebase-adapter'
import { CredentialsSignin, type NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'

class InvalidLoginError extends CredentialsSignin {
   code = 'Invalid identifier or password'
}

export default {
   //adapter: FirestoreAdapter(),
   providers: [
      Google({
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      }),
      Credentials({
         name: 'Credencials',
         credentials: {
            email: {
               label: 'Email',
               type: 'email',
               placeholder: 'your-email@example.com'
            },
            password: { label: 'Password', type: 'password' }
         },
         async authorize(credentials): Promise<any> {
            if (!credentials?.email || !credentials?.password) {
               throw new Error('Email and password are required')
            }

            try {
               // Use Firebase to authenticate the user
               const userCredential = await signInWithEmailAndPassword(
                  auth,
                  credentials.email as string,
                  credentials.password as string
               )
               const user = userCredential.user

               if (user) {
                  return {
                     id: user.uid,
                     email: user.email
                  }
               }
               return null
            } catch (error) {
               console.error('Failed to log in with Firebase:', error)
               //throw new Error('Invalid credentials')
               throw new InvalidLoginError()
            }
         }
      })
   ]
} satisfies NextAuthConfig

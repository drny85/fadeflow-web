// pages/login.tsx
'use client'
import { useState } from 'react'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/providers/FirebaseAuthProvider'
import { auth } from '@/firebase'

const Login = () => {
   const { login } = useAuth()
   const router = useRouter()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState<string | null>(null)
   const [loading, setLoading] = useState(false)
   console.log('CU', JSON.stringify(auth.currentUser, null, 2))

   const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      setError(null)

      try {
         const u = await login(email, password)
         //console.log('USER', JSON.stringify(u, null, 2))
         // Redirect to the dashboard after successful login
         router.push('/dashboard')
      } catch (error) {
         setError('Failed to log in. Please check your credentials.')
         console.log(error)
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-center text-gray-900">
               Sign in to your account
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
               <div>
                  <label
                     htmlFor="email"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Email address
                  </label>
                  <input
                     id="email"
                     name="email"
                     type="email"
                     required
                     className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                     placeholder="you@example.com"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>

               <div>
                  <label
                     htmlFor="password"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Password
                  </label>
                  <input
                     id="password"
                     name="password"
                     type="password"
                     required
                     className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                     placeholder="********"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>

               {error && <p className="text-sm text-red-600">{error}</p>}

               <div>
                  <button
                     type="submit"
                     className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     disabled={loading}
                  >
                     {loading ? 'Signing in...' : 'Sign in'}
                  </button>
               </div>
            </form>

            <p className="text-sm text-center text-gray-600">
               Don't have an account?{' '}
               <a
                  href="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
               >
                  Sign up
               </a>
            </p>
         </div>
      </div>
   )
}

export default Login

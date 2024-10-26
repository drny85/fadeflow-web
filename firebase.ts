import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
   // }
   //    apiKey: 'AIzaSyCY1y2rhxZ8MIbH9Y8ttuLO8DujrM1l-HQ',
   //    authDomain: 'fadeflow-7d31b.firebaseapp.com',
   //    projectId: 'fadeflow-7d31b',
   //    storageBucket: 'fadeflow-7d31b.appspot.com',
   //    messagingSenderId: '684619283478',
   //    appId: '1:684619283478:web:98059a7cb6eb01bbf30937',
   //    measurementId: 'G-SV0LN6TMQF'
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }

// lib/firebaseAdmin.ts
import * as admin from 'firebase-admin'

// Initialize the Firebase Admin app if it hasn't been already
if (!admin.apps.length) {
   admin.initializeApp({
      credential: admin.credential.cert({
         projectId: process.env.FIREBASE_PROJECT_ID,
         clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
         privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY?.replace(
            /\\n/g,
            '\n'
         )
      })
   })
}

export default admin.firestore()

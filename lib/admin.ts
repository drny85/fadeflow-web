
import * as admin from 'firebase-admin';

const cert ={
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey:process.env.FIREBASE_PRIVATE_KEY,
}

console.log("CERT +>", JSON.stringify(cert, null, 2))


if (!admin.apps.length) {
    const PRIVATE_KEY =  formatPrivateKey(process.env.FIREBASE_PRIVATE_KEY!);
  admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey:PRIVATE_KEY,
    }),
  });
}

export const verifyIdToken = (token: string) => {
    if (!token) throw new Error('Recent sign in required');
 // return admin.auth().verifyIdToken(token);
};

export default admin;


export function formatPrivateKey(key:string) {
    return key.replace(/\\n/g, '\n');
}
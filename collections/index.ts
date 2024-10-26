import { db } from '@/firebase'
import { AppUser } from '@/typing/types'
import {
   collection,
   CollectionReference,
   DocumentData
} from 'firebase/firestore'

const createCollection = <T = DocumentData>(collectionName: string) => {
   return collection(db, collectionName) as CollectionReference<T>
}

export const barbersCollection = createCollection<AppUser>('users')

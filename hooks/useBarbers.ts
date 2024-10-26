'use client'
import { barbersCollection } from '@/collections'
import { AppUser } from '@/typing/types'
import { onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export const useBarbers = () => {
   const [barbers, setBarbers] = useState<AppUser[]>([])
   const [loading, setLoading] = useState(false)
   useEffect(() => {
      setLoading(true)
      return onSnapshot(barbersCollection, (snapshot) => {
         const barbers = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
         }))
         setBarbers(barbers)
         setLoading(false)
      })
   }, [])

   return {
      barbers,
      loading
   }
}

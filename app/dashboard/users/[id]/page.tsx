import { Badge } from '@/components/ui/badge'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle
} from '@/components/ui/card'
import admin from '@/lib/admin'
import { Barber } from '@/typing/types'
import { format } from 'date-fns'
import { Mail, Phone } from 'lucide-react'

import React from 'react'

type Props = {
   params: { id: string }
}
export default async function Users({ params: { id } }: Props) {
   const barber = (
      await admin.collection('users').doc(id).get()
   ).data() as Barber
   return (
      <div className="p-3 h-screen mx-auto max-w-4xl bg-slate-300">
         <Card>
            <CardContent>
               <div className="flex flex-col md:flex-row rounded-md">
                  <div className="w-full h-full md:w-1/2">
                     <img
                        src={barber.image || '/images/banner.png'}
                        alt={barber.name}
                        className="h-full w-fit object-cover rounded-md overflow-hidden"
                     />
                  </div>
                  <div className="p-3 gap-3 flex flex-col h-full">
                     <div>
                        <h1 className="text-2xl font-semibold">
                           {barber.name}
                        </h1>

                        <h4 className="text-lg">
                           {barber.profile?.barbershopName}
                        </h4>
                     </div>

                     <div className="flex flex-col gap-1">
                        <p>{barber.profile?.address}</p>
                        <p>{barber.profile?.apt}</p>
                        <div className="flex items-center gap-2">
                           <Phone />
                           <p>{barber.profile?.phone}</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                           <Mail />

                           <p>{barber.email}</p>
                        </div>
                     </div>

                     <div className="">
                        <p>{format(barber.createdAt, 'PPpp')}</p>

                        <p>{barber.profile?.bio}</p>
                        <Badge variant={'outline'} className="capitalize">
                           {barber.subscriptionStatus}
                        </Badge>
                     </div>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
   )
}

'use client'

import { Barber } from '@/typing/types'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/button'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Barber>[] = [
   {
      accessorKey: 'name',
      header: () => <div className="font-semibold text-xl">Name</div>,
      cell: ({ row }) => {
         const barber = row.original

         return (
            <div className="flex items-center gap-2">
               {/* <Image
                  alt="user"
                  src={barber.image || ''}
                  height={80}
                  width={80}
                  className="rounded-full"
               /> */}
               <p>{barber.name}</p>
            </div>
         )
      }
   },
   {
      id: 'actions',
      header: () => (
         <div className="font-semibold text-xl text-center">Actions</div>
      ),
      cell: ({ row }) => {
         const barber = row.original

         return (
            <div className="flex items-center gap-2 bg-red-400 justify-center">
               <Button>Cancel</Button>
               <Button>Edit</Button>
            </div>
         )
      }
   }
]

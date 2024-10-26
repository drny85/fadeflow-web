import { columns } from './columns'
import { DataTable } from './data-table'

import { Barber } from '@/typing/types'

type Props = {
   barbers: Barber[]
}

export default function DemoPage({ barbers }: Props) {
   return (
      <div className="container mx-auto py-10">
         <DataTable columns={columns} data={barbers} />
      </div>
   )
}

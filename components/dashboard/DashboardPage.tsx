import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { AppUser, Barber } from '@/typing/types'
import { CalendarIcon, DownloadIcon, UserCircleIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { ThemeToggle } from '../ThemeToggle'

import {
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
   type ChartConfig
} from '../ui/chart'

import admin from '@/lib/admin'
import DemoPage from '../tables/users-table'

const chartData = [
   { month: 'January', desktop: 186, mobile: 80 },
   { month: 'February', desktop: 305, mobile: 200 },
   { month: 'March', desktop: 237, mobile: 120 },
   { month: 'April', desktop: 73, mobile: 190 },
   { month: 'May', desktop: 209, mobile: 130 },
   { month: 'June', desktop: 214, mobile: 140 }
]
const chartConfig = {
   desktop: {
      label: 'Desktop',
      color: '#2563eb'
   },
   mobile: {
      label: 'Mobile',
      color: '#60a5fa'
   }
} satisfies ChartConfig

const DashboardPage = async () => {
   const data = (await admin.collection('users').get()).docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
   })) as AppUser[]
   const barbers = data.filter(
      (b) => b.isBarber && b.profileCompleted
   ) as Barber[]

   //    if (status === 'loading' || loading) {
   //       return <div>Loading...</div>
   //    }

   return (
      <div className="p-6">
         {/* Top Navbar */}
         <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
               <UserCircleIcon className="w-8 h-8 mr-3" />
            </div>
            <div className="flex space-x-4">
               <Input placeholder="Search..." />
               <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                     <CalendarIcon className="w-5 h-5" />
                  </Button>
                  <Button size="icon">
                     <DownloadIcon className="w-5 h-5" />
                  </Button>
                  <ThemeToggle />
                  <Button
                     variant="outline"
                     //  onClick={() => {
                     //     signOut({ redirectTo: '/' })
                     //  }}
                  >
                     Logout
                  </Button>
               </div>
            </div>
         </div>

         {/* Summary Cards */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
               <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                  <CardDescription>{}</CardDescription>
               </CardHeader>
               <CardContent>
                  <p className="text-3xl">$45,231.89</p>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle>Subscriptions</CardTitle>
                  <CardDescription>+180.1% from last month</CardDescription>
               </CardHeader>
               <CardContent>
                  <p className="text-3xl">
                     {
                        barbers.filter((b) => b.subscriptionStatus === 'active')
                           .length
                     }
                  </p>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle>Sales</CardTitle>
                  <CardDescription>+19% from last month</CardDescription>
               </CardHeader>
               <CardContent>
                  <p className="text-3xl">+12,234</p>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle>Active Now</CardTitle>
                  <CardDescription>+201 since last hour</CardDescription>
               </CardHeader>
               <CardContent>
                  <p className="text-3xl">+573</p>
               </CardContent>
            </Card>
         </div>

         {/* Overview Chart */}

         {/* Recent Sales */}
         {/* <Card>
            <CardHeader>
               <CardTitle>Recent Barber</CardTitle>
               <CardDescription>
                  Total Barbers {barbersData.length}
               </CardDescription>
            </CardHeader>
            <CardContent>
               <ul className="space-y-4">
                  {barbersData.map((barber, index) => (
                     <li
                        key={index}
                        className="flex justify-between items-center"
                     >
                        <Link href={`/dashboard/users/${barber.id}`}>
                           <div className="flex items-center cursor-pointer">
                              <UserCircleIcon className="w-8 h-8 mr-3" />
                              <div>
                                 <p>{barber.name}</p>
                                 <p className="text-xs text-gray-500">
                                    {barber.email}
                                 </p>
                                 <p className="text-xs text-gray-500">
                                    {format(barber.createdAt, 'PPpp')}
                                 </p>
                              </div>
                           </div>
                        </Link>
                        <Badge
                           variant="outline"
                           className={`capitalize ${
                              barber.subscriptionStatus === 'active'
                                 ? 'bg-green-400 text-white'
                                 : 'bg-slate-400'
                           }`}
                        >
                           {barber.subscriptionStatus}
                        </Badge>
                     </li>
                  ))}
               </ul>
            </CardContent>
         </Card> */}
         <DemoPage barbers={barbers} />
      </div>
   )
}

export default DashboardPage

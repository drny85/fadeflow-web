import DashboardPage from '@/components/dashboard/DashboardPage'

const Dashboard = () => {
   // const barbers = (await admin.collection('users').get()).docs.map((doc) => ({
   //    id: doc.id,
   //    ...doc.data()
   // })) as AppUser[]

   return <DashboardPage />
}
export default Dashboard

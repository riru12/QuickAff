import TopNav from './components/topnav'
import SideNav from './components/sidenav'
import Dashboard from './components/dashboard'
import MembersTable from './components/memberstable'
import MembershipForm from './components/memberform'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-[#f9f9f9]">
      <TopNav />
      <SideNav />
      {/*<Dashboard />*/}
      <MembershipForm />
      {/*<MembersTable />*/}
    </main>
  )
}

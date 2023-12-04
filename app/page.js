"use client"
import { useState } from 'react';
import TopNav from './components/topnav'
import SideNav from './components/sidenav'
import Dashboard from './components/dashboard'
import MembersTable from './components/memberstable'
import MembershipForm from './components/memberform'

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'MembershipForm':
        return <MembershipForm />;
      case 'MembersTable':
        return <MembersTable />;
      case 'MembersForm':
        return <MembersTable setActiveComponent={setActiveComponent} />;
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-[#f9f9f9]">
      <TopNav />
      <SideNav setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </main>
  );
}

"use client"
import { useState } from 'react';
import TopNav from './components/topnav'
import SideNav from './components/sidenav'
import Dashboard from './components/dashboard'
import MembersTable from './components/memberstable'
import MembershipForm from './components/memberform'
import Renewal from './components/renewal'; 

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'MembershipForm':
        return <MembershipForm />
        //return <MembershipForm setActiveComponent={setActiveComponent} />;
      case 'MembersTable':
        return <MembersTable />;
      case 'Renewal': 
        return <Renewal />;
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
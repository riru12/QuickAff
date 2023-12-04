import React from 'react';
import { HomeIcon, UserIcon, ArrowPathIcon } from '@heroicons/react/24/solid'

const SideNav = ({ setActiveComponent }) => {
    const handleButtonClick = (component) => {
        setActiveComponent(component);
      };
    
    return (
        <div className="h-screen absolute inset-y-0 left-0 bg-[#d9d9d9] p-4 gap-2">
            <button onClick={() => handleButtonClick('Dashboard')} className="flex flex-row text-[#858585] gap-2 hover:text-[#f9f9f9] hover:bg-[#858585] p-2 rounded mt-14">
                <HomeIcon className="h-6 w-6"/> Overview
            </button>
            <button onClick={() => handleButtonClick('MembersTable')} className="flex flex-row text-[#858585] gap-2 hover:text-[#f9f9f9] hover:bg-[#858585] p-2 rounded mt-2">
                <UserIcon className="h-6 w-6"/> Members
            </button>
            <button onClick={() => handleButtonClick('Renewal')} className="flex flex-row text-[#858585] gap-2 hover:text-[#f9f9f9] hover:bg-[#858585] p-2 rounded mt-2">
                <ArrowPathIcon className="h-6 w-6"/> Renewal
            </button>
        </div>
    )
}

export default SideNav
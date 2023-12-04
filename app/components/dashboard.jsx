import React from 'react';
import { HomeIcon, UserIcon, ArrowPathIcon } from '@heroicons/react/24/solid'

const Dashboard = () => {
    return (
        <div className="grid grid-cols-4 gap-20 text-black">
            <div className="flex p-4">
                <div className="flex bg-[#d9d9d9] text-[#858585] rounded items-center justify-center p-4 mr-4">
                    <UserIcon className="w-12 h-12"/>
                </div>
                <div className="flex flex-row items-center justify-center text-[#858585]">
                    <div>
                        <h1 className="font-bold text-5xl">32</h1>
                        <p>Renewed</p>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <h1 className="font-bold text-5xl">64</h1>
                <p>Non-renewed</p>
            </div>
            <div className="p-4">
                <h1 className="font-bold text-5xl">196</h1>
                <p>Total Members</p>
            </div>
            <div className="p-4">
                <h1 className="font-bold text-5xl">183</h1>
                <p>Alumni</p>
            </div>
        </div>
    )
}

export default Dashboard
'use client'

import { useState, useEffect, React } from 'react';

function MembersTable() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const fieldArray = ["Student ID", "Last Name", "First Name", "Middle Name", "Nickname", "UP Mail", "Course", "App Batch", "Membership Status", "Renewal Payment Status", "Committee"]
    const tableFields = fieldArray.map((field, index)=>(
        <th className="p-2" key={index}>
            {field}
        </th>
    ))
   
    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((res) => res.json())
            .then((data) => {
            setData(data)
            setLoading(false)
            })
    }, [])
   
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No member data</p>
    console.log(data)

    var tableData = data.map((entry,index) => (
        <tr class="bg-white border-b text-sm">
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.student_id}</td>
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.last_name}</td>
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.first_name}</td>
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.middle_name}</td>
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.nickname}</td>
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.up_mail}</td>
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.course}</td>
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.app_batch}</td>
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.mem_status}</td>
            <td className="px-6 py-4 overflow-hidden whitespace-nowrap overflow-x-auto">{entry.renewal_payment_status}</td>
            <td className="px-6 py-4">{entry.committee}</td>
        </tr>
    ))

    return (
        <div className="ml-40 mt-16 h-full flex">
            <div className="flex flex-col">
                <input class="rounded w-48 shadow py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search"/>
                <div className="text-black overflow-auto shadow-md sm:rounded-lg w-full max-h-[90vh]"> {/* Adjust max height as needed */}
                    <table className="table-fixed w-full">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>{tableFields}</tr>
                        </thead>
                        <tbody id="table content">{tableData}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MembersTable
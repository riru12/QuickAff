'use client'

import { useState, useEffect, React } from 'react';

function MembersTable() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const fieldArray = ["Student ID", "Last Name", "First Name", "Middle Name", "Nickname", "Course", "UP Mail", "App Batch", "Membership Status", "Renewal Payment Status", "Committee"]
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
        <tr>
            <td className="pl-2 pr-2">{entry.student_id}</td>
            <td className="pl-2 pr-2">{entry.last_name}</td>
            <td className="pl-2 pr-2">{entry.first_name}</td>
            <td className="pl-2 pr-2">{entry.middle_name}</td>
            <td className="pl-2 pr-2">{entry.nickname}</td>
            <td className="pl-2 pr-2">{entry.up_mail}</td>
            <td className="pl-2 pr-2">{entry.course}</td>
            <td className="pl-2 pr-2">{entry.app_batch}</td>
            <td className="pl-2 pr-2">{entry.mem_status}</td>
            <td className="pl-2 pr-2">{entry.renewal_payment_status}</td>
            <td className="pl-2 pr-2">{entry.committee}</td>
        </tr>
    ))

    return (
        <div className="text-black ml-40 mr-2 mt-16"> 
            <table className="table-fixed">
                <thead id="table fields" className="border-b bg-neutral-600 font-medium text-white">
                    <tr>
                        {tableFields}
                    </tr>
                </thead>
                <tbody id="table content">
                   {tableData}
                </tbody>
                </table>
        </div>
    )
}

export default MembersTable
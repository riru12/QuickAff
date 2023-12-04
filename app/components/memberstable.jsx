"use client"
import { React,useEffect, useState } from 'react';
import data from './users.json';

const fieldArray = ["Student ID", "Last Name", "First Name", "Middle Name", "Nickname", "UP Mail", "Course", "App Batch", "Membership Status", "Renewal Payment", "Committee"]
const tableFields = fieldArray.map((field, index)=>(
    <th className="p-2" key={index}>
        {field}
    </th>
))

var tableData = data.map((entry,index) => (
    <tr>
        <td className="pl-2 pr-2">{entry.id}</td>
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

const MembersTable = () => {
    data.map((entry,index) => { 
        console.log(`${entry.id}`)
    })
    return (
        <div className="text-black ml-28"> 
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
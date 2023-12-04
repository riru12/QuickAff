import React from 'react';

const fieldArray = ["Student ID", "Last Name", "First Name", "Middle Name", "Nickname", "Course", "UP Mail", "App Batch", "Membership Status", "Renewal Payment Status", "Committee", "Team/s"]
const tableFields = fieldArray.map((field, index)=>(
    <th className="p-2" key={index}>
        {field}
    </th>
))

const MembersTable = () => {
    return (
        <div className="text-black"> 
            <table className="table-fixed h-52">
                <thead id="table fields" className="border-b bg-neutral-600 font-medium text-white">
                    <tr>
                        {tableFields}
                    </tr>
                </thead>
                <tbody id="table content">
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                    <tr>
                        <td className="pl-2 pr-2">202000000</td>
                        <td className="pl-2 pr-2">Gonzaga</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">Panget</td>
                        <td className="pl-2 pr-2">Chase</td>
                        <td className="pl-2 pr-2">BS Computer Science</td>
                        <td className="pl-2 pr-2">rcgonzaga2@up.edu.ph</td>
                        <td className="pl-2 pr-2">IDKApp</td>
                        <td className="pl-2 pr-2">Regular</td>
                        <td className="pl-2 pr-2">Paid</td>
                        <td className="pl-2 pr-2">Membership</td>
                        <td className="pl-2 pr-2">Everything</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}

export default MembersTable
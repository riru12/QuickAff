"use client"
import { useState } from 'react';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    student_id: '',
    last_name: '',
    first_name: '',
    middle_name: '',
    nickname: '',
    up_mail: '',
    course: '',
    app_batch: '',
    membership_status: '',
    renewal_payment: '',
    committee: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'committee') {
      // Special handling for the committee dropdown
      setFormData((prevData) => ({
        ...prevData,
        committee: value,
      }));
    } else {
      // Handle other form fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData((data) => ({
      ...data,
      student_id: parseInt(data.student_id, 10),
    }));

    fetch('http://localhost:3001/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type of the request
        // You can add other headers if needed
      },
      body: JSON.stringify(formData), // Convert the data to JSON format
    })
      //.then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });

    console.log('Form submitted:', formData);
    // Reset the form fields
    setFormData({
      student_id: '',
      last_name: '',
      first_name: '',
      middle_name: '',
      nickname: '',
      up_mail: '',
      course: '',
      app_batch: '',
      membership_status: '',
      renewal_payment: '',
      committee: '',
    });
    // router.push('/');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-4">Member Profile</h1>
      <form onSubmit={handleSubmit}>

        <div className="flex flex-row gap-x-2 p-2">
          <div className="flex flex-col grow">
            <label className="text-black font-bold mb-2">Student ID</label>
            <input class="rounded shadow py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="20XXXXXX" name="student_id" value={formData.student_id} onChange={handleChange} />
          </div>
          <div className="flex flex-col grow">
            <label className="text-black font-bold mb-2">UP Mail</label>
            <input class="rounded shadow py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="abcd@up.edu.ph" name="up_mail" value={formData.up_mail} onChange={handleChange} />
          </div>
        </div>

        <div className="flex flex-row gap-x-2 p-2">
          <div className="flex flex-col">
            <label className="text-black font-bold mb-2">Last Name</label>
            <input class="rounded shadow py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold mb-2">First Name</label>
            <input class="rounded shadow py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First Name" name="first_name" value={formData.first_name} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold mb-2">Middle Name</label>
            <input class="rounded shadow py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Middle Name" name="middle_name" value={formData.middle_name} onChange={handleChange} />
          </div>
        </div>

        <div className="flex flex-row gap-x-2 p-2">
          <div className="flex flex-col grow">
            <label className="text-black font-bold mb-2">Nickname</label>
            <input class="rounded shadow py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nickname" name="nickname" value={formData.nickname} onChange={handleChange} />
          </div>
          <div className="flex flex-col grow">
            <label className="text-black font-bold mb-2">Course</label>
            <input class="rounded shadow py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="BS Computer Science" name="course" value={formData.course} onChange={handleChange} />
          </div>
          <div className="flex flex-col grow">
            <label className="text-black font-bold mb-2">App Batch</label>
            <input class="rounded shadow py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="PopApp" name="app_batch" value={formData.app_batch} onChange={handleChange} />
          </div>
        </div>
        <div className="p-2">
          <label className="text-black font-bold mb-2">Committee</label>
          <select
            id="committee"
            name="committee"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-2"
            value={formData.committee}
            onChange={handleChange}>
            <option value="" disabled>Select your committee</option>
            <option value="Executive">Executive</option>
            <option value="Academic Affairs">Academic Affairs</option>
            <option value="Activities">Activities</option>
            <option value="External Affairs">External Affairs</option>
            <option value="Finance">Finance</option>
            <option value="Information & Public Relations">Information & Public Relations</option>
            <option value="Membership">Membership</option>
            <option value="Records">Records</option>
          </select>
        </div>

        {/*<input type="text" name="committee" value={formData.committee} onChange={handleChange} />*/}
        <div className="flex mt-2 justify-end">
          <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-[#8b64d9] hover:bg-[#412e66] hover:text-[#ADB7BE]" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;
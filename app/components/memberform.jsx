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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
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
    router.push('/');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-4">Add/Update Member</h1>
      <form onSubmit={handleSubmit}>
        <label className="text-black mt-2">
          Student ID:
          <input type="text" name="student_id" value={formData.student_id} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          Last Name:
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          First Name:
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          Middle Name:
          <input type="text" name="middle_name" value={formData.middle_name} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          Nickname:
          <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          UP Mail:
          <input type="email" name="up_mail" value={formData.up_mail} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          Course:
          <input type="text" name="course" value={formData.course} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          App Batch:
          <input type="text" name="app_batch" value={formData.app_batch} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          Membership Status:
          <input type="text" name="membership_status" value={formData.membership_status} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          Renewal Payment:
          <input type="text" name="renewal_payment" value={formData.renewal_payment} onChange={handleChange} />
        </label>
        <br />
        <label className="text-black mt-2">
          Committee:
          <input type="text" name="committee" value={formData.committee} onChange={handleChange} />
        </label>
        <br />
        <button className="rounded p-4 text-white bg-black" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MembershipForm;
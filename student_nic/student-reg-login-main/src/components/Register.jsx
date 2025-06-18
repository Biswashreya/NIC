// src/components/Register.jsx
import React, { useState } from 'react';

const Register = ({ onTogglePage }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');


  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  existingUsers.push(formData);
  localStorage.setItem("users", JSON.stringify(existingUsers));


    setSuccess('');

    // Form Validation 
    const { firstName, lastName, email, password, confirmPassword, gender, age } = formData;
    if (!firstName || !lastName || !email || !password || !confirmPassword || !gender || !age) {
        setError('Please fill out all fields.');
        return;
    }
    if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
    }
    if (password.length < 8) {
        setError('Password must be at least 8 characters long.');
        return;
    }
    if (age <= 0 || age > 100) {
        setError('Please enter a valid age.');
        return;
    }

    // We will make an API call to the backend here to register the new user
    console.log('Registering user with:', formData);
    setSuccess('Registration successful! You can now log in.');

    // Clear form after successful registration
    setFormData({
        firstName: '', lastName: '', email: '', password: '', confirmPassword: '', gender: '', age: ''
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50/50">
       <header className="w-full bg-white shadow-md py-3 mb-8">
        <div className="container mx-auto flex items-center justify-center">
           <img src="/emblem.png" alt="Emblem of India" className="h-16 w-16 mr-4"/>
           <div>
             <h1 className="text-xl font-bold text-blue-800">संघ लोक सेवा आयोग</h1>
             <h2 className="text-lg font-semibold text-orange-600">Union Public Service Commission</h2>
           </div>
        </div>
      </header>

      <main className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">New Candidate Registration</h3>
        <p className="text-center text-gray-500 mb-6">नए उम्मीदवार का पंजीकरण</p>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}
        {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">{success}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">First Name</label>
              <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Last Name</label>
              <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="md:col-span-2 mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email ID</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
              <input type="password" id="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">Gender</label>
              <select id="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
              <input type="number" id="age" value={formData.age} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
          </div>
          
          <button type="submit" className="w-full mt-6 bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <button onClick={() => onTogglePage('login')} className="text-orange-600 font-semibold hover:underline">
            Login here
          </button>
        </p>
      </main>

      <footer className="w-full text-center text-gray-600 py-6 mt-8">
        <p>&copy; {new Date().getFullYear()} Union Public Service Commission. All rights reserved.</p>
        <p className="text-sm">Designed & Developed by NIC</p>
      </footer>
    </div>
  );
};

export default Register;

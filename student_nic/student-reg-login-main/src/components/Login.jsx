// src/components/Login.jsx
import React, { useState } from 'react';

const Login = ({ onTogglePage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError('');
  //   setSuccess('');

  //   // Form Validation 
  //   if (!email || !password) {
  //     setError('Please fill in all fields.');
  //     return;
  //   }
    
  //   // We would make an API call here to authenticate the user
  //   console.log('Login attempt with:', { email, password });
  //   setSuccess('Login successful! Redirecting...');
    
  //   // Clear form fields
  //   setEmail('');
  //   setPassword('');
  // };



  const handleSubmit = (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');

  if (!email || !password) {
    setError('Please fill in all fields.');
    return;
  }

  // It will fetch all registered users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // It will Check if there is a matching user
  const matchedUser = users.find((user) => {
  return user.email === email && user.password === password;
});

  if (!matchedUser) {
    setError("Invalid email or password.");
    return;
  }

  //  If Credentials matched
  setSuccess("Login successful! Redirecting...");

  // To Clear the form
  setEmail('');
  setPassword('');

  //  Redirect to Home Page after 1.5 seconds
  setTimeout(() => {
    onTogglePage("home");
  }, 1500);
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
      
      <main className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">Registered Applicant Login</h3>
        <p className="text-center text-gray-500 mb-6">लॉगिन करने के लिए पंजीकृत आवेदक</p>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}
        {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">{success}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your registered email"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Not registered yet?{' '}
          <button onClick={() => onTogglePage('register')} className="text-orange-600 font-semibold hover:underline">
            New Registration
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

export default Login;
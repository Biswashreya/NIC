import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {currentPage === 'login' ? (
        <Login onTogglePage={setCurrentPage} />
      ) : currentPage === 'register' ? (
        <Register onTogglePage={setCurrentPage} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;

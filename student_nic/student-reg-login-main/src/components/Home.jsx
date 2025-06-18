import React, { useState } from 'react';
const Home = ({ onLogout }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50/50 p-4">
      <header className="w-full bg-white shadow-md py-3 mb-8">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <img src="/emblem.png" alt="Emblem of India" className="h-16 w-16 mr-4" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/EBF4FF/333333?text=Logo'; }}/>
            <div>
              <h1 className="text-xl font-bold text-blue-800">संघ लोक सेवा आयोग</h1>
              <h2 className="text-lg font-semibold text-orange-600">Union Public Service Commission</h2>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </header>
      
      <main className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold text-blue-800">
          Welcome to NIC
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          National Informatics Centre | राष्ट्रीय सूचना विज्ञान केंद्र
        </p>
      </main>

      <footer className="w-full text-center text-gray-600 py-6 mt-8">
        <p>&copy; {new Date().getFullYear()} Union Public Service Commission. All rights reserved.</p>
        <p className="text-sm">Designed & Developed by National Informatics Centre (NIC)</p>
      </footer>
    </div>
  );
};

export default Home;
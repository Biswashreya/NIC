// // src/App.jsx
// import React, { useState } from 'react';
// import Login from './components/Login';
// import Register from './components/Register';


// // Main App Component to handle page navigation
// function App() {
//   // State to track the current view ('login' or 'register')
//   const [currentPage, setCurrentPage] = useState('login');

//   // Function to toggle between login and registration pages
//   const togglePage = (page) => {
//     setCurrentPage(page);
//   };
  

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans">
//       {/* It will check the condition to render the Login or Register component based on state */}
//       {currentPage === 'login' ? (
//         <Login onTogglePage={togglePage} />
//       ) : (
//         <Register onTogglePage={togglePage} />
//       )}
     
//     </div>
//   );
// }

// export default App;

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

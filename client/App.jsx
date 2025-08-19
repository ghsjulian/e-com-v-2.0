import React, { useEffect } from "react";

const App = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Hello, Tailwind + React + Vite
        </h1>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
    );
};

export default App;

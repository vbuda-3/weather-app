import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import Search from "./pages/Search.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SavedSearches from "./pages/SavedSearches.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved-searches" element={<SavedSearches />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </>
  );
}

export default App;

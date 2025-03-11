import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import GeneTablePage from "./pages/GeneTablePage";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (

  <HashRouter> 
      <header>
        <Navbar />  
      </header>
      
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/gene-table" element={<GeneTablePage />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>

  </HashRouter>  

  );
};

export default App;
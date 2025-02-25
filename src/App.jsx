import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import React from "react";
import DatabasePage from "./pages/DatabasePage";

function App() {
  return (
  <>
    <HashRouter> 
    <Wrapper>
        <Navbar/>
    </Wrapper>
  
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Data" element={<DatabasePage />} />
    </Routes>
  
  </HashRouter>  
</>
  )
}

export default App

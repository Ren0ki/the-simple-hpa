import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import GeneTablePage from "./pages/GeneTablePage";
import AntibodyTablePage from "./pages/AntibodyTablePage";
import RNABloodTablePage from "./pages/RNABloodTablePage";
import RNACellLineTablePage from "./pages/RNACellLineTablePage";
import RNACancerTablePage from "./pages/RNACancerTablePage";
import RNASingleCellTablePage from "./pages/RNASingleCellTablePage";
import RNATissueTablePage from "./pages/RNATissueTablePage";
import BloodTablePage from "./pages/BloodTablePage";
import ClusterTablePage from "./pages/ClusterTablePage";
import PrognosticNavPage from "./pages/PrognosticNavPage";
import RNANavPage from "./pages/RNANavPage";
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
        <Route path="/antibody-table" element={<AntibodyTablePage />} />
        <Route path="/rna-blood-table" element={<RNABloodTablePage />} />
        <Route path="/rna-cell-line-table" element={<RNACellLineTablePage />} />
        <Route path="/rna-cancer-table" element={<RNACancerTablePage />} />
        <Route path="/rna-single-cell-table" element={<RNASingleCellTablePage />} />
        <Route path="/rna-tissue-table" element={<RNATissueTablePage />} />
        <Route path="/blood-table" element={<BloodTablePage/>} />
        <Route path="/cluster-table" element={<ClusterTablePage/>}/>
        <Route path="/prognostics" element={<PrognosticNavPage/>}/>
        <Route path="/rna-expressions" element={<RNANavPage/>} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>

  </HashRouter>  

  );
};

export default App;
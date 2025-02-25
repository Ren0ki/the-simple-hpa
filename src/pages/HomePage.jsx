import Wrapper from "../components/Wrapper";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import styles from "../styles/home.module.css";
import React from "react";

const HomePage = () => {

  const [type, setType] = useState(""); 
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState("");

      useEffect(() => {
      fetch("https://web.ics.purdue.edu/~glagman/profile-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => {
      setTypes(data.types);

    });
  }, []);

  const handleTypeChange = (event) => {
    setType(event.target.value);
    setPage(1);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };
    
  const handleClear = () => {
    setType("");
    setSearch("");
  };

  
  return (

    <Wrapper>

      <div className="filter-wrapper">
        
        <div className="filter--select">

        </div>
          
        <div className="filter--search">

          <input
            type="text"
            id="search"
            onChange={handleSearchChange}
            value={search}
          />

        <button onClick={handleClear}> Search </button>

        </div>

      <p> 
            <b>The Cancer resource - Explore the expression 
            profiles of human cancers </b>
      </p>

      <p> 
            This resource contains Cancer information based on 
            mRNA and protein expression data from 31 different 
            forms of human cancer, together with millions of 
            in-house generated immunohistochemically stained 
            tissue sections images and Kaplan-Meier plots 
            showing the correlation between mRNA expression of 
            each human protein gene and cancer patient survival. 
            More information about the specific content and the 
            generation and analysis of the data in the resource 
            can be found in the<b> <u>Methods Summary.</u></b>
            <br />
            <br /> Learn about: 
      
      <li> 
           if the mRNA expression of a gene is prognostic for 
           patient survival in each of the cancer types
      </li>

      <li className="homeLink">
           if a gene is enriched in a particular cancer type (specificity)
      </li>

      <li>
           the catalogue of genes elevated in each of the cancer types
      </li>
      </p>
        </div>
             

</Wrapper>
);
};

export default HomePage;
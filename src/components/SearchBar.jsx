import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { useNavigate } from "react-router";

const SearchBar = () => {

  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState([]);
  const [search] = useState("");
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

      useEffect(() => {
      fetch("https://web.ics.purdue.edu/~glagman/protein-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => {
      setTitles(data.titles);

    });
  }, []);

  const handleTitleChange = (event) => {
    const selectedTitle = event.target.value;
    setTitle(selectedTitle);

    if(selectedTitle === "Genes"){

      navigate("/gene-table");

    }
    else if(selectedTitle === "Antibody and Protein Localization")
    {
      navigate("/antibody-table");
    }
    else if(selectedTitle === "RNA Expressions")
    {
      navigate("/rna-expressions");
    }
    else if(selectedTitle === "Blood Concentration")
    {
      navigate("/blood-table");
    }
    else if(selectedTitle === "Expression Clusters")
    {
      navigate("/cluster-table");
    }
    else if(selectedTitle === "Cancer Prognostics")
    {
      navigate("/prognostics");
    }
  };

    useEffect(() => {
    fetch(`https://web.ics.purdue.edu/~glagman/protein-app/fetch-data-with-filter.php?title=${title}`
    )
    .then((res) => res.json())
    .then((data) => {
    setCount(data.count);
    })
    }, [title, search]);
    

  return (

    <Wrapper>

      <div className="filter--select">
        
        <label htmlFor="title-select"> </label>
           
            <select 
              id="title-select" 
              onChange={handleTitleChange} 
              value={title}
            >

            <option value=""> Search </option>

            {titles.map((title) => (
              <option key={title} value={title}>
                  {title}
              </option>
            ))}

            </select>

        </div>
        
</Wrapper>
);
};

export default SearchBar;
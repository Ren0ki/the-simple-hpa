import Wrapper from "../components/Wrapper";
import melanoma from "../assets/MelanomaCard.png";
import pancreatic from "../assets/PancreaticCard.png";
import Proteome from "../components/Proteome";
import hex1 from "../assets/hex1.png";
import hex2 from "../assets/hex2.png";
import hex3 from "../assets/hex3.png";
const HomePage = () => {

  return (
    <Wrapper>
   <div>
  <td style={{width: "50%", padding: "5%", textAlign: "left", alignContent: "0"}} className="card">

      <p> This resource contains Cancer information based on mRNA and protein expression data from 31 different forms of human cancer, 
          together with millions of in-house generated immunohistochemically stained tissue sections images and Kaplan-Meier plots showing 
          the correlation between mRNA expression of each human protein gene and cancer patient survival. More information about the 
          specific content and the generation and analysis of the data in the resource can be found in the <u><b>Methods Summary.</b></u>
      </p>
      <br/>

      <p> Learn about: </p>

      <ul>
        <li> if the mRNA expression of a gene is prognostic for patient survival in each of the cancer types </li>
        <li> if a gene is enriched in a particular cancer type </li>
        <li> the catalogue of genes elevated in each of the cancer types </li>
      </ul> 
      
      <br/><br/>
      <img src={hex1} alt="hexagon" style={{width: "2%", top: "1%"}} /> The Human Cancer Proteome
      <br/><br/>
      <img src={hex2} alt="hexagon" style={{width: "2%"}} /> Hallmarks of Cancer
      <br/> <br/>
      <img src={hex3} alt="hexagon" style={{width: "2%"}} /> Summary of Cancer Statistics From Relevant Databses

    </td>

    <td style={{width: "50%"}}> 
         
         <img src={melanoma} alt="melanoma" style={{width: "500px"}} className="card"/>
         <br /><br/>
         <img src={pancreatic} alt="pancreatic" style={{width: "500px"}} className="card" />
    </td>
      
   </div>

   </Wrapper>
   
    );
};

export default HomePage;
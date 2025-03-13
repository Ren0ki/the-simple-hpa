import RNATissueTable from "../tables/RNATissueTable";
import Wrapper from "../components/Wrapper";
import RNABloodTable from "../tables/RNABloodTable";

const RNATissueTablePage = () => {
  
    return (
      <Wrapper> 
      <br/><br/>
      <h1> RNA Tissue Expressions </h1>
      <br/>
        < RNATissueTable /> 
      </Wrapper>

    );
};

export default RNATissueTablePage;
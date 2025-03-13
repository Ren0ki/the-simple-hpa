import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

const RNANavPage = () => {
    return (

        <Wrapper>
         <br/><br/>
         <h1> Prognostic Data </h1>     
         <br/>
        <div className="cards">
            <Link to="/rna-blood-table">
                    RNA Blood Expressions
            </Link>
         </div>
         <div className="cards">
            <Link to="/rna-cancer-table">
                    RNA Cancer Expressions
            </Link>
         </div>
         <div className="cards">
            <Link to="/rna-cell-line-table">
                    RNA Cell Line Expressions
            </Link>
         </div>
         <div className="cards">
            <Link to="/rna-single-cell-table">
                    RNA Single-Cell Expressions
            </Link>
         </div>
         <div className="cards">
            <Link to="/rna-tissue-table">
                    RNA Tissue Expressions
            </Link>
         </div>
        </Wrapper>

    );
};

export default RNANavPage;
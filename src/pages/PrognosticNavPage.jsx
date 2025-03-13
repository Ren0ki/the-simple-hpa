import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

const PrognosticNavPage = () => {
    return (

        <Wrapper>
          <br/><br/>
         <h1> Prognostics </h1>     
         <br/>
        <div className="cards">
            <Link to="/">
                    Prognostics: A - H 
            </Link>
         </div>
         <div className="cards">
            <Link to="/">
                    Prognostics: K - L 
            </Link>
         </div>
         <div className="cards">
            <Link to="/">
                    Prognostics: O - S 
            </Link>
         </div>
         <div className="cards">
            <Link to="/">
                    Prognostics: T - U
            </Link>
         </div>
        </Wrapper>

    );
};

export default PrognosticNavPage;
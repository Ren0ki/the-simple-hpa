
import bloodData from "../data/BloodData.json";
import Wrapper from "../components/Wrapper";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const BloodTable = () => {

    const [page, setPage] = useState(1);
    const count = bloodData.length;
    const start = (page - 1) * 50;
    const end = start + 50;
    const paginated = bloodData.slice(start, end);

return(

<Wrapper>
<div>
   <table border="1px"> 
        <thead>
            <tr >
                <th> Gene </th>
                <th> Blood Concenetration Cluster </th>
                <th> Immunoassay Concentration (pg/L) </th>
                <th> Mass Spectrometry Concentration (pg/L) </th>
                
            </tr>
        </thead>

        <tbody>

                {paginated.map((item) => (

                    <tr key={item.id}>
                        <td className="data">{item["Gene"]}</td>
                        <td className="data">{item["cluster"]} </td>
                        <td className="data"> {item["IM"]} </td>
                        <td className="data"> {item["MS"]} </td>
                    </tr>
                ))}
        </tbody>
   </table> 
</div>
<br/><br/>
{count > 50 && (
<div className="pagination">
<button onClick = {() => setPage(page - 1)} disabled={page === 1}>
      <span className="sr-only"> Previous </span>
    </button>
             
    <span> {page}/{Math.ceil(count/50)} </span>
             
    <button onClick = {() => setPage(page + 1)} disabled={page >= Math.ceil(count/50)}> 
      <span className="sr-only"> Next </span>
    </button>

</div>
)}
</Wrapper>


    );

};

export default BloodTable;


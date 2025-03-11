import antibodyData from "../data/AntibodyData.json";
import Wrapper from "./Wrapper";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const AntibodyTable = () => {

    const [page, setPage] = useState(1);
    const count = antibodyData.length;
    const start = (page - 1) * 50;
    const end = start + 50;
    const paginated = antibodyData.slice(start, end);

return(

<Wrapper>
<div>
   <table border="1px"> 
        <thead>
            <tr >

                <th> Antibody </th>
                <th> Reference ID </th>
                <th> Immuno- Histochem </th>
                <th> Immuno- Fluorescence </th>
                <th> Subcellular Location </th>
                <th> Secretome Location </th>
                <th> Secretome Function </th>
                
            </tr>
        </thead>

        <tbody>

                {paginated.map((item) => (

                    <tr key={item.id}>
                        <td className="data">{item["Antibody"]} </td>
                        <td className="data"> {item["RRID"]} </td>
                        <td className="data"> {item["Reliability IH"]} </td>
                        <td className="data"> {item["Reliability IF"]} </td>
                        <td className="data"> {item["Subcellular location"]} </td>
                        <td className="data"> {item["Secretome location"]} </td>
                        <td className="data"> {item["Secretome function"]} </td>
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

export default AntibodyTable;


import rnaCancerData from "../data/RNACancerData.json";
import Wrapper from "../components/Wrapper";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const RNACancerTable = () => {

    const [page, setPage] = useState(1);
    const count = rnaCancerData.length;
    const start = (page - 1) * 50;
    const end = start + 50;
    const paginated = rnaCancerData.slice(start, end);

return(

<Wrapper>
<div>
   <table border="1px"> 
        <thead>
            <tr border>

                <th> Gene </th>
                <th> RNA Cancer Specificity </th>
                <th> Distribution </th>
                <th> Specificity Score </th>
                <th> FPKM </th>
            </tr>
        </thead>

        <tbody>

                {paginated.map((item) => (

                    <tr key={item.id}>
                        <td className="data"> {item["Gene"]} </td>
                        <td className="data"> {item["specificity"]} </td>
                        <td className="data"> {item["distribution"]} </td>
                        <td className="data"> {item["score"]} </td>
                        <td className="data"> {item["fpkm"]} </td>

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

export default RNACancerTable;


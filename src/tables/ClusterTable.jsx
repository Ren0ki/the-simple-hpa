import clusterData from "../data/CLusterData.json";
import Wrapper from "../components/Wrapper";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const ClusterTable = () => {

    const [page, setPage] = useState(1);
    const count = clusterData.length;
    const start = (page - 1) * 50;
    const end = start + 50;
    const paginated = clusterData.slice(start, end);

return(

<Wrapper>
<div>
   <table border="1px"> 
        <thead>
            <tr>

                <th> Gene </th>
                <th> Blood Expression Cluster </th>
                <th> Tissue Expression Cluster </th>
                <th> Brain Expression Cluster </th>
                <th> Cell Line Expression Cluster </th>
                <th> Single Cell Expression Cluster </th>
            </tr>
        </thead>

        <tbody>

                {paginated.map((item) => (

                    <tr key={item.id}>

                        <td className="data"> {item["Gene"]} </td>
                        <td className="data"> {item["Blood expression cluster"]} </td>
                        <td className="data"> {item["Tissue expression cluster"]} </td>
                        <td className="data"> {item["Brain expression cluster"]} </td>
                        <td className="data"> {item["Cell line expression cluster"]} </td>
                        <td className="data"> {item["Single cell expression cluster"]} </td>

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

export default ClusterTable;


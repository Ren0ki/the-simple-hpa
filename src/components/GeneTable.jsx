import geneData from "../data/GeneData.json";
import Wrapper from "./Wrapper";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const GeneTable = () => {

    const [page, setPage] = useState(1);
    const count = geneData.length;
    const start = (page - 1) * 50;
    const end = start + 50;
    const paginated = geneData.slice(start, end);

return(

<Wrapper>
<div>
   <table border="1px"> 
        <thead>
            <tr>

                <th> Gene </th>
                <th> Gene Synonym </th>
                <th> Ensembl </th>
                <th> Gene Description </th>
                <th> Uniprot </th>
                <th> Chromosome </th>
                <th> Position </th>
            </tr>
        </thead>

        <tbody>

                {paginated.map((item) => (

                    <tr key={item.id}>

                        <td className="data"> {item.Gene} </td>
                        <td className="data"> {item["Gene synonym"]} </td>
                        <td className="data"> {item.Ensembl} </td>
                        <td className="data"> {item["Gene description"]} </td>
                        <td className="data"> {item.Uniprot} </td>
                        <td className="data"> {item.Chromosome} </td>
                        <td className="data"> {item.Position} </td>

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

export default GeneTable;


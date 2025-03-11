import human from "../assets/human.png";
import bladder from "../assets/bladder.png";
import brain from "../assets/brain.png";
import female from "../assets/female.png";
import hnn from "../assets/headAndNeck.png";
import intestine from "../assets/intestine.png";
import kidney from "../assets/kidney.png";
import liver from "../assets/liver.png";
import lung from "../assets/lung.png";
import male from "../assets/male.png"
import ovary from "../assets/ovary.png";
import pancreas from "../assets/pancreas.png";
import skin from "../assets/skin.png";
import thyroid from "../assets/thyroid.png";
import {Link} from "react-router-dom";
import {useState} from "react";
//import style from "../styles/proteome.css";

const Proteome = () => {

return(

<div className="pro">

<td style={{width: "50%"}}>
        <Link to="#"> Brain - Glioma </Link>
        <br/><br/><br/>
        <Link to="#"> Head and Neck </Link>
        <br/><br/><br/>
        <Link to="#"> Thyroid Gland </Link>
        <br/><br/><br/>
        <Link to="#"> Lung  </Link>
        <br/><br/><br/>
        <Link to="#"> Liver </Link>
        <br/><br/><br/>
        <Link to="#"> Assigned Male at Birth </Link>
        
        
    </td>

    <td style={{width: "15%"}}>
        <img src={brain} alt="brain" />
        <br/><br/><br/> 
        <img src={hnn} alt="head and neck" style={{width: "70%"}} />
        <br/><br/><br/>
        <img src={thyroid} alt="thyroid" />
        <br/><br/><br/>
        <img src={lung} alt="lung" />
        <br/><br/><br/>
        <img src={liver} alt="liver"/>
        <br/><br/><br/>
        <img src={male} alt="male" style={{width: "70%"}} />
    </td>

    <td style={{width: "33%"}}>
        <img src={human} alt="Human Anatomy" />
    </td>

    <td style={{width: "15%"}}>
        <img src={intestine} alt="intestine" style={{width: "70%"}} />
        <br/><br/><br/>
        <img src={female} alt="female" />
        <br/><br/><br/>
        <img src={ovary} alt="ovary" />
        <br/><br/><br/>
        <img src={pancreas} alt="pancreas"/>
        <br/><br/><br/>
        <img src={kidney} alt="kidney"  />
        <br/><br/><br/>
        <img src={bladder} alt="bladder" />
        <br/><br/><br/>
        <img src={skin} alt="skin" />
    </td>


    <td style={{width: "50%"}}>
        <Link to="#" > Intestine </Link>
        <br/><br/><br/>
        <Link to="#" > Assigned Female at Birth </Link>
        <br/><br/><br/>
        <Link to="#"> Ovary </Link>
        <br/><br/><br/>
        <Link to="#"> Pancreas </Link>
        <br/><br/><br/>
        <Link to="#"> Kidney </Link>
        <br/><br/><br/>
        <Link to="#"> Urinary Bladder </Link>
        <br/><br/><br/>
        <Link to="#"> Skin </Link>
        
        
    </td>

</div>


    );

};

export default Proteome;

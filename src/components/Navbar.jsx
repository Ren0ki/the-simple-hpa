import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/hpaLogo.png";
import SearchBar from "./SearchBar";

const Navbar = () => {

    
    return (

        <div className="head">
        <header>
        
        <h1> THE HUMAN PROTEIN ATLAS <img src={logo} width="50px" style={{marginLeft:"15px"}}/> 

        <nav className={`${styles["navbar"]}`}>
   
                <Link to="/"> Home </Link>
                <Link to="#"> Resources </Link>
                <Link to="#"> About </Link>
                <Link to="#"> News </Link>
                <Link to="#"> Learn </Link>
                <Link to="/gene-table"> Data </Link>
                <Link to="#"> Help </Link>
              
        </nav>
        </h1>
        <SearchBar />
        </header>
        </div>
    );
};

export default Navbar;


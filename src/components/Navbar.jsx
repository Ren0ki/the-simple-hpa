import styles from "../styles/navbar.module.css";
import DatabasePage from "../pages/DatabasePage";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = ({ mode, updateMode }) => {

    

    return (
        
        <header>
            <h1> THE HUMAN PROTEIN ATLAS</h1>
        <nav className={`${styles["navbar"]}`}>
            
                <li><Link to="#">Resources</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">News</Link></li>
                <li><Link to="#">Learn</Link></li>
                <li><Link to="/DatabasePage">Data</Link></li>
                <li><Link to="#">Help</Link></li>

        </nav>
        </header>
    );
};

export default Navbar;
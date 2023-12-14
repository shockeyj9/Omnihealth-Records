import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import DropdownMenu from './DropDown';
import { useState } from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
    const currentPage = useLocation().pathname;


    return (
        <>
            <header className="navbar">
            <img className="logonav" src='/logo/logo2.png' />
                <h1>Omnihealth</h1>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link style={{ textDecoration: "none", color: "black" }}
                            to="/Admission"
                            className={currentPage === '/Admission' ? 'nav-link active' : 'nav-link'}
                        >
                            Admission
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{ textDecoration: "none", color: "black" }}
                            to="/Client"
                            className={currentPage === '/Client' ? 'nav-link active' : 'nav-link'}
                        >
                            Clients
                        </Link>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                            Administration
                            <div className="dropdown-content">
                                <DropdownMenu />
                            </div>
                        </div>
                    </li>
                    <li>
                        < SearchBar />
                    </li>
                    <li className="nav-item">
                        <Link style={{ textDecoration: "none", color: "black" }}
                            to="/"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default NavTabs;





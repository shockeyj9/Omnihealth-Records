import React from "react";
import { Link, useLocation } from 'react-router-dom';

const DropdownMenu = () => {

    const currentPage = useLocation().pathname;

    return (
        <div>
            <ul className="dropdown-menu">
                <li className="dropdown-item">
                    <Link style = {{textDecoration:"none", color:"black"}}
                        to="/Payers"
                        className={currentPage === '/PayerAdministration' ? 'nav-link active' : 'nav-link'}
                    >
                        Payer Administration
                    </Link>
                </li>
                <li className="dropdown-item">
                    <Link style = {{textDecoration:"none", color:"black"}}
                        to="/ActivityAdministration"
                        className={currentPage === '/ActivityAdministration' ? 'nav-link active' : 'nav-link'}
                    >
                        Activity Administration
                    </Link>
                </li>
                <li className="dropdown-item">
                    <Link style = {{textDecoration:"none", color:"black"}}
                        to="/Programs"
                        className={currentPage === '/ProgramAdministration' ? 'nav-link active' : 'nav-link'}
                    >
                        Program Administration
                    </Link>
                </li>
                <li className="dropdown-item">
                    <Link style = {{textDecoration:"none", color:"black"}}
                        to="/EmployeeAdministration"
                        className={currentPage === '/EmployeeAdministration' ? 'nav-link active' : 'nav-link'}
                    >
                        Employee Administration
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;



import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import DropdownMenu from './DropDown';
import { useState } from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
    const currentPage = useLocation().pathname;

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <>
            <header className="navbar">
            <img className="logonav" src='/logo/logo2.png' />
                <h1>Omnihealth</h1>
                <ul className="nav nav-tabs">
                    {/* <li className="nav-item">
                        <Link style={{ textDecoration: "none", color: "black" }}
                            to="/FrontDesk"
                            //   will be front desk
                            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === '/FrontDesk' ? 'nav-link active' : 'nav-link'}
                        >
                            Front Desk
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link style={{ textDecoration: "none", color: "black" }}
                            to="/Admission"
                            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === '/Admission' ? 'nav-link active' : 'nav-link'}
                        >
                            Admission
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link style={{ textDecoration: "none", color: "black" }}
                            // to client appointment page
                            to="/Schedule"
                            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === '/Schedule' ? 'nav-link active' : 'nav-link'}
                        >
                            Schedule
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link style={{ textDecoration: "none", color: "black" }}
                            to="/Client"
                            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === '/Client' ? 'nav-link active' : 'nav-link'}
                        >
                            Client
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





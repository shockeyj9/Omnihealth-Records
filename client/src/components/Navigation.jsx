import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import DropdownMenu from './DropDown';
import { useState } from 'react';
import Auth from '../utils/auth'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
    const currentPage = useLocation().pathname;
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        window.location.replace('/')
      };

    return (
        <>
            <header className="navbar">
            <img className="logonav" src='/logo/logo2.png' />
                <h1>Omnihealth</h1>
                {Auth.loggedIn() ? (

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
                    <li className="nav-item" >
                    <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
                    </li>
                </ul>
                ):(
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            {currentPage === '/Signup'?(
                                <Link style={{ textDecoration: "none", color: "black" }}
                                to="/"
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Login
                            </Link>
                            ):(

                        <Link style={{ textDecoration: "none", color: "black" }}
                            to="/Signup"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Signup
                        </Link>
                            )}
                    </li>
                    </ul>
                )}
            </header>
        </>
    );
}

export default NavTabs;





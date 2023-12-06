import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/FrontDesk"
        //   will be front desk
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/FrontDesk' ? 'nav-link active' : 'nav-link'}
        >
          Front Desk
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Admission"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Admission' ? 'nav-link active' : 'nav-link'}
        >
          Admission
        </Link>
      </li>
      <li className="nav-item">
        <Link
        // to client appointment page
          to="/Schedule"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Schedule' ? 'nav-link active' : 'nav-link'}
        >
          Schedule
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Client"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/CLient' ? 'nav-link active' : 'nav-link'}
        >
          Client
        </Link>
      </li>
      <li className="nav-item">
        {/* this needs to be a drop down menu */}
        <div
        // drop down menu with links
          to="/Administration"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Administration' ? 'nav-link active' : 'nav-link'}
        >
          Administration
        </div>
      </li>
      <li>
      < SearchBar/>
      </li>
      <li>
       <Link
       to="/"
       className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
       >
        Logout
       </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
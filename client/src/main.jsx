import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'


import App from './App.jsx'
import Login from './pages/Login';
import Error from './pages/Error';
// import FrontDesk from './pages/FrontDesk';
// import Admission from './pages/Admission';
// import Schedule from './pages/Schedule';
// import Client from './pages/Client';
import Payers from './pages/Payers.jsx';

// import PayerAdministration from "./pages/PayerAdministration"
// import ActivtyAdministration from "./pages/ActivityAdministration"
import Programs from "./pages/Programs"
import EmployeeAdministration from "./pages/EmployeeAdministration"
import AddPayer from "./pages/AddPayer";
import AddProgram from "./pages/AddProgram";
import AddActivity from "./pages/AddActivity.jsx"
import SinglePayer from './pages/SinglePayer.jsx';
import SingleProgram from './pages/SingleProgram.jsx';
import SingleEmployee from "./pages/SingleEmployee.jsx";
import AddEmployee from "./pages/AddEmployee.jsx"
// drop downs


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Login />
      },
      //  {
      //    path: '/FrontDesk',
      //    element: <FrontDesk />
      // },
      // {
      //   path: '/Admission',
      //   element: <Admission />
      // },
      // {
      //   path: '/Schedule',
      //   element: <Schedule />
      // },
      // {
      //   path: '/Client',
      //   element: <Client />
      // },
      // {
      //   path:'/PayerAdministration',
      //   element: <PayerAdministration />
      // },
      // {
      //   path:'/ActivityAdministration',
      //   element: <ActivityAdministration />
      // },
      {
        path:'/Programs',
        element: <Programs />
      },
      {
        path:'/EmployeeAdministration',
        element: <EmployeeAdministration />
      },
      {
        path:'/AddPayer',
        element: <AddPayer />
      },
      {
        path:'/AddProgram',
        element: <AddProgram />
      },
      {
        path:'/AddActivity',
        element: <AddActivity />
      },
      {
        path:'/AddEmployee',
        element: <AddEmployee />
      },
    //  need administration sublinks/dropdowns
    {
      path:'/Payers',
      element: <Payers />
    },
    {
      path: '/Employee/:employeeId',
      element: <SingleEmployee />,
    },
    {
      path: '/Payer/:payerId',
      element: <SinglePayer />,
    },
    {
      path: '/Program/:programId',
      element: <SingleProgram />,
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)




import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'


import App from './App.jsx'
import Login from './pages/Login';
import Signup from './pages/Signup.jsx';
import Error from './pages/Error';
// import FrontDesk from './pages/FrontDesk';
import Admission from './pages/Admission';
// import Schedule from './pages/Schedule';
import Client from './pages/Client';
import Payers from './pages/Payers.jsx';
import ActivtyAdministration from "./pages/ActivityAdministration"
import Programs from "./pages/Programs"
import EmployeeAdministration from "./pages/EmployeeAdministration"
import AddPayer from "./pages/AddPayer";
import AddProgram from "./pages/AddProgram";
import AddActivity from "./pages/AddActivity.jsx"
import SinglePayer from './pages/SinglePayer.jsx';
import SingleActivity from './pages/SingleActivity.jsx';
import SingleProgram from './pages/SingleProgram.jsx';
import SingleEmployee from "./pages/SingleEmployee.jsx";
import SingleClient from "./pages/SingleClient.jsx";
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
      {
        path: '/Signup',
        element: <Signup />
      },
      //  {
      //    path: '/FrontDesk',
      //    element: <FrontDesk />
      // },
      {
        path: '/Admission',
        element: <Admission />
      },
      // {
      //   path: '/Schedule',
      //   element: <Schedule />
      // },
      {
        path: '/Client',
        element: <Client />
      },
       {
         path:'/ActivityAdministration',
         element: <ActivtyAdministration />
       },
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
      path: '/Client/:clientId',
      element: <SingleClient />,
    },
    {
      path: '/Activity/:activityId',
      element: <SingleActivity />,
    },
    {  path: '/Program/:programId',
      element: <SingleProgram />,
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)




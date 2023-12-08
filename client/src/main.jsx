import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'


import App from './App.jsx'
// import Login from './pages/Login';
// import Error from './pages/Error';
// // import FrontDesk from './pages/FrontDesk';
// // import Admission from './pages/Admission';
// // import Schedule from './pages/Schedule';
// // import Client from './pages/Client';
import Payers from './pages/Payers.jsx';
// import PayerAdministration from "./pages/PayerAdministration"
// import ActivtyAdministration from "./pages/ActivityAdministration"
// import ProgramAdministration from "./pages/ProgramAdministration"
// import EmployeeAdministration from "./pages/EmployeeAdministration"


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
      // // {
      // //   path: '/FrontDesk',
      // //   element: <FrontDesk />
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
      // // },
      // {
      //   path: '/Payers',
      //   element: <Payers />
      // },
      // // {
      // //   path:'/PayerAdministration',
      // //   element: <PayerAdministration />
      // // },
      // // {
      // //   path:'/ActivityAdministration',
      // //   element: <ActivityAdministration />
      // // },
      // {
      //   path:'/ProgramAdministration',
      //   element: <ProgramAdministration />
      // },
      // {
      //   path:'/EmployeeAdministration',
      //   element: <EmployeeAdministration />
      // },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

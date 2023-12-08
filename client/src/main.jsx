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
      //   path: '/FrontDesk',
      //   element: <FrontDesk />
      // },
      // {
      //   path:'/Admission',
      //   element: <Admission />
      // },
      // {
      //   path:'/Schedule',
      //   element: <Schedule />
      // },
      // {
      //   path:'/Client',
      //   element: <Client />
      // },
    //  need administration sublinks/dropdowns
    {
      path:'/Payers',
      element: <Payers />
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

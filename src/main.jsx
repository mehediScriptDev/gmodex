import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './Components/Home.jsx';
import Error from './Components/Error.jsx';
import Girls from './Components/Girls.jsx';
import Homesection from './Components/Homesection.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element: <Homesection></Homesection>,
       
      },
      {
            path:'/girls',
            element: <Girls></Girls>
          }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

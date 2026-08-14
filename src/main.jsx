import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import FormCr from './FormCr.jsx';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
const routi = createBrowserRouter([
  {path:"/",
   element:<Home/>,
   errorElement:<NotFound/>
},{
  path:"/login",
  element:<FormCr/>,
   errorElement:<NotFound/>
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routi}/>
  </StrictMode>,
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App';
import Info from './pages/chiSiamo';
import Squadra from './pages/squadra';
import Contatti from './pages/contatti';
import Partners from './pages/partners';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"/chiSiamo",
    element: <Info></Info>,
  },
  {
    path:"/squadra",
    element: <Squadra></Squadra> ,
  },
  {
    path:"/contatti",
    element: <Contatti></Contatti>
  },
  {
    path:"/partners",
    element: <Partners></Partners>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

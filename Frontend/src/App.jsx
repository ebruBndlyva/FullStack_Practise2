import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import ROUTES from './Routes/route';
import "./responsive.css"
const routes =createBrowserRouter(ROUTES)
function App() {


  return (
    <RouterProvider router={routes}/>
  )
}

export default App

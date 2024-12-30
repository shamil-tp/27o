import ReactDom from "react-dom/client";

import Navbar from "./components/Navbar/navbar"

import Table from "./components/Table/tableBody"
import Page2 from "./components/Page/page2"
import Form from "./components/Form/form"

import { Outlet , RouterProvider, createBrowserRouter} from "react-router-dom";


const Main = ()=>{
    return <>
        <Navbar/>
        <Outlet/>
        
    </>
}

let routesValues=createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Table/>
      },
      {
        path:'/page2',
        element:<Page2/>
      },
      {
        path:'/add',
        element:<Form/>
      },
    ]
  }
])

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={routesValues} />);
// root.render(<Main />);

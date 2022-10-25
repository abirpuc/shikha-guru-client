import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Form/Login/Login";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
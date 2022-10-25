import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Form/Login/Login";
import NotFound from "../../NotFound/NotFound";
import Courses from "../../pages/Courses/Courses/Courses";


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
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])
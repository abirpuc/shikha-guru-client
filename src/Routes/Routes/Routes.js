import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Form/Login/Login";
import Register from "../../pages/Form/Register/Register";
import Home from "../../pages/Home/Home/Home";
import Main from "../../pages/Layout/Main";

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
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
]);
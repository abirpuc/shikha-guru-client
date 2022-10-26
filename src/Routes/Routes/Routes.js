import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Form/Login/Login";
import NotFound from "../../NotFound/NotFound";
import Courses from "../../pages/Courses/Courses/Courses";
import SingleCourse from "../../pages/Courses/SingleCourse/SingleCourse";
import Register from "../../pages/Form/Register/Register";
import Blog from "../../pages/Blog/Blog";


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
                element:<Courses></Courses>,
                loader: ({params}) => fetch('http://localhost:5000/all-courses')
            },
            {
                path:'/single-courses/:id',
                element:<SingleCourse></SingleCourse>,
                loader:({params})=>fetch(`http://localhost:5000/single-courses/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
            
        ]
    },
    
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])
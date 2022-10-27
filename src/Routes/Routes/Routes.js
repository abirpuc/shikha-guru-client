import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Form/Login/Login";
import NotFound from "../../NotFound/NotFound";
import Courses from "../../pages/Courses/Courses/Courses";
import SingleCourse from "../../pages/Courses/SingleCourse/SingleCourse";
import Register from "../../pages/Form/Register/Register";
import Blog from "../../pages/Blog/Blog";
import Condition from "../../pages/TreamsAndcondition/Condition";
import Details from "../../pages/Details/Details";
import PrivateRouter from "../../Router/PrivateRouter/PrivateRouter";
import CheckOut from "../../pages/CheckOut/CheckOut";


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
                loader: ({params}) => fetch('https://shikka-guru-server.vercel.app/all-courses')
            },
            {
                path:'/single-courses/:id',
                element:<SingleCourse></SingleCourse>,
                loader:({params})=>fetch(`https://shikka-guru-server.vercel.app/single-courses/${params.id}`)
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
            },
            {
                path:'/details/:id',
                element:<PrivateRouter><Details></Details></PrivateRouter>,
                loader:({params}) => fetch(`https://shikka-guru-server.vercel.app/details/${params.id}`)
            },
            {
                path:'/checkout',
                element:<PrivateRouter><CheckOut></CheckOut></PrivateRouter>
            }
          
            
        ]
    },
    {
        path:'/condition',
        element:<Condition></Condition>
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])
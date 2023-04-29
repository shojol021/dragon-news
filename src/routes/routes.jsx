import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/home/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import SingleNews from "../pages/home/singleNews/SingleNews";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import LoginLayout from "../layouts/LoginLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: '/category',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: ':id',
                element: <Category></Category>
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: ':id',
                element: <PrivateRoute><SingleNews></SingleNews></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
        
    }
])

export default router;
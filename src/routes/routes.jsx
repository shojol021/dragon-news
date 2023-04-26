import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Category from "../pages/home/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import SingleNews from "../pages/home/singleNews/SingleNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'category/:id',
                element: <Category></Category>
            }
        ]
    },
    {
        path: '/news/:id',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <SingleNews>   </SingleNews>,
                loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
        
    }
])

export default router;
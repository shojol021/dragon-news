import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Category from "../pages/home/category/Category";
import NewsLayout from "../layouts/NewsLayout";

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
        path: '/news',
        element: <NewsLayout></NewsLayout>
    }
])

export default router;
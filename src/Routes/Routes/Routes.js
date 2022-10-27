import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Login from "../../Pages/Auth/Login/Login";
import SignUp from "../../Pages/Auth/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Faq from '../../Pages/Faq/Faq';
import NotFound from "../../Pages/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/course/:courseId',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-ashrafcse3-ashrafcse3.vercel.app/course/${params.courseId}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-ashrafcse3-ashrafcse3.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/*',
                element: <NotFound></NotFound>
            },
        ]
    }
]);
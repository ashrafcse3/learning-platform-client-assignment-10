import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Courses from "../../Pages/Courses/Courses";

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
                element: <p>Hello</p>
            }
        ]
    }
]);
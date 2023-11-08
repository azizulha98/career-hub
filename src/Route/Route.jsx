import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Statistics from "../Pages/Statistics/Statistics";
import Applied from "../Pages/Applied/Applied";
import Blogs from "../Pages/Blogs/Blogs";

const myCreateRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Statistics /> },
      { path: '/applied', element: <Applied /> },
      { path: '/blogs', element: <Blogs /> },
    ]
  }
])

export default myCreateRoute;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/About/About";

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
         children: [
          {
            path: "/contact",
            element: <Contact></Contact>
          },
          {
            path: "/about",
            element: <AboutUs></AboutUs>
          },
          
        ]
    }
])
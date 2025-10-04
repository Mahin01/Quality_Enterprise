import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Products from "../Pages/Products/Products";

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
          {
            path: "/services",
            element: <Services></Services>
          },
          {
            path: "/products",
            element: <Products></Products>
          },
        ]
    }
])
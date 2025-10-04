import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";

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
            element: <About></About>
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
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
         children: [
          {
            path: "/",
            element: <Home></Home>
          },
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
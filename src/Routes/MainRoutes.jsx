import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import IndustrialEquipmentSupplyPage from "../Pages/Services/IndustrialEquipmentSupply";
import OperationalExcellencePage from "../Pages/Services/OperationalExcellence";
import CustomEngineeringSolutionsPage from "../Pages/Services/CustomEngineering";
import CalibrationCompliancePage from "../Pages/Services/Compliance&Calibration";

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
            path: "/services/industrial_equipment_Supply",
            element: <IndustrialEquipmentSupplyPage></IndustrialEquipmentSupplyPage>
          },
          {
            path: "/services/operational_excellence_service",
            element: <OperationalExcellencePage></OperationalExcellencePage>
          },
          {
            path: "/services/custom_engineering_solutions",
            element: <CustomEngineeringSolutionsPage></CustomEngineeringSolutionsPage>
          },
          {
            path: "/services/calibration&compliance",
            element: <CalibrationCompliancePage></CalibrationCompliancePage>
          },
          {
            path: "/products",
            element: <Products></Products>
          },
        ]
    }
])
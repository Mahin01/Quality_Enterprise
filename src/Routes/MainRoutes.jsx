import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import IndustrialEquipmentSupplyPage from "../Pages/Services/IndustrialEquipmentSupply";
import OperationalExcellencePage from "../Pages/Services/OperationalExcellence";
import CustomEngineeringSolutionsPage from "../Pages/Services/CustomEngineering";
import CalibrationCompliancePage from "../Pages/Services/Compliance&Calibration";
import ValvesFlowControlPage from "../Pages/Products/Valves&flow_control";
import SealingSolutionsPage from "../Pages/Products/Sealing_Solutions";
import ConveyorBeltsPage from "../Pages/Products/CoveyorBeltsPage";
import SparePartsPage from "../Pages/Products/SpareParts&Accessories";
import PlasticRubberPage from "../Pages/Products/Plastic&RubberEngineering";

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
            path: "/services/MEP_Works_&_engineering_solutions",
            element: <CustomEngineeringSolutionsPage></CustomEngineeringSolutionsPage>
          },
          {
            path: "/services/calibration&compliance",
            element: <CalibrationCompliancePage></CalibrationCompliancePage>
          },
          {
            path: "/products/Valves&Flow_Coontrol_Equipments",
            element: <ValvesFlowControlPage></ValvesFlowControlPage>
          },
          {
            path: "/products/Sealing_Solutions",
            element: <SealingSolutionsPage></SealingSolutionsPage>
          },
          {
            path: "/products/Conveyor_Belts",
            element: <ConveyorBeltsPage></ConveyorBeltsPage>
          },
          {
            path: "/products/Spare_Parts&Accessories",
            element: <SparePartsPage></SparePartsPage>
          },
           {
            path: "/products/Plastic_Parts&Rubber_Engineering_Materials",
            element: <PlasticRubberPage></PlasticRubberPage>
          },
          
        ]
    }
])
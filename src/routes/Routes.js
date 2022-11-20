import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../Dashboard/AddDoctor";
import AllUsers from "../Dashboard/AllUsers";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import MyAppoinment from "../Dashboard/Dashboard/MyAppoinment";
import ManageDoctors from "../Dashboard/ManageDoctors";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Main from "../layouts/Main";
import Appoinment from "../pages/Appoinment/Appoinment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/appoinment",
                element: <Appoinment></Appoinment>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            },
        ]
    }
]);
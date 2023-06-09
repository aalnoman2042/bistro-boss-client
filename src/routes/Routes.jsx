import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/shared/secret/Secret";
import DashingBoard from "../layout/DashingBoard";
import MyCart from "../pages/DashBoard/myCart/MyCart";
import AllUsers from "../pages/DashBoard/myCart/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItems/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/DashBoard/manageItems/ManageItems";
import Payment from "../pages/DashBoard/payment/Payment";
  

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path:'/login',
          element: <Login></Login>

        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path:"/secret",
          element:<PrivateRoutes><Secret></Secret> </PrivateRoutes>
        }
      ],
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><DashingBoard></DashingBoard></PrivateRoutes>,
      children:[
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path:  'payment',
          element: <Payment></Payment>

        },
        // admin  routes
        {
          path: 'allusers',
          element:<AdminRoutes> <AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:'addItem',
          element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
        },
        {
          path: 'manageitems',
          element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        }
      ]
    }
  ]);

 
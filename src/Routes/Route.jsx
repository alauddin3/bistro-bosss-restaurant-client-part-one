import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import UsingReactForm from "../Pages/SignUp/UsingReactForm";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "order-food/:category",
        element: <Order></Order>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>
      },
      {
        path: "sign-up-react-form",
        element: <UsingReactForm></UsingReactForm>
      },
      {
        path: "secret-route",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
    
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:'mycart',
        element:<MyCart></MyCart>,
      }
    ]
  }
]);
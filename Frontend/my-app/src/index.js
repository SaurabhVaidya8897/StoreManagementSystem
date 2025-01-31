import "./style.css";
import ReactDOM from 'react-dom';
import App from './Component/App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// React Routing Start

import {
    createBrowserRouter,
    Form,
    RouterProvider,
  } from "react-router-dom";



import About from './Component/About';
import Login from './Component/Login';
import Home from './Component/Home';
import Register from "./Component/Register";
import Contact from "./Component/Contact";
import Admin from "./Component/Admin";
import ForgotPwd from "./Component/ForgotPwd";
import Agent from "./Component/Agent";
import ServiceCarousel from "./Component/Carousel_Cleaning";
import AdminRegistrationPage from "./Component/AdminRegistrationPage";
//import AdminLogin from "./Component/Admin/Adminlogin";



  
  var projectroute = createBrowserRouter([

    {
        path:"/",
        element:<App></App>,
        children:
        [ 
            
            {
                index:"home",
                element:<Home></Home>
            },
            {

            path:"about",
            element:<About></About>
        },
         {
            path:"login",
            element:<Login></Login>
         }
         ,
         {
            path:"register",
            element:<Register></Register>
         },
         {
            path:"admin",
            element:<Admin></Admin>
         },
         {
            path:"agent",
            element:<Agent></Agent>
         }
         ,
         {
            path:"contact",
            element:<Contact></Contact>
         },
         {
            path:"pwd",
            element:<ForgotPwd></ForgotPwd>
         }
          ,
          {
            path:"services",
            element:<ServiceCarousel></ServiceCarousel>
          }
          ,
          {
            path:"adminRegister",
            element:<AdminRegistrationPage></AdminRegistrationPage>
          }
      
       ]
    }
   

  ]);

  
const ans=ReactDOM.createRoot(document.getElementById("root"));

ans.render(
    <RouterProvider router={projectroute}>

    </RouterProvider>
     )
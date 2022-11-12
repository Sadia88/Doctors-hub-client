import Login from "../Login/Login/Login";
import Registration from "../Login/Registration/Registration";
import Appointment from "../Pages/Appointment/Appointment/Appointment";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            
        },
        {
            path: '/home',
            element:<Home></Home>,

        },
        {
            path: '/login',
            element:<Login></Login>,

        },
        {
            path: '/registration',
            element:<Registration></Registration>,

        }
        ,
        {
            path: '/appointment',
            element:<Appointment></Appointment>,

        }
      ]
    },
  ]);

  export default router
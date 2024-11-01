import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Task from "../pages/Task";


export const mainRoute = createBrowserRouter([
    {
        path:"/register",
        element:<Register/>,
    },
    {
        path:"/sign-in",
        element:<SignIn/>,
    },
    {
        path:"/",
      element:  <PrivateRoute>
      <Task/>,
      </PrivateRoute>
    },
   
])
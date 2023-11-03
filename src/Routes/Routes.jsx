import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Home/Login/Login";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() =>fetch('/news.json')
            },
            {
                path:"/news/:id",
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:() =>fetch('/news.json')
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default router;
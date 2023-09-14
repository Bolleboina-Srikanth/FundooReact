import React from "react";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import SignIn from "../Pages/SignIn/signIn";
import Signup from '../Pages/SignUp/RegisterationForm';
import Dashboard from "../Components/Dashboard/Dashboard";
import AuthRoute from  "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";


function Router()
{
    return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path={"/"} element={<AuthRoute><SignIn/></AuthRoute>}/>
            <Route  path={"/Registeration"} element={<AuthRoute><Signup/></AuthRoute>}/>
            <Route  path={"/Dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}

export default Router;
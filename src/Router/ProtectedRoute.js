import {outlet, Navigate} from "react-router-dom";
import React, {children} from "react";

const Protecteed = ({ children}) => {
    
    if(localStorage.getItem("token"))
    {
       return children;
    }
    return <Navigate to="/" />;
}
export default Protecteed;
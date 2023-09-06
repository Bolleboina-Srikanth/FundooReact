import React from "react";
import axios from "axios";

export const signIn = async (obj) => {
    let response = await axios.post(
        // "https://localhost:44392/api/User/login",
       " https://fundoonoteapp.azurewebsites.net/api/User/login",
         obj
         );
    return response;
}




export const SignUp = async (obj) => {
    let response = await axios.post(
        // "https://localhost:44392/api/User/Register",
        " https://fundoonoteapp.azurewebsites.net/api/User/Register",
         obj
         );
    return response;
}
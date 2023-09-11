import React from "react";
import axios from "axios";


let token;
function NotesAuth() {
    return token =
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }

    }
}
export const CreateNotes = async (notes) => {
    let response = await axios.post(
        // "https://localhost:44392/api/User/login",
        " https://fundoonoteapp.azurewebsites.net/api/Note/Notemaking",
        notes, NotesAuth()
    )
    console.log(response);
    return response;
}


export const GetAllNotesForUser = async () => {
    let response = await axios.get(
        // "https://localhost:44392/api/User/login",
        " https://fundoonoteapp.azurewebsites.net/api/Note/GetAllNotes",
         NotesAuth()
    )
   // console.log(response);
    return response;
}

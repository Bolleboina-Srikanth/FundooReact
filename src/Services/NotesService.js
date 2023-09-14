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


export const TrashNotes = async (Id) => {
    let response = await axios.put(
        // "https://localhost:44392/api/User/login",
        `https://fundoonoteapp.azurewebsites.net/api/Note/Trash?NoteId=${Id}`,null,
         NotesAuth()
    );
   // console.log(response);
    return response;
}


export const PinNotes = async (Id) => {
    let response = await axios.put(
        // "https://localhost:44392/api/User/login",
        `https://fundoonoteapp.azurewebsites.net/api/Note/Pin?NoteId=${Id}`,null,
         NotesAuth()
    );
   // console.log(response);
    return response;
}



export const ArchiveNotes = async (Id) => {
   let response = await axios.put(
    `https://fundoonoteapp.azurewebsites.net/api/Note/Archive?NoteId=${Id}`,null,
    NotesAuth()

   );
   return response;
}
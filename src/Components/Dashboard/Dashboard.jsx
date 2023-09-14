import React, {useEffect, useState} from 'react';
import Navbar from '../AppBar';
import NoteTaking from '../Notes/Notes';
import SwipeDrawer from '../Notes/SwipeDrawer';
import DisplayNotes from '../Notes/GetAllNotes';
import { GetAllNotesForUser } from '../../Services/NotesService';


function Dashboard()
 {
    //-----------------------------------------------------------------------------------
    const [notes,setNotes]=useState([])
    const [notesType,setNotesType] = useState("Notes");
    // const [notesInput,setNotesInput] = useState(true);

    const getAllnotes = async () =>{
        let response= await GetAllNotesForUser();
        console.log(response.data.data);
        // setNotes(response.data.data)
        let arr=response.data.data;
    
    //-----------------------------------------
    if(notesType === "Notes")
    {
        let notesResult = arr.filter((n) => n.isArchive === false && n.isTrash === false)
        setNotes(notesResult);
        console.log(notesResult);

    }
    else if(notesType === "Archive")
    {
        let archiveNotes = arr.filter((n) => n.isArchive === true && n.isTrash === false)
        setNotes(archiveNotes);
        console.log(archiveNotes);
    }
    else{
        let trashNotes = arr.filter((n) => n.isTrash === true && n.isArchive === false);
        setNotes(trashNotes)
        console.log(trashNotes);
    }
    }
    //---------------------------------------------
    useEffect(()=>{
        getAllnotes()
    },[notesType])
    //----------------------------------------------------------------------------------
     return(
        
         <div>
            <SwipeDrawer setNotesType={setNotesType} />
                <NoteTaking  getAllnotes={getAllnotes}/>  
                <div style={{
                    display:'flex',
                    justifyContent: 'center',
                    flexWrap:'wrap'
                }}>
              {
                notes.map((getnotes)=>
                <DisplayNotes userNotes={getnotes} getAllnotes={getAllnotes}/>
              )}
              </div>
           
         </div>
     )
 }
export default Dashboard;











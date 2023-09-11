import React, {useEffect, useState} from 'react';
import Navbar from '../AppBar';
import NoteTaking from '../Notes/Notes';
import SwipeDrawer from '../Notes/SwipeDrawer';
import DisplayNotes from '../Notes/GetAllNotes';
import { GetAllNotesForUser } from '../../Services/NotesService';


function Dashboard()
 {
    const [notes,setNotes]=useState([])

    const getAllnotes = async () =>{
        let response= await GetAllNotesForUser();
        console.log(response.data.data);
        setNotes(response.data.data)
    }
    useEffect(()=>{
        getAllnotes()
    },[])
    
     return(
        
         <div>
            <SwipeDrawer/>
                <NoteTaking/>  
                <div style={{
                    display:'flex',
                    justifyContent: 'center',
                    flexWrap:'wrap'
                }}>
              {
                notes.map((getnotes)=>
                <DisplayNotes userNotes={getnotes}/>
              )}
              </div>
           
         </div>
     )
 }
export default Dashboard;











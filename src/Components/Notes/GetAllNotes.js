import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './GetAllNotes.css';

import { IconButton, Typography } from '@mui/material';
import PinIcon from '@mui/icons-material/PushPinOutlined';
import RemindMeIcon from '@mui/icons-material/AddAlertOutlined';
import CollaboratorIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorChangeIcon from '@mui/icons-material/PaletteOutlined';
import ImageIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { PinNotes, TrashNotes,ArchiveNotes } from '../../Services/NotesService';

export default function DisplayNotes({ userNotes, getAllnotes }) {


    const [archiveing, setArchiveing] = useState(false);
    const [trashing,setTrashing] = useState(false);

    
    //--------------------------------------------------
    
    const handleDelete= async()=>{
        let Id = userNotes.noteId;
   let response = await TrashNotes(Id);
   console.log(response);
   setTrashing(response);
   getAllnotes();
    }
 //----------------------------------------------------------------
 const handleArchive = async () => {
    let Id = userNotes.noteId;
    let response = await ArchiveNotes(Id);
    console.log(response);
    setArchiveing(response);
    getAllnotes();
 }

    //-------------------------------------------------------
    const handlePin = async () =>{
        let Id = userNotes.noteId;
        // let Id = userNotes.noteId;
        let response = await PinNotes(Id);
        console.log(response);
        getAllnotes();
    }


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                
                '& > :not(style)': {
                    m: 4,
                    width: 'auto',
                    height: 'auto'
                },
            }}
        >
            <Paper elevation={2}>
                <div className='Mui-icons' >
                    <div style={{display:'flex'}}>
                        {userNotes.title}

                        <IconButton><PinIcon onClick={handlePin} sx={{marginLeft:20}}/></IconButton>
                    </div>
                </div>
                <div>
                    {userNotes.takeNote}
                </div>
                <div className='Mui-icons'>
                    <div>
                        <IconButton>
                            <RemindMeIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <CollaboratorIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <ColorChangeIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <ArchiveIcon onClick={handleArchive} />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <DeleteIcon onClick={handleDelete}/>
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <MoreIcon />
                        </IconButton>
                    </div>
                </div>
            </Paper>
        </Box>
    );
}
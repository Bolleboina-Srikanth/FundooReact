import { useState, useRef,useContext } from 'react';
import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle } from '@mui/icons-material';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import IconButton from '@mui/material/IconButton';
//Icons
import PinIcon from '@mui/icons-material/PushPinOutlined';
import RemindMeIcon from '@mui/icons-material/AddAlertOutlined';
import CollaboratorIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorChangeIcon from '@mui/icons-material/PaletteOutlined';
import ImageIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/UTurnLeftOutlined';
import RedoIcon from '@mui/icons-material/UTurnRightOutlined';
import Button from '@mui/material/Button';
import { CreateNotes } from '../../Services/NotesService';

const Container = styled(Box)`
 display: flex;
 flex-direction: column;
 justify-content:center;
 width: 600px;
 box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
 padding: 10px 15px;
 border-radius: 8px;
 border-color: #e0e0e0;
  margin:auto;
  margin-bottom:30px
 min-height:80px;

`


const Form = () => {
    const [showTextField, setShowTextfield] = useState(false);


    const onTextAreaField = () => {
        setShowTextfield(true);
    }
    const handleClickAway = () => {
        setShowTextfield(false);
    }
    const [notesInput, setNotesInput] = useState(true);
    

    const [takenotes, setTakenotes] = useState(
        {
            Title:"",
            TakeNote:""
        });

        
        let name,value;
        
        const handleInput = (e) =>{
        
            name=e.target.name;
            value=e.target.value;
            setTakenotes({...takenotes, [name]:value});
        }

        const handleClick = async ()=>
          {
        
              console.log(takenotes);
              let response = await CreateNotes(takenotes);
              console.log(response);

          }

    return (
        <ClickAwayListener onClickAway={handleClickAway} >
            <Container >
                {showTextField &&
                    <TextField
                        placeholder='Title'
                        variant='standard'
                        InputProps={{ disableUnderline: true }}
                        name="Title"
                        value={takenotes.Title}
                        onChange={handleInput}
                    />
                }
                <div>
                    <TextField
                        placeholder='Take a note...'
                        variant='standard'
                        InputProps={{
                            disableUnderline: true,
                        }}
                        multiline
                        maxRows={Infinity}
                        onClick={onTextAreaField}
                        name="TakeNote"
                        value={takenotes.TakeNote}
                        onChange={handleInput}
                    
                    />
                    
                    
                    {showTextField ? (

                        <IconButton onClick={onTextAreaField}>
                            <RemindMeIcon style={{ width: 17, marginLeft: '1ch',marginRight: '1ch', marginTop: '2ch' }} />

                            <CollaboratorIcon style={{ width: 17, marginLeft: '1ch', marginTop: '2ch' }} />

                            <ColorChangeIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

                            <ImageIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />
                            <ArchiveIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

                            <MoreIcon style={{ width: 17, marginLeft: '2ch', marginTop: '2ch' }} />

                            <UndoIcon style={{ width: 17, marginLeft: '3ch',marginRight:'2ch', marginTop: '2ch', rotate: '90deg' }} />

                            <RedoIcon style={{ width: 17, marginRight: '14ch', marginTop: '2ch', rotate: '-90deg' }} />
                            <Button variant="text" onClick={handleClick} style={{ color: 'black',marginLeft:'0ch', marginRight: '40ch', marginBottom: '0ch',marginTop:'2.5ch' }}>Close</Button>
                        </IconButton>

                    ) : (
                        ""
                    )}
                </div>
            </Container>
        </ClickAwayListener>
    )
}
export default Form;
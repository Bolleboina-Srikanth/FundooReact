import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import './signIn.css';
import { Button } from '@mui/material';
import images from '../..//Pages/images/fun.png';


const SignIn = () => {
  
       
    const [userlogin,setUserlogin] = useState(
        {
            email:"",
            password:""
        });

        let name,value;
        
        const handleInput = (e) =>{
        
            name=e.target.name;
            value=e.target.value;
            setUserlogin({...userlogin, [name]:value})
        }
         const handleClick =()=>
         {
             console.log(userlogin);
         }
        //-------------------------------------------------------------------------------
        
       
        //------------------------------------------------------------------------------
    return (
        <header>
            <div className="form-container">
                <div>
                    <img src={images} width='20%' alt="fundoo" />
                    <h2>Sign in</h2>
                    <p>with your fundoo account</p>
                </div>
                
                <div class="email">
                    <TextField id="email-box" label="Email" name="email" variant="outlined" required value={userlogin.email} onChange={handleInput}   />
                </div>

                <div>
                <div class="password">
                    <TextField id="password-box" label="Password" name="password" variant="outlined" required  value={userlogin.password} onChange={handleInput}  />
                </div>
                <p id="fpassword">forgot password</p>
                </div>
                <div class="signin">
                    <div>
                    <a id="createaccount" href="RegisterationForm.js">Create account</a>
                    </div>
                    <div>
                    <Button id="button" variant="contained" onClick={handleClick} >Signin</Button>
                    </div>
                </div>
            </div>
        </header>
    )
};
export default SignIn;
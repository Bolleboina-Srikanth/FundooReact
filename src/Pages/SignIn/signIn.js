import React from "react";
import TextField from '@mui/material/TextField';
import './signIn.css';
import { Button } from '@mui/material';



const SignIn = () => {
    return (
        <form>
            <div className="container">

                
                <h2>Sign in</h2>
                <p>with your google account</p>
                <div class="signin">
                    <TextField id="email" label="Email" variant="outlined" />
                </div>
                <div class="signin">
                    <TextField id="password" label="Password" variant="outlined" />
                </div>
                <p id="fpassword">forgot password</p>
                <div class="box">
                    <a id="signin" href="RegisterationForm.js">Create account</a>
                    <Button id="button" variant="contained">Signin</Button>
                </div>
            </div>

        </form>
    )
};
export default SignIn;
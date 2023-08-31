import React from 'react';
import TextField from '@mui/material/TextField';
import './RegisterationStyles.css'
import { Button } from '@mui/material';
import images from '../..//Pages/images/image2.png';




const RegisterationForm = () => {
    return (
        <div classname="box">
            <img className="image" src={images} width='30%' alt="fundoo" />

            <form class="form-container">

                <h2>Create your Fundoo Note Account</h2>

                <div class="name">
                    <div class="styles">
                        <TextField id="first name" label="First name" variant="outlined" />
                    </div>
                    <div class="styles">
                        <TextField id="Last name" label="Last name" variant="outlined" />
                    </div>
                </div>
                <div>
                <div class="styles">
                    <TextField id="Email" label="Email" variant="outlined" />
                </div>
                <p id="move">You can use letters,numbers & periods</p>
                </div>
                


                {/* <div class="name">
                       <div class="styles">
                            <TextField id="Password" label="Password" variant="outlined" />
                        <div>
                            <div class="styles">
                                <TextField id="Confirm password" label="Confirm password" variant="outlined" />
                            </div>
                        </div>
                        <p>Use 8 or more characters with a mix of letters,sysmbols, & numbers</p>
                    </div>

                </div> */}
                <div class="name">
                <div class="styles">
                        <TextField id="Password" label="Password" variant="outlined" />
                    </div>
                    <div class="styles">
                        <TextField id="Confirm password" label="Confirm password" variant="outlined" />
                    </div>
                    {/* <div class="styles">
                    <p>Use 8 or more characters with a mix of letters,sysmbols, & numbers</p>
                    </div> */}
                </div>
                <p>Use 8 or more characters with a mix of letters,sysmbols, & numbers</p>
                
                <div class="register">

                    <a id="signin" href="signIn.js">Sign in instead</a>

                    <Button id="button" variant="contained">Register</Button>

                </div>



            </form>
        </div>
    )
}
export default RegisterationForm;
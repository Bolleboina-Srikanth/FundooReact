
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './RegisterationStyles.css'
import { Button, Checkbox } from '@mui/material';
import images from '../..//Pages/images/fun.png';
import image2 from '../..//Pages/images/image2.png';




const RegisterationForm = () => {
    const [userInput, setUserInput] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""

        });
    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserInput({ ...userInput, [name]: value });
    }
    const handleClick = () => {

        console.log(userInput);
    }
    //------------------------------------------------------------------------------------
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const [data, setData] = useState({ email: "", password: "" });
    const [errorObj, setErrorObj] = useState({ emailError: false, emailHelper: "", passwordError: false, passwordHelper: "", })
    const takeEmail = (event) => {
        setData((prev) => ({ ...prev, email: event.target.value }));

    };
    const takepass = (event) => {
        setData((prev) => ({...prev, password: event.target.value }));
    };
    
    const submit = () => {
        let emailTest = emailRegex.test(data.email);
        let passwordTest = passwordRegex.test(data.password);
        if (emailTest === false) {
            setErrorObj((prevState) => (
                {
                    ...prevState, emailError: true, emailHelper: "enter correct email",
                }
            ));
        }
        else {
            setErrorObj((prevState) => ({ ...prevState, emailError: false, emailHelper: "", }));
        }
        if (passwordTest === false) {
            setErrorObj((prevState) => ({ ...prevState, passwordError: true, passwordHelper: "enter correct password", }));
        }
        else {
            setErrorObj((prevState) => ({ ...prevState, passwordError: false, passwordHelper: "", }));
        }
        console.log(data);
    }
    // ------------------------------------------------------------------------------------
    return (
        <header>
            <div className='form-container1'>
                <div className='form-container2'>
                    <div className='fundooimg'>
                        <img src={images} width='50%' alt="fundoo" />
                    </div>
                    <h3>Create your Fundoo Note Account</h3>
                    <div className='name'>
                        <div><TextField className='text-box' id="first name" label="First name" name="firstName" variant="outlined" required value={userInput.firstName} onChange={handleInput} />
                        </div>
                        <div><TextField className='text-box' id="Last name" label="Last name" name="lastName" variant="outlined" required onChange={handleInput} value={userInput.lastName} /></div>
                    </div>

                    <div className='email1'>
                        <div><TextField id="email-box" label="Email" name="email" variant="outlined" required onChange={handleInput} value={userInput.email} /></div>
                    </div>

                    <div className='password'>
                        <div><TextField className='text-box' id="Password" label="Password" name="password" variant="outlined" required onChange={handleInput} value={userInput.password} /></div>
                        <div><TextField className='text-box' id="Confirm password" name="confirmPassword" label="Confirm password" variant="outlined" required onChange={handleInput} value={userInput.confirmPassword} /></div>
                    </div>

                    <p>Use 8 or more characters with a mix of letters,sysmbols, & numbers</p>

                    <div className='checkbox'>
                        <Checkbox id="showpassword" label="ShowPassword" />Show Password
                    </div>

                    <div className='register'>
                        <div><a id="signin" href="signIn.js">Sign in instead</a></div>
                        <div><Button id="button" variant="contained" onClick={handleClick}>Register</Button></div>
                    </div>
                </div>


                <div className='googleimg'>
                    <img className="image" src={image2} width='50%' alt="fundoo" />
                </div>

            </div>
        </header>
    );
}
export default RegisterationForm;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './RegisterationStyles.css'
import { Button, Checkbox } from '@mui/material';
import images from '../..//Pages/images/fun.png';
import image2 from '../..//Pages/images/image2.png';
import { SignUp } from '../../Services/UserServices';
import { Link } from 'react-router-dom';




const RegisterationForm = () => {



    const firstnameRegex = /^[a-zA-Z ]{2,30}$/;
    const lastNameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;



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

    //------------------------------------------------------------------------------------

    const [errorObj, setErrorObj] = useState(
        {
            emailError: false,
            emailHelper: "",
            passwordError: false,
            passwordHelper: ""
        })


    const handleClick = async () => {
        let firstNameTest = firstnameRegex.test(userInput.firstName);
        let lastNameTest = lastNameRegex.test(userInput.lastName);
        let emailTest = emailRegex.test(userInput.email);
        let passwordTest = passwordRegex.test(userInput.password);

        if (firstNameTest === false) {
            setErrorObj((prevState) => (
                {
                    ...prevState,//Spread operator-->it is used to copy values
                    firstNameError: true,
                    firstNameHelper: "enter correct name",
                }
            ));
        }
        else {
            setErrorObj((prevState) => (
                {
                    ...prevState,
                    firstNameError: false,
                    firstNameHelper: "",
                }));
        }


        if (lastNameTest === false) {
            setErrorObj((prevState) => (
                {
                    ...prevState,//Spread operator-->it is used to copy values
                    lastNameError: true,
                    lastNameHelper: "enter correct name",
                }
            ));
        }
        else {
            setErrorObj((prevState) => (
                {
                    ...prevState,
                    lastNameError: false,
                    lastNameHelper: "",
                }));
        }


        if (emailTest === false) {
            setErrorObj((prevState) => (
                {
                    ...prevState,//Spread operator-->it is used to copy values
                    emailError: true,
                    emailHelper: "enter correct email",
                }
            ));
        }
        else {
            setErrorObj((prevState) => (
                {
                    ...prevState,
                    emailError: false,
                    emailHelper: "",
                }));
        }



        if (passwordTest === false) {
            setErrorObj((prevState) => (
                {
                    ...prevState,
                    passwordError: true,
                    passwordHelper: "enter correct password",
                }));
        }
        else {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: false,
                passwordHelper: "",
            }));
        }
        console.log(userInput);

        if (firstNameTest === lastNameTest === emailTest === passwordTest === true) {
            let response = await SignUp(userInput);
            console.log(response);
            localStorage.setItem("token", response.userInput.data);
        }
    }
    // ------------------------------------------------------------------------------------
    return (
        <div className='main'>
            <div className='form-container1'>
                <div className='form-container2'>
                    <div className='fundooimg'>
                        <img src={images} width='50%' alt="fundoo" />
                    </div>
                    <h3>Create your Fundoo Note Account</h3>
                    <div className='name'>
                        <div><TextField className='text-box' id="first name" label="First name" name="firstName" variant="outlined" required value={userInput.firstName} onChange={handleInput} error={errorObj.firstNameError} helperText={errorObj.firstNameHelper} />
                        </div>
                        <div><TextField className='text-box' id="Last name" label="Last name" name="lastName" variant="outlined" required onChange={handleInput} value={userInput.lastName} error={errorObj.lastNameError} helperText={errorObj.lastNameHelper} /></div>
                    </div>

                    <div className='email1'>
                        <div><TextField id="email-box" label="Email" name="email" variant="outlined" required onChange={handleInput} value={userInput.email} error={errorObj.emailError} helperText={errorObj.emailHelper} /></div>
                    </div>

                    <div className='password'>
                        <div><TextField className='text-box' type="password" id="Password" label="Password" name="password" variant="outlined" required onChange={handleInput} value={userInput.password} error={errorObj.passwordError} helperText={errorObj.passwordHelper} /></div>
                        <div><TextField className='text-box' type="password" id="Confirm password" name="confirmPassword" label="Confirm password" variant="outlined" required onChange={handleInput} value={userInput.confirmPassword} /></div>
                    </div>



                    <div className='checkbox'>
                        <p>Use 8 or more characters with a mix of letters,sysmbols, & numbers</p>
                        <Checkbox id="showpassword" label="ShowPassword" />Show Password
                    </div>

                    <div className='register'>
                        {/* <div><a id="signin" href="/">Sign in instead</a></div> */}
                        <div><Link id='signin' to={"/"}>Sign in instead</Link></div>
                
                            <div><Button id="button" variant="contained" onClick={handleClick} type="Submit">Register</Button></div>
                        </div>

                    </div>


                    <div className='googleimg'>
                        <img className="image" src={image2} width='50%' alt="fundoo" />
                    </div>

                </div>
            </div>
            );
}
            export default RegisterationForm;
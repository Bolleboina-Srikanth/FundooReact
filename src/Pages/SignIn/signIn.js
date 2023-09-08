import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import './signIn.css';
import { Button } from '@mui/material';
import images from '../..//Pages/images/fun.png';
import { signIn } from "../../Services/UserServices";


const SignIn = () => {
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
       
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
        //  const handleClick =()=>
        //  {
        //      console.log(userlogin);
        //  }
        //-------------------------------------------------------------------------------
        const [errorObj, setErrorObj] = useState(
            {
                emailError: false,
                emailHelper: "",
                passwordError: false,
                passwordHelper: ""
            })
            const  handleClick = async () => {
             let emailTest = emailRegex.test(userlogin.email);
             let passwordTest = passwordRegex.test(userlogin.password);
             if (emailTest === false)
             {
                setErrorObj((prevState) => (
                    {
                     ...prevState,//Spread operator-->it is used to copy values
                     emailError: true,
                     emailHelper: "enter correct email",
                    }
                    ));
                }
                else
                {
                    setErrorObj((prevState) => (
                        { ...prevState,
                         emailError: false,
                         emailHelper: "",
                        }));
                }
                if (passwordTest === false)
                {
                    setErrorObj((prevState) => (
                     {
                      ...prevState,
                      passwordError: true,
                       passwordHelper: "enter correct password",
                    }));
                }
                else
                {
                    setErrorObj((prevState) => ({
                         ...prevState,
                         passwordError: false,
                         passwordHelper: "",
                        }));
                }
                   console.log(userlogin);
                   if(emailTest == passwordTest == true)
                   {
                    let response = await signIn(userlogin);
                    console.log(response);
                    localStorage.setItem("token", response.data.date);
                   }
                   setTimeout(() => {
                    if(localStorage.key){
                        window.location.reload()
                    }
                    
                   }, 2000);
                }
       
        //------------------------------------------------------------------------------
    return (
        <div className="main">
            <div className="form-container">
                <div className="image">
                    <img  src={images} width='20%' alt="fundoo" />
                    <h2>Sign in</h2>
                    <p>with your fundoo account</p>
                </div>
                
                <div class="email">
                    <TextField id="email-box" label="Email" name="email" variant="outlined" required value={userlogin.email} onChange={handleInput}   error={errorObj.emailError} helperText={errorObj.emailHelper} />
                </div>

                <div>
                <div class="password">
                    <TextField type="password" id="password-box" label="Password" name="password" variant="outlined" required  value={userlogin.password} onChange={handleInput} error={errorObj.passwordError} helperText={errorObj.passwordHelper} />
                </div>
                <p id="fpassword">forgot password</p>
                </div>
                <div class="signin">
                    <div>
                    <a id="createaccount" href="/Registeration">Create account</a>
                    </div>
                    <div>
                    <Button id="button" variant="contained" onClick={handleClick} type="Submit" >Signin</Button>
                    </div>
                </div>
            </div>
            </div>
    )
};
export default SignIn;
import React from 'react'
import './SignIn.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from '../services/userService';

const emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignIn() { 

    const[signInObj, setSignInObj] = React.useState({ emailID: '', password: '' })
    const[ objRegex, setObjRegex] = React.useState({ emailBorder: false, emailHelper: '', passwordBorder: false, passwordHelper: '' })

    const signInRegex = ()=> {
        
        let emailTest = emailRegex.test(signInObj.emailID)
        let passwordTest = passwordRegex.test(signInObj.password)

        if(emailTest=== true){
            setObjRegex(prevState => ({ ...prevState, emailBorder: false, emailHelper: ''}))
        }
        else{
            setObjRegex(prevState => ({ ...prevState, emailBorder: true, emailHelper: 'Enter correct email'}))
        }

        if(passwordTest=== true){
            setObjRegex(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: ''}))
        }
        else{
            setObjRegex(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: 'Enter correct password'}))
        }

        if(emailTest === true && passwordTest === true){

            login(signInObj)
            .then((res)=>{
                console.log(res);
                localStorage.setItem('token', 'Bearer ' + res.data.data)
            })
            .catch((error)=>{console.log(error)})
        }

    }    

    const takeEmail = (event) =>{
        setSignInObj({...signInObj, emailID: event.target.value})
    }  
    
    const takePassword = (event) =>{
        setSignInObj({...signInObj, password: event.target.value})
    }  





    return (

       <div className='centralSignIn'>
        
        <div className='insideCentralDiv'>
            <div className="divNo1">
                <span>Fundoo</span>
           </div>

           <div className="divNo2">
               <span>Sign in</span>
           </div>

           <div className="divNo3">
               <span>Use your Fundoo Account</span>             
           </div>
          
           <div className='bottomSide'>
                <div className="divNo4">
                   <div className='TextFieldCust'>
                   <TextField   error={objRegex.emailBorder} helperText={objRegex.emailHelper}  id="outlined-basic" label="Email or phone" variant="outlined" style ={{width: '100%'}} size='small' onChange={takeEmail}/>
                    </div>  
                    
                    <div className='TextFieldCust'>
                   <TextField error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} id="outlined-basic" label="Password" variant="outlined" size='small' style ={{width: '100%'}}  onChange={takePassword}/>
                    </div>


                </div>

                <div className="divNo5"><a href="#"><span>Forgot email?</span></a></div>

                <div className="divNo6">
                    <div className='CreateAccount'><a href="#">
                        <span>
                        Create Account
                        </span>
                        </a></div>
                    <div className='NextButton'>
                        <Button variant="contained" onClick={signInRegex}>Next</Button>
                        </div>
                </div>
           </div>
           
        </div>
        
       </div> 
       
    )
}

export default SignIn




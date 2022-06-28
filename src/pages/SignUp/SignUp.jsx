import React from 'react'
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { signUp } from '../services/userService';



import AcountLogo from '../../assets/account.svg'


const fnRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignUp()  {

    const[signUpObj, setSignUpObj] = React.useState({ firstName: '', lastName: '', emailID: '', password: '', confirm: ''})
    const[ objRegex, setObjRegex] = React.useState({ fnBorder: false, fnHelper: '', lnBorder: false, lnHelper: '',emailBorder: false, emailHelper: '', passBorder: false, passHelper: '', confirmBorder: false, confirmHelper: ''})

    const signUpRegex = ()=> {
            
        let fnTest = fnRegex.test(signUpObj.firstName)
        let lnTest = fnRegex.test(signUpObj.lastName)
        let emailTest = emailRegex.test(signUpObj.emailID)
        let passTest = passwordRegex.test(signUpObj.password)
        let confirmPassTest = passwordRegex.test(signUpObj.confirm)
       

        if(fnTest === true){
            setObjRegex(prevState => ({ ...prevState, fnBorder: false, fnHelper: ''}))
        }
        else{
            setObjRegex(prevState => ({ ...prevState, fnBorder: true, fnHelper: 'Enter first name'}))
        }

        if(lnTest === true){
            setObjRegex(prevState => ({ ...prevState, lnBorder: false, lnHelper: ''}))
        }
        else{
            setObjRegex(prevState => ({ ...prevState, lnBorder: true, lnHelper: 'Enter last name'}))
        }

        if(emailTest=== true){
            setObjRegex(prevState => ({ ...prevState, emailBorder: false, emailHelper: ''}))
        }
        else{
            setObjRegex(prevState => ({ ...prevState, emailBorder: true, emailHelper: 'Enter correct email'}))
        }

        if(passTest=== true){
            setObjRegex(prevState => ({ ...prevState, passBorder: false, passHelper: ''}))
        }
        else{
            setObjRegex(prevState => ({ ...prevState, passBorder: true, passHelper: 'Enter valid password'}))
        }   

        // if(confirmPassTest === true){
        //     setObjRegex(prevState => ({ ...prevState, confirmBorder: false, confirmHelper: ''}))
        // }
        // else{
        //     setObjRegex(prevState => ({ ...prevState, confirmBorder: true, confirmHelper: 'Enter valid password'}))
        // } 

        if(signUpObj.password === signUpObj.confirm){
            setObjRegex(prevState => ({ ...prevState, passBorder: false, passHelper: ''}))
        }
        else{
            setObjRegex(prevState => ({ ...prevState, passBorder: true, passHelper: 'Enter valid password'}))
        }   

        if(fnTest === true && lnTest === true && emailTest === true && passTest === true) 
        {
            signUp(signUpObj)
            .then((res)=>{
                console.log(res);
                console.log(res.data.data)
                localStorage.setItem('Authorization', res.data.data)
            }).catch((error)=>{console.log(error)})

        }

    }

    const Takefn = (event) => {
        setSignUpObj({...setSignUpObj, firstName: event.target.firstName})
    } 

    
    const Takeln = (event) => {
        setSignUpObj({...setSignUpObj, lastName: event.target.firstName})
    } 

        
    const TakeEmailID = (event) => {
        setSignUpObj({...setSignUpObj,  emailID: event.target.emailID})
    } 

    const TakePassword = (event) => {
        setSignUpObj({...setSignUpObj,  password: event.target.password})
    } 

    const TakeConfirmPass = (event) => {
        setSignUpObj({...setSignUpObj,  confirm: event.target.confirm})

    }   


    return(

        <div className='centralSignIn1'>
            <div className='InsideCentralSignIn'>   
                <div className="leftSide">

                    <div className="SignUpDiv1">
                        <span>Fundoo</span>
                    </div>

                    <div className="SignUpDiv2"><span>Create your Google Account</span></div>

                    <div className='formDiv'>

                    <div className="SignUpDiv3" id="makeItRow1">
                        <div className="FnClass">
                        <TextField error={objRegex.fnBorder} helperText={objRegex.fnHelper} id="outlined-basic" label="First name" variant="outlined" size="small" style ={{width: '100%'}} onChange={Takefn}/>

                        </div>
                        <div className="LnClass">
                        <TextField error={objRegex.lnBorder} helperText={objRegex.lnHelper} id="outlined-basic" label="Last name" variant="outlined" size="small" style ={{width: '100%'}} onChange={Takeln}/>
                        </div>
                    </div>

                    <div className="SignUpDiv4">
                    <TextField error={objRegex.emailBorder} helperText={objRegex.emailHelper} id="outlined-basic" label="Username" variant="outlined" size="small" style ={{width: '100%'}} onClick={TakeEmailID}/>
                    </div>

                    <div className="SignUpDiv5" id="makeItRow2">
                        <div className="password">
                        <TextField error={objRegex.passBorder} helperText={objRegex.passHelper} id="outlined-basic" label="Password" variant="outlined" size="small" style ={{width: '100%'}} onClick={TakePassword}/>
                        </div>

                        <div className="confirmPassword">
                        <TextField error={objRegex.confirmBorder} helperText={objRegex.confirmHelper}  id="outlined-basic" label="Confirm" variant="outlined" size="small" style ={{width: '100%'}} onClick={TakeConfirmPass}/>

                        </div>
                    </div>

                    <div className="SignUpDiv6" >
                        <div className="checkbox">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Show Password" />
                        </FormGroup>
                        </div>
                    </div>

                    <div className="SignUpDiv7" id="makeItRow3">
                        <div className="signInInstead">
                            <a href=""><span>Sign in instead</span></a>
                        </div>
                        <div className="submit Button"> 
                        <Button variant="contained" onClick={signUpRegex}>Next</Button>
                        </div>
                    </div>
                    </div>
                    
                </div>

                <div className="rightSide">
                    <div className='rightImg'>
                    <img src={ AcountLogo } alt="Google Acount Img" />

                    </div>
                </div>

            </div>
            
        </div>


    )
}

export default SignUp
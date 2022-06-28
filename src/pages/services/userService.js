import axios from 'axios'

export const login = (loginObj) =>{
    let response = axios.post("http://localhost:3000/api/v1/users/login",loginObj)
    return response;
}

export const signUp = (signUpObj) =>{
    let response = axios.post("http://localhost:3000/api/v1/users/register",signUpObj)
    return response;
}
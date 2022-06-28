import axios from 'axios'

const configObj = {
    headers: { Authorization : localStorage.getItem("token") }
}

export const addNote = (obj) => {
    let response = axios.post("http://localhost:3000/api/v1/note", obj, configObj)
    return response
}

export const getNotes = () => {
    let response = axios.get("http://localhost:3000/api/v1/note", configObj)
    return response
}

export const updateColor = (obj,id) => {
    let response = axios.put(`http://localhost:3000/api/v1/note/${id}`, obj, configObj)
    return response
}


export const changeArchive=(obj,id)=>{
    console.log(obj,id,"archive data");
    let res=axios.put(`http://localhost:3000/api/v1/note/archive/${id}`,obj,configObj)
    return res;
  }


  export const EditNote = (obj,_id) => {
    let response = axios.put(`http://localhost:3000/api/v1/note/${_id}`, obj, configObj)
    return response
}











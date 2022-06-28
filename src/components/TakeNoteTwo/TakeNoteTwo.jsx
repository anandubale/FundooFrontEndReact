import React from 'react'
import { addNote } from '../../pages/services/dataService'
import SimplePopper from '../colorpopper/colorpopper'
import { RiInboxArchiveLine ,RiImage2Fill} from "react-icons/ri";
import { AiOutlineUserAdd,  } from "react-icons/ai";
import { MdAccountCircle ,MdOutlineNotificationAdd, MdOutlineMoreVert } from "react-icons/md";


import './TakeNoteTwo.css'



function TakeNoteTwo(props) {


    const [noteObj, setNoteObj] = React.useState({ Title: "", Descreption: "" ,color: "", isArchived: false})


    const takeTitle = (event) => {
        setNoteObj({ ...noteObj, Title: event.target.value })
    }
    const takeDescription = (event) => {
        setNoteObj({ ...noteObj, Descreption: event.target.value })
    }

    const listenToColorPopper = (color)=>{
        setNoteObj({...noteObj, color: color})
    }

    

    const AddingNotes = () => {
        
        addNote(noteObj).then((response)=>{
            console.log("this is reponse",response);
            console.log("this is noteObj",noteObj)
            props.listenToTakeNoteTwo()
        })
        .catch((error)=>{console.log(error)})
    }

    const archiveNotes =() =>{
        setNoteObj({...noteObj, isArchived:true})
        console.log(noteObj.isArchived)
    }


    return (
        <div>
        <div className='assign1' style={{backgroundColor: noteObj.color}}>
            <div className='leftside1'>
                <div className='inputText21'><input type="text" placeholder='Title' onChange={takeTitle} style={{backgroundColor: noteObj.color}}/></div>
                <div className="takNote2Class"><img src={require("../../assets/pin.png")} alt="pin" /></div>
            </div>
            <div className='middleside1'>
                <div className='inputText21'><input type="text" placeholder='Take a note...' onChange={takeDescription} style={{backgroundColor: noteObj.color}}/></div>
            </div>
            <div className='rightside1'>
                <div className='eight_Logo_Left'>
                    <div>
                        <MdOutlineNotificationAdd/>
                    </div>

                    <div>
                        <AiOutlineUserAdd/>
                    </div>                    {/* <div ><img className="takNote2Class" src={require("../../assets/background.png")} alt="background" /></div> */}
                    <div>
                        <SimplePopper listenToColorPopper={listenToColorPopper} action="create"/>
                    </div>
                    <div>
                        <RiImage2Fill/>
                    </div>                   
                    <div>
                    <RiInboxArchiveLine onClick={archiveNotes} />
                    </div>
                    {/* <div ><img className="takNote2Class" src={require("../../assets/3dots.png")} alt="3dots" /></div> */}
                    <div>
                        <MdOutlineMoreVert/>
                    </div>

                    <div ><img className="takNote2Class" src={require("../../assets/undo.png")} alt="undo" /></div>
                    <div ><img className="takNote2Class" src={require("../../assets/redo.png")} alt="redo" /></div>
                </div>
                <div className='eight_Logo_Right'>
                    <div className="takNote1Class"><input type="button" value="close" onClick={AddingNotes}/></div>
                </div>
            </div>
        </div>
        </div>


    )
}


export default TakeNoteTwo
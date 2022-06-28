import React from 'react'
import SimplePopper from '../colorpopper/colorpopper'
import { RiInboxArchiveLine, RiImage2Fill, } from "react-icons/ri";

import { AiOutlineUserAdd } from "react-icons/ai";

import { MdAccountCircle, MdOutlineNotificationAdd, MdOutlineMoreVert } from "react-icons/md";
import './TakeNoteThree.css'
import { changeArchive, EditNote, getNotes } from '../../pages/services/dataService';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



function TakeNoteThree(props) {

    const [open, setOpen] = React.useState(false);
    const [note, setNote] = React.useState({ Title: '', Descreption: '', _id: '' ,color: ''})

    const handleOpen = (note) => {
        console.log(note)
        setOpen(true);
        setNote({ _id: note._id, Title: note.Title, Descreption: note.Descreption, color: note.color })
    }
    const handleClose = () => setOpen(false);

    const ListenToColorUpdate = () => {
        props.ListenToTakeNoteThree();
    }

    const UpdateArchive = (id) => {
        console.log(id, "id")
        let archiveData = { _id: [id], isArchieved: true }
        console.log(archiveData)
        changeArchive(archiveData, id).then((res) => {
            console.log(res);
            props.ListenToTakeNoteThree() //telling to dashboard
        }
        ).catch((err) => console.log(err));
    }

    const submitEditedNote = () => {
        EditNote(note, note._id).then((res) => {
            console.log(res);
            props.ListenToTakeNoteThree() //telling to dashboard
        })
        .catch((error) => { console.log(error) })
    }

    const listenToTitle = (event) => {
        setNote(prevState => ({ ...prevState, Title: event.target.value }))
    }

    const listenToDescription = (event) => {
        setNote(prevState => ({ ...prevState, Descreption: event.target.value }))
    }

    return (
        <div className='assign2' style={{ backgroundColor: props.note.color }}>
            <div className='leftsideNote3'>
                <div className='inputText31' onClick={() => handleOpen(props.note)}>{props.note.Title}</div>
                <div className="takNote3ClassImg"><img src={require("../../assets/pin.png")} alt="pin" /></div>
            </div>
            <div className='middlesideNote3'>
                <div className='inputText31' onClick={() => handleOpen(props.note)}>{props.note.Descreption}</div>
            </div>
            <div className='rightsideNote3'>
                <div className='eight_Logo_Left3'>
                    <div>
                        <MdOutlineNotificationAdd />
                    </div>

                    <div>
                        <AiOutlineUserAdd />
                    </div>

                    <div>
                        <SimplePopper action='update' id={props.note._id} ListenToColorUpdate={ListenToColorUpdate} />
                    </div>
                    <div>
                        <RiImage2Fill />
                    </div>
                    <div>
                        <RiInboxArchiveLine onClick={() => { UpdateArchive(props.note._id) }} />
                    </div>

                    <div>
                        <MdOutlineMoreVert />
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style = {{ backgroundColor: note.color }}>

                    <FormControl style={{ width: "30ch" }}>
                        <InputBase defaultValue={props.note.Title} onChange={listenToTitle} />
                    </FormControl>

                    <FormControl>
                        <InputBase defaultValue={props.note.Descreption} onChange={listenToDescription} />
                    </FormControl>

                    <Box>
                            <div className='eight_Logo2'>
                                
                                <div className='leftSideLogos'>
                                    <div className='logo'>
                                        <MdOutlineNotificationAdd />
                                    </div>

                                    <div className='logo'>
                                        <AiOutlineUserAdd />
                                    </div>

                                    <div className='logo'>
                                        <SimplePopper action='update' id={props.note._id} ListenToColorUpdate={ListenToColorUpdate} />
                                    </div>

                                    <div className='logo'>
                                        <RiImage2Fill />
                                    </div>
                                    <div className='logo'>
                                        <RiInboxArchiveLine onClick={() => { UpdateArchive(props.note._id) }} />
                                    </div>

                                    <div className='logo'>
                                        <MdOutlineMoreVert />
                                    </div>
                                </div>

                                <div className='EditCloseButton'>
                                    <button onClick={submitEditedNote}>close</button>
                                </div>

                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>

    )
}


export default TakeNoteThree
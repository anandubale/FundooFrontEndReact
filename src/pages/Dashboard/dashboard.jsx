import { Drawer } from '@mui/material'
import React from 'react'
import MiniDrawer from '../../components/Drawer/drawer'
import Header from '../../components/Header/header'
import TakeNoteOne from '../../components/TakeNoteOne/TakeNoteOne'
import TakeNoteThree from '../../components/TakeNoteThree/TakeNoteThree'
import TakeNoteTwo from '../../components/TakeNoteTwo/TakeNoteTwo'
import { getNotes } from '../services/dataService'
import Grid from '@mui/material/Grid';
import './dashboard.css'
import { flexbox } from '@mui/system'

function DashBoard() {

    const [noteView, setNoteView] = React.useState(true)
    const [listOfNotes, setListOfNotes] = React.useState([])
    const [drawer, setDrawer] = React.useState(false)
    const [currentChoise, setCurrentChoise] = React.useState('notes')

    const listenToTakeNoteOne = () => {
        setNoteView(false)
    }

    const listenToTakeNoteTwo = () => {
        setNoteView(true)
    }

    const ListenToTakeNoteThree = () => {
        GetNote()
    }

    const ListenToHeader = () => {
        setDrawer(!drawer)
    }

    const listenToSideNavBar=(notechoise)=>{
        setCurrentChoise(notechoise)
    }

    
    React.useEffect(() => {
        GetNote()
        console.log("get note get called in use Effect")
    }, [noteView,currentChoise])



    const GetNote = () => {
        getNotes().then((res) => {
            let filter = []
            if (currentChoise === 'notes') {
                filter = res.data.data.filter((note) => {
                    if (note.isArchived === false) {
                        console.log('abc')
                        return note
                    }
                })
            }
            else if (currentChoise === 'archive') {
                filter = res.data.data.filter((note) => {
                    if (note.isArchived === true ) {
                        return note
                    }

                })
            }
            else if (currentChoise === 'bin') {
                filter = res.data.data.filter((note) => {
                    if (note.isDeleted === true ) {
                        console.log("t2839471293470")
                        return note
                    }

                })
            }
            setListOfNotes(filter)
            // console.log(filter)
            console.log(res.data.data)
        })
        .catch((error) => { console.log(error) })
    }


    return (
        <div>
            <Header ListenToHeader={ListenToHeader} />
            <MiniDrawer drawer={drawer} listenToSideNavBar={listenToSideNavBar}/>
            <div>
                {
                    noteView ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} /> : <TakeNoteTwo listenToTakeNoteTwo={listenToTakeNoteTwo} />
                }
            </div>
            <Grid container lg={11} md={10} sm={10} xs={10} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',paddingTop:'1%' ,paddingLeft: '5%'}} >
                {
                    listOfNotes.map((note) => <TakeNoteThree note={note} ListenToTakeNoteThree={ListenToTakeNoteThree} />)
                }
            </Grid>
        </div>
    )
}

export default DashBoard
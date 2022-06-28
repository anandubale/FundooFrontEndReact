import React from 'react'

import './TakeNoteOne.css'


function TakeNoteOne(props) {

    const listeningToTakeNoteOne = () => {
        props.listenToTakeNoteOne()
    }

    return(
        <div className='assign'>
            <div className='leftside' >
                <div className='inputText1'><input type="text" placeholder='Take a note ...' onClick={listeningToTakeNoteOne}/></div>
            </div>
            <div className='rightside'>
               <div className="takNote1Class"><img src={require("../../assets/newlist.png")} alt="newlist" /></div>
               <div className="takNote1Class"><img src={require("../../assets/brush.png")} alt="brush" /></div>
               <div className="takNote1Class"><img src={require("../../assets/gallary.png")} alt="gallary" /></div>
            </div>
        </div>
    )
}


export default TakeNoteOne
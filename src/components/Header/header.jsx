import React from 'react'
import './header.css'
import drawerReducer from '../redux/drawerreducer'
import {connect} from 'react-redux'


function Header(props) {

    const listen =()=>{
        props.ListenToHeader()
    }

    return (
        <div className='MainDiv'>
            <div className="header">
                <div className="head_logo">
                    <div id="ham_menu" className='headerAlign'><img src={require("../../assets/menu.png")} alt="menu" onClick={ listen }/></div>
                    <div className='headerAlign1' id="logo"><img src={require("../../assets/keepLogo.png")} alt="Logo"/></div>
                    <div className='headerAlign1' id="Name">
                       <span>{ props.title  }</span>
                    </div>
                </div>

                <div className="head_searchBar">
                    <div className='headerAlign' id='serachBar'><img src={require("../../assets/magnify.png")} alt="search" /></div> 
                    <div className='inputText'><input type="text" style={{ width: 100}} placeholder='Search'/></div>
                </div>

          
                <div className="head_setting">
                        <div className='headerAlign' id="refresh"><img src={require("../../assets/refresh.png")} alt="refresh" /></div>
                       
                        <div className='headerAlign' id="list_view"><img src={require("../../assets/listview.png")} alt="listview" /></div>
                        
                        <div className='headerAlign' id="setting"><img src={require("../../assets/setting.png")} alt="setting" /></div>
                </div>

                <div className="head_menu">
                    <div className='headerAlign' id="g_app"><img src={require("../../assets/dots_grid.png")} alt="grid" /></div>
                    <div className='headerAlign' id="g_menu"><img src={require("../../assets/user.png")} alt="user" /></div>
                </div>
            
               
            </div>

        </div>
    )
}


const mapStateToProps = (state) =>{
    console.log(state)
    return {
        title: state.drawerReducer.title,
    }
}
export default connect(mapStateToProps)(Header)
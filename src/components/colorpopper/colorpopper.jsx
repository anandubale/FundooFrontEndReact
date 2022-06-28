import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { IoMdColorPalette } from "react-icons/io";
import { updateColor } from '../../pages/services/dataService';

export default function SimplePopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const colorArray = ['#FFFFFF','#e2725b', '#ffae42', '#fefe33', '#77dd77', '#40e0d0', '#a4dded', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#d3d3d3']

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const takeColor = (color) =>{
        if(props.action === 'create'){
            console.log(color)
            props.listenToColorPopper(color)
        }
        else if(props.action === 'update'){
            let obj = {
                userid: [ props.id ],
                color: color
            }
            console.log(obj)
            
            updateColor(obj, props.id).then((res)=>{
                console.log(res);
                    props.ListenToColorUpdate()  
                  
            })
            .catch((error)=>{console.log(error)})
        }

    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <button aria-describedby={id} type="button" onClick={handleClick} style={{ background: 'transparent', border: 'none' }}>
                <IoMdColorPalette style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{
                    border: 'none', outline: 'none', p: 1, display: 'flex', width: '100%', float: 'right',
                    position: 'relative', left: '5rem', gap: '0.3rem', border: '1px solid #faf9f9',
                    boxShadow: 'rgb(100 100 111 / 20%) 0px 7px 29px 0px', borderRadius: '15px 15px', background: '#f3f3f3'
                }}>
                    {
                        colorArray.map((color)=> <div onClick={()=>takeColor(color)} style={{ backgroundColor: color, width:"30px",height: "25px", borderRadius:"100%"}}>

                        </div>)
                    }
                </Box>
            </Popper>
        </div>
    );
}

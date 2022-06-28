import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { RiInboxArchiveLine } from "react-icons/ri";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { connect , state} from 'react-redux';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    marginTop:70,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop:70,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);




function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const noteChoise = (typeOfNote)=>{
      props.dispatch({type: `${typeOfNote}`})
      props.listenToSideNavBar(typeOfNote)
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Drawer variant="permanent" open={props.drawer}  > 
      <List>
            <ListItem button onClick={()=>noteChoise('notes')}>
              <ListItemIcon>
              <LightbulbOutlinedIcon /> 
             </ListItemIcon>
              <ListItemText primary= "Notes" />
            </ListItem>

            <ListItem button onClick={()=>noteChoise('reminders')}>
              <ListItemIcon>
              <NotificationsNoneOutlinedIcon /> 
             </ListItemIcon>
              <ListItemText primary= "Remainders" />
            </ListItem>

            <ListItem button onClick={()=>noteChoise('edit')}>
              <ListItemIcon>
              <ModeEditOutlineOutlinedIcon /> 
             </ListItemIcon>
              <ListItemText primary= "Edit Labels" />
            </ListItem>

            <ListItem button onClick={()=>noteChoise('archive')}>
              <ListItemIcon>
              <ArchiveOutlinedIcon /> 
             </ListItemIcon>
              <ListItemText primary= "Archive" />
            </ListItem>

            <ListItem button onClick={()=>noteChoise('bin')}>
              <ListItemIcon>
              <DeleteOutlineOutlinedIcon /> 
             </ListItemIcon>
              <ListItemText primary= "Trash" />
            </ListItem>
            

          </List>
      </Drawer>
    </Box>
  );
}

export default connect()(MiniDrawer)

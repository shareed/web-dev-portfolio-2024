import { useState } from 'react';
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MobileNavigationList from './MobileNavigationList';

const MobileNavigation = ({ navLinks }) => {
  const [open, setOpen] = useState(false)
  return (

    <>
        <Drawer PaperProps={{sx:{backgroundColor: 'rgb(77, 2, 77)'}}} open={open} onClose={() => setOpen(false)}>
          <MobileNavigationList color='#FFFFFF' navLinks={navLinks} onSelectedClick={() => setOpen(false)} />
        </Drawer>
        <IconButton sx={{marginLeft: 'auto', color: 'rgb(179, 10, 179)'}}onClick={() => setOpen(!open)}>
          <MenuIcon />
        </IconButton>
        </>
  )
}

export default MobileNavigation;
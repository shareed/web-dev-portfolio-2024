import { useState } from 'react';
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NavigationBarMobileList from './NavigationBarMobileList'
import NavigationBarSocialIcons from '../NavigationBarSocialIcons';
import { Colors } from '../../../styles/theme';

const NavigationBarMobile = ({ matches, navLinks }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Drawer PaperProps={{ sx: { backgroundColor: Colors.secondary } }} open={open} onClose={() => setOpen(false)}>
        <NavigationBarMobileList navLinks={navLinks} onSelectedClick={() => setOpen(false)} />
      </Drawer>
      <IconButton sx={{ marginLeft: 'auto', color: Colors.purple }} onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
      <NavigationBarSocialIcons matches={matches} />
    </>
  )
}

export default NavigationBarMobile
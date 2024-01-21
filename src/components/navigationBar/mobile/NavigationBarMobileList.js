import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from 'react-router-dom';


const NavigationBarMobileList = ({ navLinks, onSelectedClick}) => {
    return (
      <List>
              {navLinks.map((link, index) => (
                  <ListItemButton key={index} divider onClick={onSelectedClick}>
                      <ListItemIcon>
                          <ListItemText >
                              <NavLink id='mobile-nav-link' to={link.path}>
                                  {link.name}
                              </NavLink>
  
                          </ListItemText>
                      </ListItemIcon>
                  </ListItemButton>
              ))}
  
        </List>
        
    )
}

export default NavigationBarMobileList
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from 'react-router-dom';

const MobileNavigationList = ({ navLinks, onSelectedClick}) => {
  return (
    <List>
            {navLinks.map((link, index) => (
                <ListItemButton key={index} divider onClick={onSelectedClick}>
                    <ListItemIcon>
                        <ListItemText sx={{ color: 'white' }}>
                            <NavLink to={link.path}>
                                {link.name}
                            </NavLink>

                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            ))}

        </List>
  )
}

export default MobileNavigationList
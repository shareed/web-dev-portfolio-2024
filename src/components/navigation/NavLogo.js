import { Box, Typography } from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';



const NavLogo = () => {
    return (
        <Box textAlign={'center'} color={'rgb(179, 10, 179)'}>
            <Typography >
                <DeveloperModeIcon />
            </Typography>
            <Typography variant='p'>
                Material UI
            </Typography>
        </Box>
    )
}

export default NavLogo
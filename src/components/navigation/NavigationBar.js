import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material';
import NavLogo from './NavLogo';
import MobileNavigation from './mobile/MobileNavigation';
import DesktopNavigation from './desktop/DesktopNavigation';

const NavigationBar = ({ navLinks }) => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <AppBar sx={{ backgroundColor: 'black', borderBottom: '.1rem solid rgb(179, 10, 179)' }}>
                <Toolbar>
                    {isMatch
                        ? <>
                            <NavLogo />
                            <MobileNavigation navLinks={navLinks} />
                        </>
                        : <DesktopNavigation />
                    }
        </Toolbar>
            </AppBar>
        </>
          )
}

export default NavigationBar
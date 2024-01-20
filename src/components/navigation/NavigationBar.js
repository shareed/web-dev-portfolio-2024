import { Toolbar, useTheme, useMediaQuery } from '@mui/material';
import NavLogo from './NavLogo';
import MobileNavigation from './mobile/MobileNavigation';
import DesktopNavigation from './desktop/DesktopNavigation';
import { NavigationBarContainer } from '../../styles/navigationBar';

const NavigationBar = ({ navLinks }) => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <NavigationBarContainer>
                <Toolbar>
                    {isMatch
                        ? <>
                            <NavLogo />
                            <MobileNavigation navLinks={navLinks} />
                        </>
                        : <DesktopNavigation navLinks={navLinks} />
                    }
                </Toolbar>
            </NavigationBarContainer>
        </>
    )
}

export default NavigationBar
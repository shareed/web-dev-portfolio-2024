import { Grid } from '@mui/material';
import NavLogo from '../NavLogo';
import DesktopNavigationTabs from './DesktopNavigationTabs';

const DesktopNavigation = ({navLinks}) => {
    return (
        <Grid sx={{ placeItems: 'center' }} container>
            {/* <Grid item xs={6}>
                <NavLogo />
            </Grid>  */}
            <DesktopNavigationTabs navLinks={navLinks} />
            
        </Grid>
    )
}
export default DesktopNavigation
import { Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavigationBarMobile from './mobile/NavigationBarMobile';
import NavigationBarDesktop from './desktop/NavigationBarDesktop';
import { NavigationBarContainer } from '../../styles/navigationBar';
import NavigationBarLogo from './NavigationBarLogo';

const NavigationBar = ({navLinks}) => {

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('md')); 

  return (
    <NavigationBarContainer>
      <Toolbar >
      {matches
        ? <><NavigationBarLogo /> <NavigationBarMobile matches={matches} navLinks={navLinks} /> </>
          : <NavigationBarDesktop matches={matches} navLinks={navLinks} />}
        </Toolbar>
      </NavigationBarContainer>
  )
}

export default NavigationBar
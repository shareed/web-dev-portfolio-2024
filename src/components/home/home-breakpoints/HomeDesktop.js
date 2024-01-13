import { useTheme, useMediaQuery } from '@mui/material'
import HomeDesktopLarge from './HomeDesktopLarge';
import HomeMD from '../home-content/HomeMD';

const HomeDesktop = () => {
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.only('md'))
     //this component will only render when screen size is 900 or above
        //see Home.js
    return (
        <>
            {isMatch
                ? //when screen is 900 to 1199
                <HomeMD />
                :
                    //when screen is 1200 or above
                <HomeDesktopLarge />
            }
        </>

    )
}

export default HomeDesktop;
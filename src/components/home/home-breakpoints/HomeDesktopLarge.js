import { useTheme, useMediaQuery } from '@mui/material'
import HomeLG from '../home-content/HomeLG';
import HomeXL from '../home-content/HomeXL';

const HomeDesktopLarge = () => {
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.only('lg'))
     //this component will only render when screen size is 1200 or above
        //see HomeDesktop.js
    return (
        <>
            {isMatch
                ? //when screen is 1200 to 1535
                <HomeLG />
                :
                    //when screen is 1536 or above
                <HomeXL />
            }
        </>

    )
}

export default HomeDesktopLarge;
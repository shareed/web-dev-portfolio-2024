import { useMediaQuery, useTheme } from '@mui/material'
import HomeXS from '../home-content/HomeXS';
import HomeSM from '../home-content/HomeSM';

const HomeMobile = () => {
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.only('xs'))
    //this component will only render when screen size is below 900
        //see Home.js

    return (
        <>
            {isMatch
                ?
                 //when screen is 0 to 599
                <HomeXS />
                :
                //when screen size is 600 to 899
                <HomeSM />
            }
        </>
        
  )
}

export default HomeMobile;
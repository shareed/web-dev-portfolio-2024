import { useTheme, useMediaQuery, Box } from "@mui/material";
import HomeMobile from "./homeMobile/HomeMobile";
import HomeDesktop from "./homeDesktop/HomeDesktop";
import HomeDesktopXL from "./homeDesktop/HomeDesktopXL";



const Desgins = () => {
    const theme = useTheme();

    // const isXSMatch = useMediaQuery(theme.breakpoints.only('xs'));
    const isSMMatch = useMediaQuery(theme.breakpoints.down('md'));
    const isXLMatch = useMediaQuery(theme.breakpoints.up('xl'));
    // const isLGMatch = useMediaQuery(theme.breakpoints.only('lg'));
   

    return (
        <>
            <Box >
                {isSMMatch ? <HomeMobile />
                    : isXLMatch ? <HomeDesktopXL />
                    : <HomeDesktop />
                                
                }
                </Box>
            </>
  )
}

export default Desgins
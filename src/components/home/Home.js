import { useTheme, useMediaQuery, Box } from "@mui/material";
import HomeMD from "./home-content/HomeMD";
import HomeLG from "./home-content/HomeLG";
import HomeXL from "./home-content/HomeXL";
import HomeMobile from "./homeMobile/HomeMobile";

const Desgins = () => {
    const theme = useTheme();

    // const isXSMatch = useMediaQuery(theme.breakpoints.only('xs'));
    const isSMMatch = useMediaQuery(theme.breakpoints.down('md'));
    const isMDMatch = useMediaQuery(theme.breakpoints.only('md'));
    const isLGMatch = useMediaQuery(theme.breakpoints.only('lg'));
   

    return (
        <>
            <Box >
            {isSMMatch ? <HomeMobile />
                    : isMDMatch ? <HomeMD />
                        : isLGMatch ? <HomeLG />
                            : <HomeXL />
                                
                }
                </Box>
            </>
  )
}

export default Desgins
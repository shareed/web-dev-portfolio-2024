import { useTheme, useMediaQuery, Box } from "@mui/material";
import HomeXS from "./home-content/HomeXS";
import HomeSM from "./home-content/HomeSM";
import HomeMD from "./home-content/HomeMD";
import HomeLG from "./home-content/HomeLG";
import HomeXL from "./home-content/HomeXL";

const Desgins = () => {
    const theme = useTheme();

    const isXSMatch = useMediaQuery(theme.breakpoints.only('xs'));
    const isSMMatch = useMediaQuery(theme.breakpoints.only('sm'));
    const isMDMatch = useMediaQuery(theme.breakpoints.only('md'));
    const isLGMatch = useMediaQuery(theme.breakpoints.only('lg'));
   

    return (
        <>
            <Box >
            {isXSMatch ? <HomeXS />
                : isSMMatch ? <HomeSM />
                    : isMDMatch ? <HomeMD />
                        : isLGMatch ? <HomeLG />
                            : <HomeXL />
                                
                }
                </Box>
            </>
  )
}

export default Desgins
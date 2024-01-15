import { useTheme, useMediaQuery, Box } from "@mui/material";import AboutXS from './about/AboutXS';
import AboutSM from './about/AboutSM';
import AboutMD from './about/AboutMD';
import AboutLG from './about/AboutLG';
import AboutXL from './about/AboutXL';

const About = () => {
    const theme = useTheme();

    const isXSMatch = useMediaQuery(theme.breakpoints.only('xs'));
    const isSMMatch = useMediaQuery(theme.breakpoints.only('sm'));
    const isMDMatch = useMediaQuery(theme.breakpoints.only('md'));
    const isLGMatch = useMediaQuery(theme.breakpoints.only('lg'));
   

    return (
        <>
            <Box >
            {isXSMatch ? <AboutXS />
                : isSMMatch ? <AboutSM />
                    : isMDMatch ? <AboutMD />
                        : isLGMatch ? <AboutLG />
                            : <AboutXL />
                                
                }
                </Box>
            </>
  )
}

export default About
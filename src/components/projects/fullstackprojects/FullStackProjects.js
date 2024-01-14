import { useTheme, useMediaQuery, Box } from "@mui/material";
import FSPXS from './fullstackprojects-content/FSPXS';

const FullStackProjects = () => {
    const theme = useTheme();

    const isXSMatch = useMediaQuery(theme.breakpoints.only('xs'));
    const isSMMatch = useMediaQuery(theme.breakpoints.only('sm'));
    const isMDMatch = useMediaQuery(theme.breakpoints.only('md'));
    const isLGMatch = useMediaQuery(theme.breakpoints.only('lg'));
   

    return (
        <>
            <Box >
            {isXSMatch ? <FSPXS />
                : isSMMatch ? <h1>SM</h1>
                    : isMDMatch ? <h1>MD</h1>
                        : isLGMatch ? <h1>LG</h1>
                            : <h1>XL</h1>
                                
                }
                </Box>
            </>
  )
}

export default FullStackProjects;
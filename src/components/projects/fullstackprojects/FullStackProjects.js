import { useTheme, useMediaQuery, Box } from "@mui/material";
import FSPXS from './fullstackprojects-content/FSPXS';
import FSPSM from './fullstackprojects-content/FSPSM';
import FSPMD from './fullstackprojects-content/FSPMD';
import FSPLG from './fullstackprojects-content/FSPLG';
import FSPXL from './fullstackprojects-content/FSPXL';

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
                    : isSMMatch ? <FSPSM />
                        : isMDMatch ? <FSPMD />
                            : isLGMatch ? <FSPLG />
                                : <FSPXL />

                }
            </Box>
        </>
    )
}

export default FullStackProjects;
import { useTheme, useMediaQuery, Box } from "@mui/material";
import ContactXS from '../contact/contact/ContactXS';
import ContactSM from '../contact/contact/ContactSM';
import ContactMD from '../contact/contact/ContactMD';
import ContactLG from '../contact/contact/ContactLG';
import ContactXL from '../contact/contact/ContactXL';




const Contact = () => {
    const theme = useTheme();

    const isXSMatch = useMediaQuery(theme.breakpoints.only('xs'));
    const isSMMatch = useMediaQuery(theme.breakpoints.only('sm'));
    const isMDMatch = useMediaQuery(theme.breakpoints.only('md'));
    const isLGMatch = useMediaQuery(theme.breakpoints.only('lg'));
   

    return (
        <>
            <Box >
            {isXSMatch ? <ContactXS />
                : isSMMatch ? <ContactSM />
                    : isMDMatch ? <ContactMD />
                        : isLGMatch ? <ContactLG />
                            : <ContactXL />
                                
                }
                </Box>
            </>
  )
}

export default Contact
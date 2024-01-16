import { Box, Typography } from '@mui/material';
import logoS from '../../logo-s.svg'
import logoS2 from '../../logo-s2.svg'
import logoS3 from '../../logo-s3.svg'
import { NavLink } from 'react-router-dom';

const NavLogo = () => {
    return (
        <Box textAlign={'center'} color={'rgb(179, 10, 179)'}>
            <NavLink to={'/'}>
            <Box>
                <Typography >
                    <img src={logoS3} alt="" width={'60rem'} />
                </Typography>
            </Box>
            <Box mt={'-4rem'}>
                <Typography >
                    <img src={logoS2} alt="" width={'60rem'} />
                </Typography>
            </Box>

            <Box mt={'-4rem'}>
                <Typography >
                    <img src={logoS} alt="" width={'60rem'} />
                </Typography>
            </Box>
            </NavLink>
        </Box>
    )
}

export default NavLogo
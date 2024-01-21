import { Box, Button, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HeaderBottomLine, HeaderMiddleLineBottom, HeaderMiddleLineMiddle, HeaderMiddleLineTop, HeaderTopLine, HomeMobileContainer } from '../../../styles/home';
const HomeXS = () => {
    return (
        <HomeMobileContainer >
            <Box ml={'3rem'} mr={'3rem'}>
{/* TOP TEXT ------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container >
                    <Grid item sx={12} >
                        <HeaderTopLine variant='h4' >
                            Hi I'm
                        </HeaderTopLine>
                    </Grid>
                </Grid>
{/* NAME------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container>
                    <Grid item sx={12}  >
                        <HeaderMiddleLineBottom variant='h3'  >
                            Shannon Reed
                        </HeaderMiddleLineBottom>
                        <HeaderMiddleLineMiddle variant='h3'>
                            Shannon Reed
                        </HeaderMiddleLineMiddle>
                        <HeaderMiddleLineTop variant='h3' >
                            Shannon Reed
                        </HeaderMiddleLineTop>
                    </Grid>
                </Grid>
{/* BOTTOM TEXT ------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container>
                    <Grid item sx={12}  >
                        <HeaderBottomLine variant='h4'>
                            Web Developer & Designer
                        </HeaderBottomLine>
                    </Grid>
                </Grid>
            </Box>


{/* BUTTONS------------------------------------------------------------------------------------------------------------------------ */}
            <Box display={'flex'} flexDirection={'column'} m={'2rem'} ml={'7rem'} mr={'7rem'} >
                <NavLink to={'/contact'}>
                    <Button id='contact-home-button' sx={{ backgroundColor: 'rgb(179, 10, 179)', mb: '1rem', width: '100%' }}  >
                        <Typography variant='p'>
                            Contact Me
                        </Typography>
                    </Button>
                </NavLink>

                <NavLink to={'/projects'}>
                    <Button id='projects-home-button' sx={{ backgroundColor: '#50424F', width: '100%' }}>
                        <Typography variant='p'>
                            Projects

                        </Typography>
                    </Button>
                </NavLink>
            </Box>
        </HomeMobileContainer >
    )
}

export default HomeXS
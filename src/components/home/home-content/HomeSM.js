import { Box, Button, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HeaderTopLine, HomeMobileContainer, HeaderMiddleLineBottom, HeaderMiddleLineMiddle, HeaderMiddleLineTop, HomeHeaderContainer, HeaderBottomLine } from '../../../styles/home';
const HomeSM = () => {
    return (
        <HomeMobileContainer >
{/* TEXT ------------------------------------------------------------------------------------------------------------------------ */}
            <HomeHeaderContainer>

{/* TOP TEXT ------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container >
                    <Grid item sx={12} >
                        <HeaderTopLine variant='h3'>
                            Hi I'm SM
                        </HeaderTopLine>
                    </Grid>
                </Grid>
{/* NAME------------------------------------------------------------------------------------------------------------------------ */}

                <Grid container>
                    <Grid item sx={12}  >
                    <HeaderMiddleLineBottom variant='h2'  >
                            Shannon Reed
                        </HeaderMiddleLineBottom>
                        <HeaderMiddleLineMiddle variant='h2' >
                            Shannon Reed
                        </HeaderMiddleLineMiddle>
                        <HeaderMiddleLineTop variant='h2' >
                            Shannon Reed
                        </HeaderMiddleLineTop>
                    </Grid>
                </Grid>
{/* BOTTOM TEXT ------------------------------------------------------------------------------------------------------------------------ */}

                <Grid container>
                    <Grid item sx={12}  >
                        <HeaderBottomLine variant='h3'>
                            Web Developer & Designer
                        </HeaderBottomLine>
                    </Grid>
                </Grid>
            </HomeHeaderContainer>
{/* BUTTONS------------------------------------------------------------------------------------------------------------------------ */}

            <Box display={'flex'} flexDirection={'column'} m={'2rem'} ml={'15rem'} mr={'15rem'} >
            <NavLink  to={'/contact'}>
                <Button id='contact-home-button' sx={{ backgroundColor: 'rgb(179, 10, 179)', mb: '1rem', width: '100%'  }}  >
                    <Typography variant='p'>
                        Contact Me
                    </Typography>
                </Button>
                </NavLink>

                <NavLink  to={'/projects'}>
                <Button id='projects-home-button' sx={{ backgroundColor: '#50424F', width: '100%'  }}>
                    <Typography variant='p'>
                        Projects             
                    </Typography>
                </Button>
                </NavLink>
            </Box>
        </HomeMobileContainer >
  )
}

export default HomeSM
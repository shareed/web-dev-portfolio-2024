import { Grid, Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
    DesktopLeftSide,
    IntroBottomText,
    IntroNameBottom,
    IntroNameMiddle,
    IntroNameTop,
    IntroText,
    HomeButtonContainer,
    HomeContactButton,
    HomeProjectButton
} from '../../../styles/home';



const HomeMD = () => {
    return (
        <Grid container >
            {/* LEFT SIDE------------------------------------------------------------------------------------------------------------------------ */}

            <DesktopLeftSide item md={7}>
                {/* TOP TEXT ------------------------------------------------------------------------------------------------------------------------ */}

                
            <Grid container ml={'3rem'} >
                <Grid item sx={12} >
                    <IntroText variant='h4'>
                        Hi I'm MD
                    </IntroText>
                </Grid>
                </Grid>
                

 {/* NAME------------------------------------------------------------------------------------------------------------------------ */}
               
            <Grid container ml={'4rem'}>
                <Grid item sx={12}   >
                    <IntroNameBottom variant='h3'>
                        Shannon Reed
                    </IntroNameBottom>
                    <IntroNameMiddle variant='h3'>
                        Shannon Reed
                    </IntroNameMiddle>
                    <IntroNameTop variant='h3' mt={'-3.4rem'} color={'#B30AB3'} fontFamily={'"Lemon", serif'} >
                        Shannon Reed
                    </IntroNameTop>
                </Grid>
                </Grid>
                {/* BOTTOM TEXT ------------------------------------------------------------------------------------------------------------------------ */}

                <Grid container ml={'4rem'} mb={'2rem'}>
                    <Grid item sx={12}  >
                        <IntroBottomText variant='h5'>
                            Web Developer and Designer
                        </IntroBottomText>
                    </Grid>

                </Grid>
{/* BUTTONS------------------------------------------------------------------------------------------------------------------------ */}

                <HomeButtonContainer >
                    <NavLink to={'/contact'}>
                        <HomeContactButton id='contact-home-button' >
                            <Typography variant='p'>
                                Contact Me
                            </Typography>
                        </HomeContactButton>
                    </NavLink>

                    <NavLink to={'/projects'}>
                        <HomeProjectButton id='projects-home-button'>
                            <Typography variant='p'>
                                Projects

                            </Typography>
                        </HomeProjectButton>
                    </NavLink>
                </HomeButtonContainer>
            </DesktopLeftSide>
{/* RIGHT SIDE------------------------------------------------------------------------------------------------------------------------ */}

            <Grid item md={5} sx={{ backgroundColor: '#50424F', height: '80vh' }} mt={'3rem'} pt={'2rem'}>
                <Box backgroundColor={'rgb(179, 10, 179)'} m={'1rem'} p={'1rem'} height={'35vh'}>
                    <Typography variant='h4' color={'white'}  >
                        Shannon Reed
                    </Typography>
                </Box>

                <Box mt={'2rem'} backgroundColor={'rgb(179, 10, 179)'} m={'1rem'} p={'1rem'} height={'5vh'}>
                    <Typography variant='p' color={'white'} >
                        Shannon Reed
                    </Typography>
                </Box>

                <Box mt={'4rem'} backgroundColor={'rgb(179, 10, 179)'} height={'13vh'} m={'1rem'} p={'1rem'}>
                    <Typography variant='p' color={'white'}  >
                        Shannon Reed
                    </Typography>
                </Box>

            </Grid>
        </Grid>
    )
}

export default HomeMD
import { Grid, Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { DesktopLeftSide, IntroNameBottom, IntroNameMiddle, IntroText } from '../../../styles/home';


const HomeXL = () => {
    return (
        <Grid container>
{/* LEFT SIDE------------------------------------------------------------------------------------------------------------------------ */}

            <DesktopLeftSide item md={7} >
                 
{/* TOP TEXT ------------------------------------------------------------------------------------------------------------------------ */}

            <Grid container ml={'3rem'} >
                <Grid item sx={12} >
                    <IntroText variant='h4'>
                        Hi I'm XL
                    </IntroText>
                </Grid>
                </Grid>
                

 {/* NAME------------------------------------------------------------------------------------------------------------------------ */}
               
            <Grid container ml={'4rem'}>
                <Grid item sx={12}   >
                    <IntroNameBottom variant='h2'>
                        Shannon Reed
                    </IntroNameBottom>
                    <IntroNameMiddle variant='h2'>
                        Shannon Reed
                    </IntroNameMiddle>
                    <Typography variant='h2' mt={'-4.4rem'} color={'#B30AB3'} fontFamily={'"Lemon", serif'} >
                        Shannon Reed
                    </Typography>
                </Grid>
                </Grid>
                
{/* BOTTOM TEXT ------------------------------------------------------------------------------------------------------------------------ */}

            <Grid container ml={'4rem'}>
                <Grid item sx={12}  >
                    <Typography variant='h4' color={'white'} fontFamily={'"Lemon", serif'} >
                        Web Developer and Designer
                    </Typography>
                </Grid>
                </Grid>
{/* BUTTONS------------------------------------------------------------------------------------------------------------------------ */}

            <Box display={'flex'} flexDirection={'column'} m={'2rem'} ml={'5rem'} mr={'5rem'} >
                    <NavLink to={'/contact'}>
                    <Button id='contact-home-button' sx={{ backgroundColor: 'rgb(179, 10, 179)', color: '#FFFFFF', mb: '1rem', width: '50%'  }}  >
                        <Typography variant='p'>
                            Contact Me
                        </Typography>
                    </Button>
                    </NavLink>
                    <NavLink to={'/projects'}>
                    <Button id='projects-home-button' sx={{ backgroundColor: '#50424F', color: '#FFFFFF',  width: '50%'  }}>
                    <Typography variant='p'>
                            Projects
                        </Typography>
                    </Button>
                    </NavLink>
                </Box>
            </DesktopLeftSide>

{/* RIGHT SIDE------------------------------------------------------------------------------------------------------------------------ */}
    
        <Grid item md={5} sx={{ backgroundColor: 'rgb(77, 2, 77)', height: '80vh' }} mt={'3rem'} pt={'2rem'}>
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

export default HomeXL
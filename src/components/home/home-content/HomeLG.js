import { Grid, Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const HomeLG = () => {
    return (
        <Grid container sx={{}}>
{/* LEFT SIDE------------------------------------------------------------------------------------------------------------------------ */}
            <Grid item md={7} sx={{ color: 'red', height: '100vh' }} mt={'8rem'} pt={'2rem'}>
 {/* TOP TEXT ------------------------------------------------------------------------------------------------------------------------ */}
               
                <Grid container ml={'3rem'} >
                    <Grid item sx={12} >
                        <Typography variant='h4' textAlign={'center'} color={'white'} fontFamily={'"Lemon", serif'} >
                            Hi I'm LG
                        </Typography>
                    </Grid>
                </Grid>
{/* NAME------------------------------------------------------------------------------------------------------------------------ */}

                <Grid container ml={'4rem'}>
                    <Grid item sx={12}   >
                        <Typography variant='h3' color={'#50424F'} fontFamily={'"Lemon", serif'} >
                            Shannon Reed
                        </Typography>
                        <Typography variant='h3' mt={'-3.4rem'} color={'#B7A6B5'} fontFamily={'"Lemon", serif'} >
                            Shannon Reed
                        </Typography>
                        <Typography variant='h3' mt={'-3.4rem'} color={'#B30AB3'} fontFamily={'"Lemon", serif'} >
                            Shannon Reed
                        </Typography>
                    </Grid>
                </Grid>
{/* BOTTOM TEXT ------------------------------------------------------------------------------------------------------------------------ */}

                <Grid container ml={'4rem'}>
                    <Grid item sx={12}  >
                        <Typography variant='h5' color={'white'} fontFamily={'"Lemon", serif'} >
                            Web Developer and Designer
                        </Typography>
                    </Grid>
                </Grid>


{/* BUTTONS------------------------------------------------------------------------------------------------------------------------ */}
              
                <Box display={'flex'} flexDirection={'column'} m={'2rem'} ml={'5rem'} mr={'5rem'} >
                    <NavLink to={'/contact'}>
                    <Button id='contact-home-button' sx={{ backgroundColor: 'rgb(179, 10, 179)', color: '#FFFFFF', mb: '1rem', width: '100%'  }}  >
                        <Typography variant='p'>
                            Contact Me
                        </Typography>
                    </Button>
                    </NavLink>
                    <NavLink to={'/projects'}>
                    <Button id='projects-home-button' sx={{ backgroundColor: '#50424F', color: '#FFFFFF',  width: '100%'  }}>
                        <Typography variant='p'>
                            Projects
                        </Typography>
                    </Button>
                    </NavLink>
                </Box>
            </Grid>




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


export default HomeLG
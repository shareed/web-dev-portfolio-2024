import { Box, Button, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
const HomeXS = () => {
    return (
        <Box sx={{ height: '100vh', paddingTop: '10rem' }} >
            <Box ml={'3rem'} mr={'3rem'}>
{/* TOP TEXT ------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container >
                    <Grid item sx={12} >
                        <Typography variant='h4' color={'white'} fontFamily={'"Lemon", serif'} >
                            Hi I'm
                        </Typography>
                    </Grid>
                </Grid>
{/* NAME------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container>
                    <Grid item sx={12}  >
                        <Typography variant='h3' fontSize={'2.9rem'} color={'#50424F'} fontFamily={'"Lemon", serif'} >
                            Shannon Reed
                        </Typography>
                        <Typography variant='h3' fontSize={'2.9rem'} mt={'-3.3rem'} color={'#B7A6B5'} fontFamily={'"Lemon", serif'} >
                            Shannon Reed
                        </Typography>
                        <Typography variant='h3' fontSize={'2.9rem'} mt={'-3.3rem'} color={'#B30AB3'} fontFamily={'"Lemon", serif'} >
                            Shannon Reed
                        </Typography>
                    </Grid>
                </Grid>
{/* BOTTOM TEXT ------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container>
                    <Grid item sx={12}  >
                        <Typography variant='h4' color={'white'} fontFamily={'"Lemon", serif'} >
                            Web Developer & Designer
                        </Typography>
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
        </Box >
    )
}

export default HomeXS
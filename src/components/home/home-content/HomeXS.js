import { Box, Button, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
const HomeXS = () => {
    return (
        <Box sx={{ height: '100vh', paddingTop: '10rem' }} >
            <Box ml={'3rem'} mr={'3rem'}>
                <Grid container >
                    <Grid item sx={12} >
                        <Typography variant='h4' color={'white'} fontFamily={'"Lemon", serif'} >
                            Hi I'm
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={12}  >
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
                <Grid container>
                    <Grid item sx={12}  >
                        <Typography variant='h5' color={'white'} fontFamily={'"Lemon", serif'} >
                            Web Developer and Designer
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            {/* <Grid item sx={12} m={'auto'} width={'57%'}>
                        <Typography variant='h4' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
                            Think
                        </Typography>
                </Grid>
                <Grid item sx={12} m={'auto'} width={'57%'}>
                        <Typography variant='h4' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
                            Design
                        </Typography>
                </Grid>
                <Grid item sx={12} m={'auto'} width={'57%'}>
                        <Typography variant='h4' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
                            Create
                        </Typography>
                </Grid> */}




            <Box display={'flex'} flexDirection={'column'} m={'2rem'} ml={'7rem'} mr={'7rem'} >
                <NavLink to={'/designs'}>
                    <Button id='designs-home-button' sx={{ backgroundColor: 'rgb(179, 10, 179)', mb: '1rem', width: '100%' }}  >
                        <Typography variant='p'>
                            Contact Me
                        </Typography>
                    </Button>
                </NavLink>

                <NavLink to={'/full-stack-projects'}>
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
import { Box, Button, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
const HomeXS = () => {
    return (
        <Box sx={{ height: '100vh', paddingTop: '10rem' }} >
            <Grid container ml={'3rem'}>
                <Grid item sx={12} >
                        <Typography variant='h3' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
                            Hi I'm
                        </Typography>
                </Grid>
                <Grid item sx={12} ml={'2rem'} >
                        <Typography variant='h2' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
                            Shannon 
                        </Typography>
                </Grid>
                <Grid item sx={12} ml={'3rem'} >
                        <Typography variant='h4' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
                            and I
                        </Typography>
                </Grid>
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
            </Grid>

           

            <Box display={'flex'} flexDirection={'column'} m={'2rem'} ml={'7rem'} mr={'7rem'} >
            <NavLink  to={'/designs'}>
                <Button id='designs-home-button' sx={{ backgroundColor: 'rgb(179, 10, 179)', mb: '1rem', width: '100%'  }}  >
                    <Typography variant='p'>
                        UX/UI Designs
                    </Typography>
                </Button>
                </NavLink>

                <NavLink  to={'/full-stack-projects'}>
                <Button id='projects-home-button' sx={{ backgroundColor: '#50424F', width: '100%'  }}>
                    <Typography variant='p'>
                        Full Stack Projects
                        
                    </Typography>
                </Button>
                </NavLink>
            </Box>
        </Box >
    )
}

export default HomeXS
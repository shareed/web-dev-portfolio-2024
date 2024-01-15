import { Box, Button, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const HomeSM = () => {
    return (
        <Box sx={{ height: '100vh', paddingTop: '10rem' }} >
            <Grid container   >
                <Grid item sx={12} m={'auto'} width={'57%'}>
                        <Typography variant='h4' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
                            Shannon Reed
                        </Typography>
                </Grid>
            </Grid>

            <Box fontFamily={'"Lemon", serif;'} m={'2rem'} textAlign={'center'}>
                <Typography sx={{
                    color: '#50424F'
                }}
                    variant='p'
                >
                    Software Engineer located Las Vegas, Nevada. 
                        I specialize in writing clean elegant code that brings 
                        magnificent user friendly designs to life. Holding a 
                        Bachelor’s Degree in Information Technology and Web Development,
                        for 4+ years I have worked with Front-End, Back-End, UX/UI and BPM Software.
                </Typography>
            </Box>

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

export default HomeSM
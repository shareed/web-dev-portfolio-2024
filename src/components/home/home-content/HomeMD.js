import { Grid, Box, Button, Typography } from '@mui/material';

const HomeMD = () => {
    return (
        <Grid container sx={{  }}>
            <Grid item md={7} sx={{  color: 'red', height: '100vh' }} mt={'8rem'} pt={'2rem'}>
                <Box sx={{}} mr={'1rem'} ml={'1rem'} >
                    <Typography variant='h3' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
                        Learn
                    </Typography>
                    <Typography variant='h3' color={'rgb(179, 10, 179)'} textAlign={'center'} fontFamily={'"Lemon", serif'}>
                        Material Design
                    </Typography>
                </Box>
                <Box fontFamily={'"Lemon", serif;'} m={'3rem'} mb={'2rem'} mt={'2rem'} textAlign={'center'}>
                    <Typography sx={{
                        color: '#50424F'
                    }}
                        variant='p'
                    >
                        Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.
                    </Typography>
                </Box>

                <Box display={'flex'} justifyContent={'space-between'} m={'7rem'} mb={'2rem'} mt={'0'}>
                    <Button sx={{ backgroundColor: 'rgb(179, 10, 179)', color: '#FFFFFF', p: '1rem'  }}  >
                        <Typography variant='p'>
                            Start Learning
                        </Typography>

                    </Button>

                    <Button sx={{ backgroundColor: '#50424F', color: '#FFFFFF', p: '1rem' }}>
                        <Typography variant='p'>
                            View Templates
                        </Typography>

                    </Button>
                </Box>
            </Grid>
            <Grid item md={5} sx={{ backgroundColor: 'rgb(77, 2, 77)', height: '80vh' }} mt={'3rem'} pt={'2rem'}>
                <Box backgroundColor={'rgb(179, 10, 179)'} m={'1rem'} p={'1rem'} height={'35vh'}>
                <Typography variant='h4' color={'white'}  >
                    Learn Material Design
                </Typography>
                </Box>

                <Box mt={'2rem'} backgroundColor={'rgb(179, 10, 179)'} m={'1rem'} p={'1rem'} height={'5vh'}>
                <Typography variant='p' color={'white'} >
                    Learn Material Design
                </Typography>
                </Box>
                
                <Box mt={'4rem'} backgroundColor={'rgb(179, 10, 179)'} height={'13vh'}  m={'1rem'} p={'1rem'}>
                <Typography variant='p' color={'white'}  >
                    Learn Material Design
                </Typography>
                </Box>

            </Grid>
        </Grid>
    )
}

export default HomeMD
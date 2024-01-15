import { Grid, Box, Button, Typography } from '@mui/material';

const HomeMD = () => {
    return (
        <Grid container sx={{}}>
            <Grid item md={7} sx={{ color: 'red', height: '100vh' }} mt={'8rem'} pt={'2rem'}>
                <Box sx={{}} mr={'1rem'} ml={'1rem'} >
                    <Typography variant='h3' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
                        Shannon Reed
                    </Typography>
                </Box>
                <Box fontFamily={'"Lemon", serif;'} m={'3rem'} mb={'2rem'} mt={'2rem'} textAlign={'center'}>
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

                <Box display={'flex'} justifyContent={'space-between'} m={'7rem'} mb={'2rem'} mt={'0'}>
                    <Button sx={{ backgroundColor: 'rgb(179, 10, 179)', color: '#FFFFFF', p: '1rem' }}  >
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
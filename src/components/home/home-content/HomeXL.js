import { Grid, Box, Button, Typography } from '@mui/material';

const HomeXL = () => {
    return (
        <Grid container sx={{}}>
        <Grid item md={7} sx={{ color: 'red', height: '100vh' }} mt={'8rem'} pt={'2rem'}>
            <Grid container ml={'3rem'} >
                <Grid item sx={12} >
                    <Typography variant='h4' textAlign={'center'} color={'white'} fontFamily={'"Lemon", serif'} >
                        Hi I'm XL
                    </Typography>
                </Grid>
            </Grid>
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
            <Grid container ml={'4rem'}>
                <Grid item sx={12}  >
                    <Typography variant='h5' color={'white'} fontFamily={'"Lemon", serif'} >
                        Web Developer and Designer
                    </Typography>
                </Grid>
            </Grid>
            <Box display={'flex'} justifyContent={'space-between'} m={'12rem'} mb={'2rem'} mt={'0'}>
                <Button sx={{ backgroundColor: 'rgb(179, 10, 179)', color: '#FFFFFF', }}  >
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
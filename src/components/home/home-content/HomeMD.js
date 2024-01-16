import { Grid, Box, Button, Typography } from '@mui/material';

const HomeMD = () => {
    return (
        <Grid container >
            <Grid item md={7} sx={{ height: '100vh' }} mt={'8rem'} pt={'2rem'} >
            <Grid container ml={'3rem'} >
                    <Grid item sx={12} >
                        <Typography variant='h4' textAlign={'center'} color={'white'} fontFamily={'"Lemon", serif'} >
                            Hi I'm MD
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={12} ml={'4rem'}  >
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
                    <Grid item sx={12} ml={'4rem'} >
                        <Typography variant='h5' color={'white'} fontFamily={'"Lemon", serif'} >
                            Web Developer and Designer
                        </Typography>
                    </Grid>
                </Grid>
                
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
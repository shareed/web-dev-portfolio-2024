import { Grid, Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import me from '../../../me2.jpg'


const AboutLG = () => {
  return (
    <Box pt={'5rem'} height={'100vh'}>

      <Typography variant='h3'>
        ABOUT ME LG
    </Typography>
      <Grid container paddingTop={'5rem'} >
      <Grid item lg={2} />
      <Grid item  lg={4}>
            <Card sx={{m: '1rem', backgroundColor: '#50424F', color: '#FFFFFF', border: '.2rem solid #B30AB3'}}>
            <CardMedia component='img' height='240'  image={me} alt={'Elly'}  />
              <CardContent color={'#B30AB3'}>
              <Typography gutterBottom variant="h5" component="div">
                    About ME
                  </Typography>
                  <Typography variant="body2" >
                  You will get a full stack web Developer with over 5 years of 
        expreience Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item lg={2} />
          <Grid item  lg={4}>
            <Card sx={{m: '1rem', backgroundColor: '#50424F', color: '#FFFFFF', border: '.2rem solid #B30AB3'}}>
            <CardMedia component='img' height='240'  image={me} alt={'Elly'}  />
              <CardContent color={'#B30AB3'}>
              <Typography gutterBottom variant="h5" component="div">
                    When You Hire Me
                  </Typography>
                  <Typography variant="body2" >
                  You will get a full stack web Developer with over 5 years of 
        expreience Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </Box>
  )
}
export default AboutLG
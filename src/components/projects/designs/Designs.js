import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { designs } from '../../data';

const Designs = () => {
  return (
    <Box paddingTop={'5rem'} m={'1rem'}>
      <Box ml={'2rem'} mr={'2rem'} color='#FFFFFF'>
      <Typography variant='h5'  >
        Desgin Templates
      </Typography>
      <Typography variant='p' >
        Collection of design templates created using React and Material UI
      </Typography>
      </Box>
      <Grid container paddingTop={'5rem'} >
        {
          designs.map(design => {
        return (
          <Grid item key={design.id} xs={12}>
            <Card sx={{m: '1rem', backgroundColor: 'rgb(77, 2, 77)', color: '#FFFFFF'}}>
              <CardMedia component='img' height='140' image={ design.image } alt={ design.name} />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                    {design.name}
                  </Typography>
                  <Typography variant="body2" >
                    {design.description}
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
        </Grid>
      {/* <Grid container paddingTop={'5rem'} sx={{ backgroundColor: 'yellow', display: 'flex', justifyContent: 'space-between' }} >
        <Grid item sx={6} backgroundColor='orange' width={'50%'} >
          <Box>
            <Typography variant='p' color='#FFFFFF' >
              Desgins Content
            </Typography>
          </Box>
        </Grid>

        <Grid item sx={6} backgroundColor='green' width={'50%'}>
          <Box>
            <Typography variant='p' color='#FFFFFF' >
              Desgins Image
            </Typography>
          </Box>
        </Grid>

      </Grid> */}
    </Box>
  )
}

export default Designs
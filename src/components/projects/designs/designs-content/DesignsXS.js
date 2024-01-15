import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { designs } from '../../../data/designData';

const DesignsXS = () => {
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
            <Card sx={{m: '1rem', backgroundColor: '#50424F', color: '#FFFFFF', border: '.2rem solid #B30AB3'}}>
              <CardMedia component='img' height='140' image={design.image} alt={design.name}  />
              <CardContent color={'#B30AB3'}>
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
    </Box>
  )
}

export default DesignsXS;
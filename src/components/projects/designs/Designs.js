import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { designs } from '../../data';

const Designs = () => {
  return (
    <Box paddingTop={'5rem'}>
      <Typography variant='h1' color='#FFFFFF' >
        Desgins
      </Typography>

      <Grid container paddingTop={'5rem'} sx={{ backgroundColor: 'yellow' }}>
        {
          designs.map(design => {
        return (
          <Grid item key={design.id} xs={12}>
            <Card>
              <CardMedia component='img' height='140' image={ design.image } alt={ design.name} />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                    {design.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
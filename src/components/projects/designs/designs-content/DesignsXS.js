import { Box, CardContent, Grid, Typography } from '@mui/material';
import { designs } from '../../../data/designData';
import { ProjectCard, ProjectCardMedia } from '../../../../styles/projects';

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
            <ProjectCard>
              <ProjectCardMedia  image={design.image} alt={design.name}  />
              <CardContent color={'#B30AB3'}>
              <Typography gutterBottom variant="h5" component="div">
                    {design.name}
                  </Typography>
                  <Typography variant="body2" >
                    {design.description}
                  </Typography>
              </CardContent>
              </ProjectCard>
          </Grid>
        )
      })}
        </Grid>
    </Box>
  )
}

export default DesignsXS;
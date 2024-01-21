import { CardContent, Grid, Typography } from '@mui/material';
import { designs } from '../../../data/designData';
import { ProjectCard, ProjectCardMedia, ProjectsContainer, ProjectsHeaderContainer } from '../../../../styles/projects';

const DesignsXS = () => {
  return (
    <ProjectsContainer>
      <ProjectsHeaderContainer>
      <Typography variant='h5'  >
        Desgin Templates
      </Typography>
      <Typography variant='p' >
        Collection of design templates created using React and Material UI
      </Typography>
      </ProjectsHeaderContainer>
      <Grid container paddingTop={'5rem'} >
        {
          designs.map(design => {
        return (
          <Grid item key={design.id} xs={12}>
            <ProjectCard>
              <ProjectCardMedia image={design.image} alt={design.name}  />
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
    </ProjectsContainer>
  )
}

export default DesignsXS;
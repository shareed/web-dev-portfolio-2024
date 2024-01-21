import { Box, CardContent, Grid, Typography } from '@mui/material';
import { projects } from '../../../data/projectData';
import { ProjectCard, ProjectCardMedia } from '../../../../styles/projects';

const FSPXS = () => {
  return (
    <Box paddingTop={'5rem'} m={'1rem'}>
      <Box ml={'2rem'} mr={'2rem'} color='#FFFFFF'>
      <Typography variant='h5'  >
        Full Stack Projects
      </Typography>
      <Typography variant='p' >
        Collection of Full Stack projects created using MERN stack
      </Typography>
      </Box>
      <Grid container paddingTop={'5rem'} >
        {
          projects.map(project => {
        return (
          <Grid item key={project.id} xs={12}>
            <ProjectCard >
              <ProjectCardMedia component='img' height='140' image={ project.image } alt={ project.name} />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" >
                    {project.description}
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


export default FSPXS;
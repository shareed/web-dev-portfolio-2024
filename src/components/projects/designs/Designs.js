import { Box, Grid, Typography } from '@mui/material'


const Designs = () => {
  return (
    <Box>
      <Typography variant='h1' color='#FFFFFF' >
              Desgins
          </Typography>
      <Grid container paddingTop={'5rem'} sx={{backgroundColor: 'yellow', display: 'flex', justifyContent: 'space-between'}} >
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
          
      </Grid>
    </Box>
  )
}

export default Designs
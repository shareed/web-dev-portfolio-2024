import { Box, Typography, Button } from '@mui/material';

const HomeSM = () => {
  return (
    <Box sx={{ backgroundColor: 'black', height: '100vh' }} mt={'3rem'} pt={'2rem'} >
      <Box sx={{}} mr={'1rem'} ml={'1rem'} >
        <Typography variant='h4' color={'white'} textAlign={'center'} fontFamily={'"Lemon", serif'} >
          Learn
        </Typography>
        <Typography variant='h4' color={'rgb(179, 10, 179)'} textAlign={'center'} fontFamily={'"Lemon", serif'}>
          Material Design
        </Typography>
      </Box>

      <Box fontFamily={'"Lemon", serif;'} m={'4rem'} mb={'2rem'} mt={'2rem'} textAlign={'center'}>
        <Typography sx={{
          color: '#50424F'
        }}
          variant='p'
        >
          Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.
        </Typography>
      </Box>

      <Box display={'flex'} flexDirection={'column'} m={'12rem'} mb={'2rem'} mt={'0'}>
        <Button sx={{ backgroundColor: 'rgb(179, 10, 179)', color: '#FFFFFF', mb: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }}  >
          <Typography variant='p'>
            Start Learning
          </Typography>

        </Button>

        <Button sx={{ backgroundColor: '#50424F', color: '#FFFFFF', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <Typography variant='p'>
            View Templates
          </Typography>
          
        </Button>
      </Box>
    </Box>
  )
}

export default HomeSM
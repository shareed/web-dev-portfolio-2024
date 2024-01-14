import { Box, Button, Grid} from '@mui/material';

const DesktopSocialIcons = () => {
    return (
        <Grid item xs={3}>
        <Box display={'flex'}>
            <Button sx={{ marginLeft: 'auto', backgroundColor: '#f2cd54' }} variant='contained'>Login</Button>
            <Button sx={{ marginLeft: 1, backgroundColor: '#f2cd54' }} variant='contained'>Signup</Button>
        </Box>
    </Grid>
      )
}

export default DesktopSocialIcons
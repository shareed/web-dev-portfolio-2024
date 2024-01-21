import { Grid } from "@mui/material"
import NavigationBarLogo from "../NavigationBarLogo"
import NavigationBarTabs from "./NavigationBarTabs"

const NavigationBarDesktop =  ({navLinks}) => {
  return (
      <Grid sx={{ placeItems: 'center' }} container>
          <Grid item xs={1}>
              <NavigationBarLogo />
          </Grid> 
          <Grid item xs={1}/>
          <NavigationBarTabs navLinks={navLinks} />
          
      </Grid>
  )
}

export default NavigationBarDesktop
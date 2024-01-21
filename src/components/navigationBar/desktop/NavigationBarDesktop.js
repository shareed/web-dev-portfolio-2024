import { Grid } from "@mui/material"
import NavigationBarLogo from "../NavigationBarLogo"
import NavigationBarTabs from "./NavigationBarTabs"
import NavigationBarSocialIcons from "../NavigationBarSocialIcons"

const NavigationBarDesktop = ({ matches, navLinks }) => {
   
    return (
            <Grid sx={{ placeItems: 'center' }} container>
                <Grid item xs={1}>
                    <NavigationBarLogo />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={6}>
                    <NavigationBarTabs navLinks={navLinks} />
                </Grid>
                <Grid item xs={1} />
                <Grid item sx={2}>
                    <NavigationBarSocialIcons matches={matches} />
                </Grid>

            </Grid>
    )
}

export default NavigationBarDesktop
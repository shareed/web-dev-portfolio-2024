import { Grid } from "@mui/material"
import NavigationBarLogo from "../NavigationBarLogo"
import NavigationBarTabs from "./NavigationBarTabs"
import NavigationBarSocialIcons from "../NavigationBarSocialIcons"

const NavigationBarDesktop = ({ matches, navLinks }) => {
   
    return (
            <Grid sx={{ placeItems: 'center' }} container>
                <Grid item md={1}>
                    <NavigationBarLogo />
                </Grid>
                <Grid item md={1} />
                <Grid item md={6}>
                    <NavigationBarTabs navLinks={navLinks} />
                </Grid>
                <Grid item md={1} />
                <Grid item md={2}>
                    <NavigationBarSocialIcons matches={matches} />
                </Grid>

            </Grid>
    )
}

export default NavigationBarDesktop
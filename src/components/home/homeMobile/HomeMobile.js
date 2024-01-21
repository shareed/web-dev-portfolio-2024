import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
    MobileHomeContainer,
    MobileIntroContainer,
    MobileIntroTopLine,
    HomeContactButton,
    IntroNameTop,
    IntroNameMiddle,
    IntroNameBottom,
    IntroBottomText,
    HomeButtonContainer,
    HomeProjectButton,
    
} from '../../../styles/home';



const HomeMobile = () => {
    return (
        <MobileHomeContainer >
            <MobileIntroContainer>
                {/* TOP TEXT ------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container >
                    <Grid item sx={12} >
                        <MobileIntroTopLine variant='h4' >
                            Hi I'm
                        </MobileIntroTopLine>
                    </Grid>
                </Grid>
                {/* NAME------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container>
                    <Grid item sx={12}  >
                        <IntroNameBottom variant='h3'  >
                            Shannon Reed
                        </IntroNameBottom>
                        <IntroNameMiddle variant='h3'>
                            Shannon Reed
                        </IntroNameMiddle>
                        <IntroNameTop variant='h3' >
                            Shannon Reed
                        </IntroNameTop>
                    </Grid>
                </Grid>
                {/* BOTTOM TEXT ------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container>
                    <Grid item sx={12}  >
                        <IntroBottomText variant='h4'>
                            Web Developer & Designer
                        </IntroBottomText>
                    </Grid>
                </Grid>
            </MobileIntroContainer>


            {/* BUTTONS------------------------------------------------------------------------------------------------------------------------ */}
            <HomeButtonContainer >
                <NavLink to={'/contact'} >
                    <HomeContactButton id='contact-home-button' >
                        <Typography variant='p'>
                            Contact Me
                        </Typography>
                    </HomeContactButton>
                </NavLink>

                <NavLink to={'/projects'}>
                    <HomeProjectButton id='projects-home-button' >
                        <Typography variant='p'>
                            Projects
                        </Typography>
                    </HomeProjectButton>
                </NavLink>
            </HomeButtonContainer>
        </MobileHomeContainer >
    )
}

export default HomeMobile
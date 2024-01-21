import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ContactMeButton, HeaderBottomLine, HeaderMiddleLineBottom, HeaderMiddleLineMiddle, HeaderMiddleLineTop, HeaderTopLine, HomeButtonContainer, HomeHeaderContainer, HomeMobileContainer, ProjectButton } from '../../../styles/home';



const HomeMobile = () => {
    return (
        <HomeMobileContainer >
            <HomeHeaderContainer>
                {/* TOP TEXT ------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container >
                    <Grid item sx={12} >
                        <HeaderTopLine variant='h4' >
                            Hi I'm
                        </HeaderTopLine>
                    </Grid>
                </Grid>
                {/* NAME------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container>
                    <Grid item sx={12}  >
                        <HeaderMiddleLineBottom variant='h3'  >
                            Shannon Reed
                        </HeaderMiddleLineBottom>
                        <HeaderMiddleLineMiddle variant='h3'>
                            Shannon Reed
                        </HeaderMiddleLineMiddle>
                        <HeaderMiddleLineTop variant='h3' >
                            Shannon Reed
                        </HeaderMiddleLineTop>
                    </Grid>
                </Grid>
                {/* BOTTOM TEXT ------------------------------------------------------------------------------------------------------------------------ */}
                <Grid container>
                    <Grid item sx={12}  >
                        <HeaderBottomLine variant='h4'>
                            Web Developer & Designer
                        </HeaderBottomLine>
                    </Grid>
                </Grid>
            </HomeHeaderContainer>


            {/* BUTTONS------------------------------------------------------------------------------------------------------------------------ */}
            <HomeButtonContainer >
                <NavLink to={'/contact'} >
                    <ContactMeButton id='contact-home-button' >
                        <Typography variant='p'>
                            Contact Me
                        </Typography>
                    </ContactMeButton>
                </NavLink>

                <NavLink to={'/projects'}>
                    <ProjectButton id='projects-home-button' >
                        <Typography variant='p'>
                            Projects
                        </Typography>
                    </ProjectButton>
                </NavLink>
            </HomeButtonContainer>
        </HomeMobileContainer >
    )
}

export default HomeMobile
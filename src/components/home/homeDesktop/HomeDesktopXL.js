import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
    DesktopLeftSide,
    IntroBottomText,
    IntroNameBottom,
    IntroNameMiddle,
    IntroNameTop,
    IntroText,
    HomeButtonContainer,
    HomeContactButton,
    HomeProjectButton,
    DesktopRightSide,
    DesktopRightTopContent,
    DesktopRightMiddleContent,
    DesktopRightBottomContent
} from '../../../styles/home';



const HomeDesktopXL = () => {
    return (
        <Grid container >
            {/* LEFT SIDE------------------------------------------------------------------------------------------------------------------------ */}

            <DesktopLeftSide item md={7}>
                {/* TOP TEXT ------------------------------------------------------------------------------------------------------------------------ */}

                
            <Grid container ml={'3rem'} >
                <Grid item sx={12} >
                    <IntroText variant='h2'>
                        Hi I'm XL
                    </IntroText>
                </Grid>
                </Grid>
                

 {/* NAME------------------------------------------------------------------------------------------------------------------------ */}
               
            <Grid container ml={'4rem'}>
                <Grid item sx={12}   >
                    <IntroNameBottom variant='h1'>
                        Shannon Reed
                    </IntroNameBottom>
                    <IntroNameMiddle variant='h1'>
                        Shannon Reed
                    </IntroNameMiddle>
                    <IntroNameTop variant='h1' mt={'-3.4rem'} color={'#B30AB3'} fontFamily={'"Lemon", serif'} >
                        Shannon Reed
                    </IntroNameTop>
                </Grid>
                </Grid>
                {/* BOTTOM TEXT ------------------------------------------------------------------------------------------------------------------------ */}

                <Grid container ml={'4rem'} mb={'2rem'}>
                    <Grid item sx={12}  >
                        <IntroBottomText variant='h2'>
                            Web Developer and Designer
                        </IntroBottomText>
                    </Grid>

                </Grid>
{/* BUTTONS------------------------------------------------------------------------------------------------------------------------ */}

                <HomeButtonContainer >
                    <NavLink to={'/contact'}>
                        <HomeContactButton id='contact-home-button' >
                            <Typography variant='p'>
                                Contact Me
                            </Typography>
                        </HomeContactButton>
                    </NavLink>

                    <NavLink to={'/projects'}>
                        <HomeProjectButton id='projects-home-button'>
                            <Typography variant='p'>
                                Projects

                            </Typography>
                        </HomeProjectButton>
                    </NavLink>
                </HomeButtonContainer>
            </DesktopLeftSide>
{/* RIGHT SIDE------------------------------------------------------------------------------------------------------------------------ */}

            <DesktopRightSide item md={5}>
                <DesktopRightTopContent>
                    <Typography variant='h6' color={'white'}  >
                        I do not like to put all my eggs in one basket so I have a
                        passion for full stack development. I have created a catalog
                        of projects to demonstrate the variety of skills I have acummalated.
                    </Typography>
                </DesktopRightTopContent>

                <DesktopRightMiddleContent>
                    <Typography variant='p' color={'white'} >
                        Some of my Top skills
                    </Typography>
                </DesktopRightMiddleContent>

                <DesktopRightBottomContent>
                    <Typography variant='p' color={'white'}  >
                        Play around with some of the functionality I created below
                    </Typography>
                </DesktopRightBottomContent>

            </DesktopRightSide >
        </Grid>
    )
}

export default HomeDesktopXL
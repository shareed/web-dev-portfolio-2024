import { Box, Button, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../theme";
//ALL SCREENS-------------------------------------------------------------------------------------------------------------

export const IntroText = styled(Typography)((() => ({
    fontFamily: 'Lemon, serif',
    color: Colors.white,
})))


// Intro Content Stack Middle Line Text--------------------

export const IntroNameBottom = styled(IntroText)((({theme}) => ({
    color: Colors.secondary,
})))


export const IntroNameMiddle = styled(IntroText)((({theme}) => ({
    color: Colors.primary,
    marginTop: '-3.4rem',
    [theme.breakpoints.only('xl')]: {
        marginTop: '-6.7rem'
    }
})))

export const IntroNameTop = styled(IntroNameMiddle, Typography)((({theme}) => ({
    color: Colors.purple,
})))

// Intro Content Bottom Line Text--------------------
export const IntroBottomText = styled(IntroText)((() => ({
    color: Colors.white,

})))

//Home Buttons------------------------
export const HomeButtonContainer = styled(Box)((({theme}) => ({
    margin: '0 auto',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '6rem',
    [theme.breakpoints.only('xl')]: {
        width: '30%'
    }
})))

export const HomeContactButton = styled(Button)((() => ({
    backgroundColor: Colors.purple,
    width: '100%'


})))

export const HomeProjectButton = styled(Button)((() => ({
    backgroundColor: Colors.secondary,
    width: '100%'

})))




//MOBILE--------------------------------------------------------------------------------------------------------
// Container--------------------
export const MobileHomeContainer = styled(Box)((() => ({
    height: '100vh',
    paddingTop: '10rem',

})))

// Intro Content Container--------------------
export const MobileIntroContainer = styled(Box)((() => ({
    marginLeft: '3rem',
    marginRight: '1rem',
    marginBottom: '2rem'
})))

// Intro Content Top Line Text--------------------
export const MobileIntroTopLine = styled(IntroText)((() => ({
    textAlign: 'center',
})))



//DESKTOP--------------------------------------------------------------------------------------------------------
//Desktop Left Side----------------------------------
export const DesktopLeftSide = styled(Grid)((() => ({
    height: '100vh',
    marginTop: '8rem',
    paddingTop: '2rem'
})))

export const DesktopIntroTopLine = styled(IntroText)((() => ({
    textAlign: 'center',
    color: Colors.white,
})))

//Desktop Right Side----------------------------------
export const DesktopRightSide = styled(Grid)((() => ({
    backgroundColor: Colors.secondary,
    height: '80vh',
    marginTop: '3rem',
    paddingTop: '2rem'
})))

export const DesktopRightContentContainer = styled(Box)((() => ({
    backgroundColor: Colors.purple,
    margin: '1rem',
    padding: '1rem',
})))

export const DesktopRightTopContent = styled(DesktopRightContentContainer)((() => ({
    height: '35vh'
})))

export const DesktopRightMiddleContent = styled(DesktopRightContentContainer)((() => ({
    height: '7vh',
})))

export const DesktopRightBottomContent = styled(DesktopRightContentContainer)((() => ({
    height: '13vh'
})))
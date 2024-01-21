import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../theme";

// Container------------------------------------------------------
export const HomeMobileContainer = styled(Box)((() => ({
    height: '100vh',
    paddingTop: '10rem',

})))

// Header Content Container------------------------------------------------------
export const HomeHeaderContainer = styled(Box)((() => ({
    marginLeft: '3rem',
    marginRight: '1rem',
    marginBottom: '2rem'
})))

// Header Content Text------------------------------------------------------
export const HomeHeaderText = styled(Typography)((() => ({
    fontFamily: 'Lemon, serif'
})))

// Header Content Top Line Text------------------------------------------------------
export const HeaderTopLine = styled(HomeHeaderText)((() => ({
    textAlign: 'center',
    color: Colors.white,
})))

// Header Content Stack Middle Line Text------------------------------------------------------

export const HeaderMiddleLineBottom = styled(HomeHeaderText)((({theme}) => ({
    color: Colors.secondary,
    // [theme.breakpoints.only('xs')]: {
    //     fontSize: '2.9rem',
    // }
})))

export const HeaderMiddleLineMiddle = styled(HomeHeaderText)((({theme}) => ({
    color: Colors.primary,
    marginTop: '-3.4rem',
    // [theme.breakpoints.only('xs')]: {
    //     fontSize: '2.9rem',
    //     marginTop: '-3.3rem',
    // }
})))

export const HeaderMiddleLineTop = styled(HeaderMiddleLineMiddle, Typography)((({theme}) => ({
    color: Colors.purple,
    // [theme.breakpoints.only('sm')]: {
    //     marginTop: '-4.3rem',
    // }

})))

// Header Content Bottom Line Text------------------------------------------------------

export const HeaderBottomLine = styled(HomeHeaderText)((() => ({
    color: Colors.white,

})))

export const HomeButtonContainer = styled(Box)((() => ({
    margin: '0 auto',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '6rem'
})))

export const ContactMeButton = styled(Button)((() => ({
    backgroundColor: Colors.purple,
    width: '100%'


})))

export const ProjectButton = styled(Button)((() => ({
    backgroundColor: Colors.secondary,
    width: '100%'

})))
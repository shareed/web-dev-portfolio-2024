import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../theme";


export const HomeMobileContainer = styled(Box)((() => ({
    height: '100vh',
    paddingTop: '10rem'
})))

export const HomeHeaderContainer = styled(Box)((() => ({
    marginLeft: '3rem',
    marginRight: '1rem',
})))

export const HomeHeaderText = styled(Typography)((() => ({
    fontFamily: 'Lemon, serif'
})))

export const HeaderTopLine = styled(HomeHeaderText)((() => ({
    textAlign: 'center',
    color: Colors.white,
})))

export const HeaderMiddleLineBottom = styled(HomeHeaderText)((({theme}) => ({
    color: Colors.secondary,
    [theme.breakpoints.only('xs')]: {
        fontSize: '2.9rem',
    }
})))

export const HeaderMiddleLineMiddle = styled(HomeHeaderText)((({theme}) => ({
    color: Colors.primary,
    marginTop: '-4.4rem',
    [theme.breakpoints.only('xs')]: {
        fontSize: '2.9rem',
        marginTop: '-3.3rem',
    }
})))

export const HeaderMiddleLineTop = styled(HeaderMiddleLineMiddle, Typography)((({theme}) => ({
    color: Colors.purple,
    [theme.breakpoints.only('sm')]: {
        marginTop: '-4.3rem',
    }

})))

export const HeaderBottomLine = styled(HomeHeaderText)((() => ({
    color: Colors.white,

})))
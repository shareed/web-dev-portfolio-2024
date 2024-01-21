import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../theme";


export const HomeMobileContainer = styled(Box)((() => ({
    height: '100vh',
    paddingTop: '10rem'
})))


export const HeaderTopLine = styled(Typography)((() => ({
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'Lemon, serif'

})))

export const HeaderMiddleLineBottom = styled(Typography)((({theme}) => ({
    color: Colors.secondary,
    fontFamily: 'Lemon, serif',
    [theme.breakpoints.only('xs')]: {
        fontSize: '2.9rem',
    }
})))

export const HeaderMiddleLineMiddle = styled(Typography)((({theme}) => ({
    color: Colors.primary,
    fontFamily: 'Lemon, serif',
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
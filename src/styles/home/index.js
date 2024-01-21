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
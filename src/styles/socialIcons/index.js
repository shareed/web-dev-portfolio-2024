import { Box, List } from "@mui/material";
import styled from "@emotion/styled";
import { Colors } from "../theme";

//the type parameter will allow us to switch between flex and block
export const SocialIconsList = styled(List)(({ type, matches, theme }) => ({
  display: type === "row" ? "flex" : "block",//when type='row' is added to the component it will be displaed flex otherwise it will be block
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
  // [theme.breakpoints.down('md')]: {
  //   width: '100%'
  // }
}));

//Puts the options container at the botton of the screen for Mobile
export const SocialIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.secondary,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  //the container will stay on top of everything
  borderTop: `1px solid ${Colors.purple}`
}));

//Puts the options container at the top of the screen for Desktop
export const SocialIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
  
}));
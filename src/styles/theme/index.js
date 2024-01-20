import { createTheme } from "@mui/material/styles";


export const DrawerWidth = 250;

export const Colors = {
  primary: "#B7A6B5",
  secondary: "#50424F",
  purple: "#B30AB3",
  white: "#FFFFFF",
  black: "#000000",
};

//when this theme is wraps the entire App in App.js the entire application will be able to us this theme
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
//Custom Componenets
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },     
    }
});

export default theme;
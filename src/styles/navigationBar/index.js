import { AppBar, Box} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";


export const NavigationBarContainer = styled(AppBar)((() => ({
    backgroundColor: Colors.primary,
    borderBottom: `.1rem solid ${Colors.purple}`,
    paddingTop: '.5rem',
    paddingBottom: '.5rem'
})))



// Logo--------------------------------------------------------------------------------------------------
export const LogoContainer = styled(Box)((() => ({
    textAlign: 'center',
    color: Colors.purple,

})))

export const LogoImage = styled('img')((({src}) => ({
    src: `url(${src})`,
    width: '3.9rem'
})))


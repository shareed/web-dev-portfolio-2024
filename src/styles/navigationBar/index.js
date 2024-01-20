import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const NavigationBarContainer = styled(AppBar)((() => ({
    backgroundColor: Colors.primary,
    borderBottom: `.1rem solid ${Colors.purple}`
})))

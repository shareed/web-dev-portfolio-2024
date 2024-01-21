import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const Contact = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.white,
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.white}`,
  },
}));
import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {//targeting the label of the input
    color: Colors.white,
  },

  ".MuiInput-root::before": {//targeting the Input of the input
    borderBottom: `1px solid ${Colors.white}`,
  },
}));
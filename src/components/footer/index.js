import { Grid, List, ListItemText, Typography, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Contact, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
    return (
        <Box
            sx={{
                background: Colors.secondary,
                color: Colors.white,
                p: { xs: 4, md: 10 },//another way of adding media queries within sx prop
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px' }//another way of adding media queries within sx prop
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About us</FooterTitle>
                    <Typography variant="caption2">
                        Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
                        incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud.
                    </Typography>

                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privacy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">my account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">Contact Me</FooterTitle>
                    <Box
                        sx={{
                            mt: 4,
                            color: Colors.purple,
                        }}
                    >
                        <FacebookIcon sx={{ mr: 1 }} />
                        <TwitterIcon sx={{ mr: 1 }} />
                        <InstagramIcon />
                    </Box>
                    <Stack>
                    <Contact
                            color="primary"
                            label="Name"
                            variant="filled"
                        />
                        <Contact
                            color="primary"
                            label="Email address"
                            variant="filled"
                        />
                        <Contact
                            color="primary"
                            label="Message"
                            variant="filled"
                        />
                        <Button
                            startIcon={<SendIcon sx={{ color: Colors.white }} />}
                            sx={{ mt: 4, mb: 4 }}
                            variant="contained"
                        >
                            Send
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer
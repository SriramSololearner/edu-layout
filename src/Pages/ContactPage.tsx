import { Box, Button, Container, Grid, TextField } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';
import React from "react";

const ContactPage = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={styles.contact_div}>
                <Box sx={styles.contact_title_div}>
                    <Box sx={styles.contact_title}>Get in Touch !</Box>
                    <Box sx={styles.contact_subtitle}>Contact us for more info & demo</Box>
                </Box>
                <Box sx={styles.contact_details_div}>
                    <Box>
                        <MailOutlineIcon sx={styles.contact_icons} />
                        <Box>xyz@gmail.com</Box>
                    </Box>
                    <Box>
                        <CallSharpIcon sx={styles.contact_icons} />
                        <Box>6374909265</Box>
                    </Box>
                    <Box>
                        <FmdGoodSharpIcon sx={styles.contact_icons} />
                        <Box>MyLocation</Box>
                    </Box>
                </Box>
                <Grid container rowSpacing={1}>
                    <Grid lg={4} md={6} sm={6} xs={12}>
                        <Box sx={styles.contact_input_div}>
                            <TextField
                                sx={styles.inputPropsNameField}
                                placeholder="Your Name...."
                            />
                            <TextField
                                placeholder="Your Email...."
                                sx={styles.inputPropsEmailField}
                            />
                        </Box>
                    </Grid>
                    <Grid lg={7} md={6} sm={6} xs={12}>
                        <TextField
                            placeholder="Your Message Here...."
                            InputProps={{
                                sx: {
                                    height: {
                                        lg: "140px",
                                        md: "140px",
                                        sm: "140px",
                                        xs: "60px",
                                        border: "2px solid black",
                                        borderRadius: "15px",
                                    },
                                    my: { xs: "15px", sm: "0px" },
                                    width: {
                                        lg: "750px",
                                        md: "400px",
                                        sm: "200px",
                                        xs: "300px",
                                        border: "2px solid black",
                                        borderRadius: "15px",
                                    },
                                },
                            }}
                        />
                    </Grid>
                </Grid>

                <Box>
                    <Button sx={styles.button}>Submit</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ContactPage;

const styles = {
    contact_div: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        gap: { lg: "75px", md: "50x", sm: "35px", xs: "25px" }
    },
    contact_title_div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    },
    contact_title: {
        fontSize: { lg: "45px", md: "40x", sm: "35px", xs: "25px" }
    },
    contact_subtitle: {
        fontSize: { lg: "35px", md: "30x", sm: "20px", xs: "15px" }
    },
    contact_input_div: { display: 'flex', flexDirection: 'column', gap: '20px' },
    contact_details_div: {
        display: 'flex',
        flexDirection: {
            lg: 'row', md: 'row', sm: 'row', xs: 'column'
        },
        justifyContent: 'space-around',
        gap: { sm: "50px", xs: "25px" }

    },
    contact_icons: {
        fontSize: { lg: "150px", md: "100x", sm: "75px", xs: "55px" },
    },
    button: {
        bgcolor: "black",
        padding: "10px 30px",
        color: "white",
        fontWeight: "550",
        borderRadius: "10px",
        textTransform: "capitalize",
        my: "30px",
        "&:hover": {
            backgroundColor: "#6c6c6c",
            color: "white"
        }
    },

    inputPropsNameField: {
        width: {
            lg: "500px",
            md: "350px",
            sm: "400px",
            xs: "300px",
            border: "2px solid black",
            borderRadius: "15px",
        },
    },
    inputPropsEmailField: {
        width: {
            lg: "500px",
            md: "350px",
            sm: "400px",
            xs: "300px",
            border: "2px solid black",
            borderRadius: "15px",
        },
    },
    inputPropsTextArea: {
        height: {
            lg: "140px",
            md: "140px",
            sm: "140px",
            xs: "60px",
            border: "2px solid black",
            borderRadius: "15px",
        },
        my: { xs: "15px", sm: "0px" },
        width: {
            lg: "750px",
            md: "400px",
            sm: "200px",
            xs: "300px",
            border: "2px solid black",
            borderRadius: "15px",
        },
    },


}
import * as React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';


const Footer: React.FC = () => {
    return (
        <Box
            sx={styles.footerMain}
        >
            <Container maxWidth='xl'>
                <Grid container spacing={1} textAlign={'center'} alignItems={'flex-start'} justifyContent={'space-between'}>
                    <Grid item xs={6} sm={6} md={2} >
                        <Typography variant="subtitle1" sx={styles.footerTitle} gutterBottom>
                            Edu.io
                        </Typography>
                        <Box sx={styles.footerSubTitle}>Features</Box>
                        <Box sx={styles.footerSubTitle}>Integrations</Box>
                        <Box sx={styles.footerSubTitle}>Pricing</Box>
                        <Box sx={styles.footerSubTitle}>FAQ</Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="subtitle1" sx={styles.footerTitle} gutterBottom>
                            Product
                        </Typography>
                        <Box sx={styles.footerSubTitle}>About Us</Box>
                        <Box sx={styles.footerSubTitle}>Careers</Box>
                        <Box sx={styles.footerSubTitle}>Privacy Policy</Box>
                        <Box sx={styles.footerSubTitle}>Terms of Service</Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="subtitle1" sx={styles.footerTitle} gutterBottom>
                            Company
                        </Typography>
                        <Box sx={styles.footerSubTitle}>Contact US</Box>
                        <Box sx={styles.footerSubTitle}>Blog</Box>
                        <Box sx={styles.footerSubTitle}>Culture</Box>
                        <Box sx={styles.footerSubTitle}>Jobs</Box>
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="subtitle1" sx={styles.footerTitle} gutterBottom>
                            Support
                        </Typography>
                        <Box sx={styles.footerSubTitle}>Help Center</Box>
                        <Box sx={styles.footerSubTitle}>Service Center</Box>
                        <Box sx={styles.footerSubTitle}>Report A Bug</Box>
                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
};

export default Footer;

const styles = {
    footerMain: {
        bgcolor: 'black',
        py: 3,
        borderTop: '1px solid black',
        color: 'white'
    },
    footerTitle: {
        paddingBottom: { lg: '30px', sm: '20px', md: '25px', xs: '15px' },
        fontSize: { lg: '30px', sm: '25px', md: '18px', xs: '15px' },

    },
    footerSubTitle: {
        fontSize: { lg: '18px', sm: '15px', md: '20px', xs: '12px' },
        fontFamily: "Poppins",
        opacity: "0.7",
        lineHeight: "20px"

    }
}
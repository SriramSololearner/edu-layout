import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import { Stylesheet } from './Styles'
import Anna from "../Assets/Group 25.svg"
import Eva from "../Assets/Mask Group.svg"
import Anita from "../Assets/Mask Group (1).svg"


const Teachers = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={Stylesheet.header}>Our teachers</Box>

            <Grid container >
                <Grid item xs={12} sm={6} md={12} lg={4} >
                    <Box sx={Stylesheet.profileCard}>
                        <Box component={'img'} src={Anna} alt='Anna' sx={Stylesheet.profileImg} />
                        <Box sx={Stylesheet.ProfileContent}>Anna</Box>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} >
                    <Box sx={Stylesheet.profileCard}>
                        <Box component={'img'} src={Eva} alt='Eva' sx={Stylesheet.profileImg} />
                        <Box sx={Stylesheet.ProfileContent} >Eva</Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} >
                    <Box sx={Stylesheet.profileCard}>
                        <Box component={'img'} src={Anita} alt='Anita' sx={Stylesheet.profileImg} />
                        <Box sx={Stylesheet.ProfileContent} >Anita</Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} >
                    <Box sx={Stylesheet.profileCard}>
                        <Box component={'img'} src={Anita} alt='Anita' sx={Stylesheet.profileImg} />
                        <Box sx={Stylesheet.ProfileContent} >Jhon</Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} lg={4} >
                    <Box sx={Stylesheet.profileCard}>
                        <Box component={'img'} src={Anna} alt='Anna' sx={Stylesheet.profileImg} />
                        <Box sx={Stylesheet.ProfileContent}>Smith</Box>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6}md={12} lg={4} >
                    <Box sx={Stylesheet.profileCard}>
                        <Box component={'img'} src={Eva} alt='Eva' sx={Stylesheet.profileImg} />
                        <Box sx={Stylesheet.ProfileContent} >Corat</Box>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} lg={12}>
                    <Button sx={Stylesheet.LearnMoreBtn} >Learn More</Button>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Teachers

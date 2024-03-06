import { Box, Button, Container, Grid, TextField } from '@mui/material'
import React from 'react'
import { Stylesheet } from './Styles'

const SignInPage = () => {
    return (
        <Container>
            <Grid container sx={Stylesheet.signinForm} >
                <Grid item xs={12} lg={6}>
                    <Box sx={Stylesheet.LeftContainer}>
                        <Box sx={Stylesheet.FormHeader}>
                            Create Account
                        </Box>
                        <Box> <TextField placeholder="email...." InputProps={{ sx: { width: { lg: "350px", md: "280px", sm: "280px", xs: "250px" }, border: "2px solid black" } }} /></Box>
                        <Box> <TextField placeholder="password...." InputProps={{ sx: { width: { lg: "350px", md: "280px", sm: "280px", xs: "250px" }, border: "2px solid black" } }} /></Box>
                        <Box><Button sx={Stylesheet.Continue}>Continue</Button></Box>
                        <Box>
                            Already Have an account?
                        </Box>
                        <Box>Sign in</Box>
                    </Box>

                </Grid>
                <Grid xs={12} lg={6}>
                    <Box component={'img'} src={'/Welcome 1.png'} sx={Stylesheet.welcomeImg} />
                </Grid>

            </Grid>
        </Container>
    )
}

export default SignInPage

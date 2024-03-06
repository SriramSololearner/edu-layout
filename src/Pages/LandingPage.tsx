import { Box, Button, Card, Grid } from '@mui/material'
import { Stylesheet } from './Styles'
import Science from "../Assets/Science2.png"

const LandingPage = () => {
    return (
        <Box>
            <Grid container sx={Stylesheet.banner_Container}>
                <Grid item xs={12} md={6} lg={6} >
                    <Box sx={Stylesheet.BannerLeftContainer}>
                        <Box sx={Stylesheet.BannerLeftContainerFirstChild}>There's a New
                            Way to Learn
                            More......</Box>
                        <Box sx={Stylesheet.BannerLeftContainerSecondChild}>Lorem ipsum dolor sit amet
                            Laudantium at iste velit earum tenetur
                            quaerat sed corporis ex, rem cum
                            nesciunt non ea eligendi porro max</Box>
                        <Box sx={Stylesheet.BannerLeftContainerThirdChild}>
                            <Button sx={Stylesheet.Btn}>Log In</Button>
                            <Button sx={Stylesheet.Btn}> Sign Up</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ ...Stylesheet.BannerRightContainer }}>
                        <Box component={'img'} src={'/Welcome 1.png'} alt="welcome-image" sx={Stylesheet.welcomeImg} />
                        <Box></Box>
                        <Box></Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container sx={Stylesheet.BannerContainer1}>
                <Grid item xs={12} md={6} lg={6} >
                    <Box sx={{ ...Stylesheet.BannerRightContainer }}>
                        <Box component={'img'} src={'/Painter 1.png'} sx={Stylesheet.painterImg} />
                        <Box></Box>
                        <Box></Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Box sx={Stylesheet.BannerContainer1RightContainer}>
                        <Button sx={Stylesheet.letsGetStartedBtn} variant="contained">Let's Get Started</Button>
                        <Box sx={Stylesheet.BannerContainer1RightContainerchild2}>we know how to  build your creativity........</Box>
                        <Box sx={Stylesheet.BannerContainer1RightContainerchild3}>Lorem ipsum dolor sit amet
                            Laudantium at iste velit earum tenetur
                            quaerat sed corporis ex, rem cum
                            nesciunt non ea eligendi porro max</Box>
                    </Box>
                </Grid>

            </Grid>

            <Grid container sx={Stylesheet.offeredCourse} >
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={Stylesheet.offeredCourseHeader} >our offered courses</Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} justifyContent={"center"}>
                    <Box sx={Stylesheet.scienceCard}>
                        <Box component={'img'} src={Science} sx={Stylesheet.scienceCardImg} />
                        <Box>Chemistry</Box>
                        <Box><Button sx={Stylesheet.Btn}>Learn More</Button></Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Box sx={Stylesheet.scienceCard}>
                        <Box component={'img'} src={Science} sx={Stylesheet.scienceCardImg} />
                        <Box>Chemistry</Box>
                        <Box><Button sx={Stylesheet.Btn}>Learn More</Button></Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Box sx={Stylesheet.scienceCard}>
                        <Box component={'img'} src={Science} sx={Stylesheet.scienceCardImg} />
                        <Box>Chemistry</Box>
                        <Box><Button sx={Stylesheet.Btn}>Learn More</Button></Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default LandingPage

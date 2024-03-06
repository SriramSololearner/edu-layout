export const Stylesheet = {
    // NavBar
    NavContainer: {
        width: "85%",
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        px: "30px", py: "10px"
    },
    NavFirstChild: {
        width: "100%",
        display: "flex", justifyContent: { xs: "center", sm: "" },
        fontSize: "20px",
        fontWeight: "900",
        fontFamily: "monospace"
    },
    NavSecondChild: {
        width: "100%",
        listStyleType: "none",
        display: { xs: "none", sm: "none", lg: "flex" },
        alignItems: "center",
        justifyContent: "center",
        gap: "150px"
    },
    banner_Container: {
        width: "100%",
        display: "flex",
        py: "80px",
    },
    BannerLeftContainer: {
        width: { lg: "100%", xs: "100%" },
        mx: { lg: "160px", xs: "20px" },
        my: { lg: "30px", xs: "20px" },

    },
    BannerLeftContainerFirstChild: {
        width: { lg: "38%", md: "100%", sm: "60%", xs: "90%" },
        textAlign: "justify", fontSize: { lg: "45px", xs: "25px", sm: "35px" },
        fontWeight: "600",
        wordSpacing: "2px",
        color: "#000",
        fontFamily: "Poppins"
    },
    BannerLeftContainerSecondChild: {
        width: { lg: "30%", md: "60%", sm: "50%", xs: "80%" },
        textAlign: "justify",
        color: "#000",
        fontFamily: "Poppins",
        mt: "10px"
    },
    BannerLeftContainerThirdChild: {
        width: { lg: "50%", sm: "85%", xs: "88%" },
        display: "flex", justifyContent: { xs: "center", sm: "" },
    },

    letsGetStartedBtn: {
        width: "12em",
        borderRadius: "6px",
        background: "#000",
        color: "white",
        p: "5px 25px",
        fontWeight: "600",
        mx: "5px",
        my: "10px",
        textTransform: "capitalize",
        "&:hover": {
            background: "#111"
        }
    },
    Btn: {
        borderRadius: "6px",
        background: "#000",
        color: "white",
        p: "5px 15px",
        fontWeight: "600",
        mx: "5px",
        my: "10px",
        textTransform: "capitalize",
        "&:hover": {
            background: "#111"
        }
    },

    BannerRightContainer: { width: "100%", display: "flex" },
    welcomeImg: {
        width: { lg: "35em", md: "", sm: "30em", xs: "19em" },
        height: { lg: "35em", md: "", sm: "30em", xs: "18em" },
        alignItems: { xs: "center" }
    },
    painterImg: {
        width: { lg: "35em", sm: "30em", xs: "25em" },
        height: { lg: "35em", sm: "30em", xs: "19em" },
    },
    BannerContainer1: {
        px: "60px",
        width: "100%",
        display: "flex",
        py: "1px"
    },
    BannerContainer1RightContainer: {
        textAlign: "justify",
        width: { lg: "50%", xs: "100%" },
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        mx: { lg: "250px", sm: "10px", xs: "20px" },
        my: "85px"

    },
    BannerContainer1RightContainerchild2: {
        fontSize: { lg: "45px", xs: "25px", sm: "35px" },
        width: { lg: "6em", sm: "10em", xs: "8em" },
        fontWeight: "600",
        wordSpacing: "5px",
        color: "#000",
        fontFamily: "Poppins",

    },
    BannerContainer1RightContainerchild3: {
        width: { lg: "87%", xs: "10em", sm: "20em" },
    },
    offeredCourse: {
        width: { lg: "90%", sm: "40em", xs: "20em" },
    },
    offeredCourseHeader: {
        fontSize: "42px",
        color: "#000",
        fontWeight: 500,
        textTransform: "capitalize",
        position: "relative",
        "& ::after": {
            content: `""`,
            borderBottom: "2px solid #ffc107",
            position: "absolute",
            bottom: "-10px",
            left: 0,
            height: "20px",
            width: "20px"
        }
    },
    scienceCard: {
        width: "70%",
        height: "90%",
        border: "2px solid black",
        mx: "10px",
        my: "20px",
        ml: { lg: "72px", xs: "50px" }
    },
    scienceCardImg: {
        width: { lg: "200px", sm: "120px", md: "150px", xs: "150px" },
        heigth: { lg: "200px", sm: "120px", md: "150px", xs: "150px" }
    },


    // Teachers PAge
    header: {
        fontSize: "35px",
        fontWeight: "500",
        lineHeight: "1.5"
    },
    profileCard: {
        width: "70%",
        border: "2px solid black",
        py: "20px",
        my: "10px",
        mx: "50px",
    },
    profileImg: {

        width: "150px",
        height: "240px"
    },
    ProfileContent: {
        color: "#000",
        fontSize: "50px"
    },
    LearnMoreBtn: {
        borderRadius: "6px",
        background: "#00160a",
        color: "white",
        p: "10px 20px",
        boxShadow: "5px  5px  grey",
        fontWeight: "600",
        mx: "5px",
        my: "10px",
        textTransform: "capitalize",
        "&:hover": {
            background: "#00160a"
        }
    },

    // SignIn page
    FormHeader: {
        fontWeight: 400,
        fontSize: "45px",

    },
    LeftContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        textAlign: "center,"
    },
    Continue: {
        width: "60%",
        borderRadius: "6px",
        background: "#000",
        color: "white",
        p: "12px 15px",
        fontWeight: "600",
        fontSize: "20px",
        mx: "5px",
        my: "10px",
        textTransform: "capitalize",
        "&:hover": {
            background: "#111"
        }
    },
    signinForm: {
        my: "80px"
    }
}
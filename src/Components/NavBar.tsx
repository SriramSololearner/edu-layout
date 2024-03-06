import { Box } from '@mui/material'
import React from 'react'
import { Stylesheet } from '../Pages/Styles'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (

        <Box sx={Stylesheet.NavContainer}>
            <Box sx={Stylesheet.NavFirstChild}>Edu.io</Box>
            <Box sx={Stylesheet.NavSecondChild}>
                <NavLink to="/" className={'Link'}>Home</NavLink>
                <NavLink to="/teachers" className={'Link'}>teachers</NavLink>
                <NavLink to="/contact" className={'Link'}>contact us</NavLink>
                <NavLink to="/signin" className={'Link'}>sign in</NavLink>

            </Box>
        </Box>
    )
}

export default NavBar

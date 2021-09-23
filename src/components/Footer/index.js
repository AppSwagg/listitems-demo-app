import React from 'react'
import { Box, Link, Typography } from '@mui/material'

const ASLink = () => <Link href="https://appswagg.com/" variant="body2">AppSwagg</Link>
const MUILink = () => <Link href="https://mui.com" variant="body2">MUI</Link>

const Footer = () => {
    return (
        <Box my={2}>
            <Typography variant="body2" align="center" >Made by <ASLink/> using <MUILink/> components</Typography>
        </Box>
    )
}

export default Footer

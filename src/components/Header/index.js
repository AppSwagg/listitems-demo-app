import React, { useContext } from 'react'
import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import ColorModeContext from '../../context/ColorModeContext'

const Header = () => {
    const colorMode = useContext(ColorModeContext)

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>ListItems-Demo-App</Typography>
                <Switch onChange={colorMode.toggleColorMode} />
            </Toolbar>
        </AppBar>
    )
}

export default Header
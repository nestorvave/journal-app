import { MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import React from 'react'

export default function NavBar({drawerWidth}) {
  return (
    <AppBar position="fixed" sx={{width:{sm:`calc(100%-${drawerWidth})px`}}}>
        <Toolbar>
            <IconButton>
                <MenuOutlined />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

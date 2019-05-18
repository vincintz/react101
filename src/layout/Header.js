import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = props => {
  return (
    <AppBar>
      <Toolbar className="container">
        <Typography variant="headline" color="inherit">
          React Travel 101
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
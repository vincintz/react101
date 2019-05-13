import React from 'react'
import { AppBar, Icon, Link, Toolbar, Typography, withStyles } from '@material-ui/core'


const styles = {
  root: {
    flexGrow: 1,
  },
};

const Header = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Link>
          <Typography variant="button">
            <Icon>card_travel</Icon>
            React 101
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)

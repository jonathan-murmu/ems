import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
    hide: {
        display: 'none',
      },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 36,
      },
});

const navbar = ( props ) => {
    const { classes } = props;
    return (
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: props.open,
          })}
        >
          <Toolbar disableGutters={!props.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={props.clicked}
              className={classNames(classes.menuButton, {
                [classes.hide]: props.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(navbar);
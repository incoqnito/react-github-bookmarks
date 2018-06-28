import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//import Adder from './Adder/Adder'
import Adder from './Adder/AdderContainer'

const styles = {
  root: {
    flexGrow: 1,
  },
    flex: {
    flex: 1,
  }
};

function AppHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Adder />
          <Typography variant="title" color="inherit" align="right" className={classes.flex}>
            Github Bookmarks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);

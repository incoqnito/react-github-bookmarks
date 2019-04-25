import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default class SnackBar extends React.Component {

  render() {
    return  (
      <span>
        <Snackbar
          open={this.props.open}
          message={this.props.message}
          autoHideDuration={this.props.duration || 5000}
          onClose={this.props.clearMessage}
        />
      </span>
    ) ;
  }

}

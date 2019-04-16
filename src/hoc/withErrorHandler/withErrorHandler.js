import React, { Component } from 'react';
import Aux from '../Aux/Aux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
        open: false,
        error: null,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    componentWillMount() {
      axios.interceptors.request.use(req=>{
        this.setState({ error: null, modal: false });
        return req;
      });
      axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error, modal: true });
      });
    }
    render () {
      return (
        <Aux>
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Something Bad Happened"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {this.state.error? this.state.error.message: null}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Disagree
                </Button>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                Agree
                </Button>
            </DialogActions>
            </Dialog>
            <WrappedComponent {...this.props} /> 
        </Aux>
      );
    }
  }
};

export default withErrorHandler;
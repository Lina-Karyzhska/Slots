import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const LogIn = ({ close, open }) => {
    let name = "";

    const closePopup = (e) => {
        e.preventDefault();
        if (name) close(e, name);
    }

    return (
        <Dialog open={open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                onChange={(e) => name = e.target.value}
              />
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => close(e)} color="primary">
                  Cancel
                </Button>
                <Button onClick={closePopup} color="primary">
                  Login
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LogIn;



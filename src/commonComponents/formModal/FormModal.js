import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormModal({open,handleClose}) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please read carefully and fill all required fields with staff data.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          /><br />
           <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /><br />
           <TextField
            margin="dense"
            id="name"
            label="Phone"
            type="numeric"
            fullWidth
            variant="standard"
          /><br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

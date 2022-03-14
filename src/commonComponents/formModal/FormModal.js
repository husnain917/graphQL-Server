import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl } from '@mui/material';
import { useMutation } from '@apollo/client';
import { ADD_ENROLMMENT_APPROVAL } from '../../lib/mutation/AllMutation';
import { useFormModal } from './useFormModal';
export default function FormModal({ open, title }) {
  const [
    {
      createManyEnrollmentApproval,
      ctaButtonHandler,
      loading,
      newObj,
      error,
      name,
      setName,
      email,
      setEmail,
      course,
      setCourse,
      paymentMethod,
      setpaymentMethod,
      amount,
      setamount,
      transactionId,
      settransactionId,
    },
  ] = useFormModal();
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please read carefully and fill all required fields with staff data.
          </DialogContentText>
          {title === 'Enrollment Approval' ? (
            <>
             
                <TextField
                  autoFocus
                  margin='dense'
                  id='name'
                  value={name}
                  label='Student Name'
                  type='text'
                  fullWidth
                  variant='standard'
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <TextField
                  margin='dense'
                  id='email'
                  value={email}
                  label='Email'
                  type='email'
                  fullWidth
                  variant='standard'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <TextField
                  margin='dense'
                  id='course'
                  value={course}
                  label='Course'
                  type='text'
                  fullWidth
                  variant='standard'
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                />
                <br />
                <TextField
                  margin='dense'
                  id='paymentMethod'
                  value={paymentMethod}
                  label='Payment Method'
                  type='text'
                  fullWidth
                  variant='standard'
                  onChange={(e) => {
                    setpaymentMethod(e.target.value);
                  }}
                />
                <br />
                <TextField
                  margin='dense'
                  id='amount'
                  value={amount}
                  label='Amount'
                  type='number'
                  fullWidth
                  variant='standard'
                  onChange={(e) => {
                    setamount(e.target.value);
                  }}
                />
                <br />
                <TextField
                  margin='dense'
                  id='transactionId'
                  value={transactionId}
                  label='Transaction ID'
                  type='numeric'
                  fullWidth
                  onChange={(e) => {
                    settransactionId(e.target.value);
                  }}
                  variant='standard'
                />
                <br />
                <Button onClick={ctaButtonHandler}>Submit</Button>
              
            </>
          ) : (
            ''
          )}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

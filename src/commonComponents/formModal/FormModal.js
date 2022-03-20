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
import OverlayLoader from '../overlayLoader/OverlayLoader';
import { MetroSpinner } from 'react-spinners-kit';
export default function FormModal({ open, title, handleClose }) {
  let [
    {
      ctaButtonHandler,
      loading,
      error,
      name,
      setName,
      email,
      setEmail,
      status,
      setStatus,
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
  // if (loading) {
  //   return (
  //     <OverlayLoader loading={loading} />
  //   )
  // }
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <Dialog open={open}>
        {
          loading ?
            <MetroSpinner size={100} color="#686769" />
            :
            (
              <>
                <DialogTitle>Form</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please read carefully and fill all required fields with staff data.
                  </DialogContentText>
                  {title === 'Enrollment Approval' ? (
                    <><form onSubmit={ctaButtonHandler || handleClose}>

                      <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        value={name}
                        label='Student Name'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          setName(event.target.value);
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
                        onChange={(event) => {
                          setEmail(event.target.value);
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
                        onChange={(event) => {
                          setCourse(event.target.value);
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
                        onChange={(event) => {
                          setpaymentMethod(event.target.value);
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
                        onChange={(event) => {
                          setamount(event.target.value);
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
                        onChange={(event) => {
                          settransactionId(event.target.value);
                        }}
                        variant='standard'
                      />
                      <br />
                      <TextField
                        margin='dense'
                        id='status'
                        value={status}
                        label='status'
                        type='text'
                        fullWidth
                        onChange={(event) => {
                          setStatus(event.target.value);
                        }}
                        variant='standard'
                      />
                      <br />
                      <Button type='submit' >Submit</Button>
                      {error && <p>{error.message}</p>}
                    </form>
                    </>
                  ) : (
                    ''
                  )}
                </DialogContent>
                <DialogActions>
                </DialogActions>

              </>
            )
        }
      </Dialog>
    </div>
  );
}

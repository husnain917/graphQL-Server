import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormModal } from './useFormModal';
// import OverlayLoader from '../overlayLoader/OverlayLoader';
import { MagicSpinner } from 'react-spinners-kit';
export default function FormModal({ open, title, handleClose, name,
  email,
  course,
  paymentMethod,
  amount,
  transactionId,
  status,
  setName,
  setEmail,
  setCourse,
  setamount,
  settransactionId,
  ctaButtonHandler,
  setpaymentMethod,
  setStatus,
  loading, error,
  role, phone, setRole, setPhone, ctaButtonHandler1 }) {
  // let [
  //   {
  //     ctaButtonHandlerEnroll, role, setRole, phone, setPhone, loading, error, status, setStatus, name, setName, email, setEmail, course, setCourse, paymentMethod, setpaymentMethod, amount, setamount, transactionId, settransactionId
  //   },
  // ] = useFormModal();
  if (loading) {
    return (
      <MagicSpinner />
    )
  }
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please read carefully and fill all required fields with staff data.
          </DialogContentText>
          {
            title === "Enrollment Approval" ?
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
                <Button type='submit' onClick={ctaButtonHandler}>Submit</Button>
                <Button type='submit' onClick={handleClose}>Close</Button>

              </>
              :
              title === "Courses" ?
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
                </>
                :
                title === "All Students" ?
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
                  </>
                  :
                  title === "All Staff" ?
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
                        value={role}
                        label='Course'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          setRole(event.target.value);
                        }}
                      />
                      <br />
                      <TextField
                        margin='dense'
                        id='paymentMethod'
                        value={phone}
                        label='Payment Method'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          setPhone(event.target.value);
                        }}
                      />
                      <br />
                      <Button onClick={ctaButtonHandler1}>submit</Button>
                      <Button type='submit' onClick={handleClose}>Close</Button>

                    </>
                    :
                    title === "Success Stories" ?
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

                      </>
                      :
                      title === "Events" ?
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
                        </> :
                        ''

          }          <br />

          {error && <p>{error.message}</p>}
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}

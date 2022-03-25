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
  role, phone, setRole, setPhone, ctaButtonHandler1,
  courseDesc,
  courseStatus,
  courseCategoryId,
  coursePrice,
  courseIntro,
  instructorId,
  ctaButtonHandler2,
  setcourseDesc,
  setcourseStatus,
  setcourseCategoryId,
  setcoursePrice,
  setcourseIntro,
  setinstructorId,
  ctaButtonHandler3,
  freelancingProfileUrl,
  setfreelancingProfileUrl,
  paymentProof,
  setpaymentProof,
  description,
  setdescription,
  totalEarnedAmount,
  settotalEarnedAmount,
  city,
  setcity,
  whyReject,
  setwhyReject,
  ctaButtonHandler4,
  eventDate,
  seteventDate,
  speakerId,
  setspeakerId,
  eventImage,
  seteventImage,
  ctaButtonHandler5,

}) {
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
                    id='Status'
                    value={status}
                    label='Status'
                    type='text'
                    fullWidth
                    variant='standard'
                    onChange={(event) => {
                      setStatus(event.target.value);
                    }}
                  />
                  <br />
                  <Button type='submit' onClick={ctaButtonHandler3}>Submit</Button>
                  <Button type='submit' onClick={handleClose}>Close</Button>
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
                        id='freelancingProfileUrl'
                        value={freelancingProfileUrl}
                        label='freelancingProfileUrl'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          setfreelancingProfileUrl(event.target.value);
                        }}
                      />
                      <br />
                      <TextField
                        margin='dense'
                        id='paymentProof'
                        value={paymentProof}
                        label='paymentProof'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          setpaymentProof(event.target.value);
                        }}
                      />
                      <br />
                      <TextField
                        margin='dense'
                        id='description'
                        value={description}
                        label='description'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          setdescription(event.target.value);
                        }}
                      />
                      <br />
                      <TextField
                        margin='dense'
                        id='totalEarnedAmount'
                        value={totalEarnedAmount}
                        label='totalEarnedAmount'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          settotalEarnedAmount(event.target.value);
                        }}
                      />
                      <TextField
                        margin='dense'
                        id='whyReject'
                        value={status}
                        label='status'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          setStatus(event.target.value);
                        }}
                      />
                      <br />
                      <TextField
                        margin='dense'
                        id='city'
                        value={city}
                        label='city'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          setcity(event.target.value);
                        }}
                      />
                      <br />
                      <TextField
                        margin='dense'
                        id='whyReject'
                        value={whyReject}
                        label='whyReject'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={(event) => {
                          setwhyReject(event.target.value);
                        }}
                      />
                      <br />
                      <Button onClick={ctaButtonHandler4}>submit</Button>
                      <Button type='submit' onClick={handleClose}>Close</Button>
                    </>
                    :
                    title === "Events" ?
                      <>
                        <TextField
                          autoFocus
                          margin='dense'
                          id='name'
                          value={name}
                          label='Name'
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
                          id='description'
                          value={description}
                          label='description'
                          type='text'
                          fullWidth
                          variant='standard'
                          onChange={(event) => {
                            setdescription(event.target.value);
                          }}
                        />
                        <br />
                        <TextField
                          margin='dense'
                          id='eventDate'
                          value={eventDate}
                          label='eventDate'
                          type='text'
                          fullWidth
                          variant='standard'
                          onChange={(event) => {
                            seteventDate(event.target.value);
                          }}
                        />
                        <br />
                        <TextField
                          margin='dense'
                          id='speakerId'
                          value={speakerId}
                          label='speakerId'
                          type='text'
                          fullWidth
                          variant='standard'
                          onChange={(event) => {
                            setspeakerId(event.target.value);
                          }}
                        />
                        <TextField
                          margin='dense'
                          id='speakerId'
                          value={status}
                          label='status'
                          type='text'
                          fullWidth
                          variant='standard'
                          onChange={(event) => {
                            setStatus(event.target.value);
                          }}
                        />
                        <br />
                        <Button onClick={ctaButtonHandler5}>submit</Button>
                        <Button type='submit' onClick={handleClose}>Close</Button>
                      </> :
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
                            id='Course Des'
                            value={courseDesc}
                            label='Course Description'
                            type='text'
                            fullWidth
                            variant='standard'
                            onChange={(event) => {
                              setcourseDesc(event.target.value);
                            }}
                          />
                          <br />
                          <TextField
                            margin='dense'
                            id='status'
                            value={courseStatus}
                            label='Status'
                            type='text'
                            fullWidth
                            variant='standard'
                            onChange={(event) => {
                              setcourseStatus(event.target.value);
                            }}
                          />
                          <br />
                          <TextField
                            margin='dense'
                            id='courseCategoryId'
                            value={courseCategoryId}
                            label='courseCategoryId'
                            type='text'
                            fullWidth
                            variant='standard'
                            onChange={(event) => {
                              setcourseCategoryId(event.target.value);
                            }}
                          />
                          <br />
                          <TextField
                            margin='dense'
                            id='coursePrice'
                            value={coursePrice}
                            label='coursePrice'
                            type='text'
                            fullWidth
                            variant='standard'
                            onChange={(event) => {
                              setcoursePrice(event.target.value);
                            }}
                          />
                          <br />
                          <TextField
                            margin='dense'
                            id='courseIntro'
                            value={courseIntro}
                            label='courseIntro'
                            type='text'
                            fullWidth
                            variant='standard'
                            onChange={(event) => {
                              setcourseIntro(event.target.value);
                            }}
                          />
                          <br />
                          <TextField
                            margin='dense'
                            id='instructorId'
                            value={instructorId}
                            label='instructorId'
                            type='text'
                            fullWidth
                            variant='standard'
                            onChange={(event) => {
                              setinstructorId(event.target.value);
                            }}
                          />
                          <br />
                          <Button onClick={ctaButtonHandler2}>submit</Button>
                          <Button type='submit' onClick={handleClose}>Close</Button>
                        </>
                        :
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

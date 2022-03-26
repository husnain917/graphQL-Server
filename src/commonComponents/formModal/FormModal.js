import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
  subject,
  message,
  reply,
  setsubject,
  setmessage,
  setreply,
  ctaButtonHandler6,
  faqQuestion,
  faqAnswer,
  setfaqQuestion,
  setfaqAnswer,
  ctaButtonHandler7,
  ctaButtonHandlerEnroll


}) {

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
                  placeholder='PENDING/APPROVED/REJECTED'
                  type='text'
                  fullWidth
                  onChange={(event) => {
                    setStatus(event.target.value);
                  }}
                  variant='standard'
                />
                <Button type='submit' onClick={ctaButtonHandlerEnroll}>Submit</Button>
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
                    placeholder='ACTIVE/OFFLINE'
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
                      id='role'
                      value={role}
                      label='Role'
                      placeholder='TEACHER/ADMIN'
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
                      id='Phone'
                      value={phone}
                      label='Phone'
                      type='number'
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
                        label='Freelancing Profile Url'
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
                        label='Payment Proof'
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
                        label='Description'
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
                        label='Total Earned Amount'
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
                        label='Status'
                        placeholder='PUBLISH/UNPUBLISH'
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
                        label='City'
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
                        label='Why Reject'
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
                          label='Description'
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
                          label='Event Date'
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
                          label='Speaker Id'
                          type='text'
                          fullWidth
                          variant='standard'
                          onChange={(event) => {
                            setspeakerId(event.target.value);
                          }}
                        />
                        <TextField
                          margin='dense'
                          id='Status'
                          placeholder='UPCOMING/PAST'
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
                            placeholder='PUBLISH/UNPUBLISH'
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
                            label='Course Category Id'
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
                            label='Course Price'
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
                            label='Course Intro'
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
                            label='Instructor Id'
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
                        title === "Contact us" ?
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
                              id='subject'
                              value={subject}
                              label='subject'
                              type='text'
                              fullWidth
                              variant='standard'
                              onChange={(event) => {
                                setsubject(event.target.value);
                              }}
                            />
                            <br />
                            <TextField
                              margin='dense'
                              id='status'
                              value={status}
                              label='Status'
                              placeholder=' UNSEEN/CONTACTED/DECLINE/USEFUL'
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
                              id='message'
                              value={message}
                              label='Message'
                              type='text'
                              fullWidth
                              variant='standard'
                              onChange={(event) => {
                                setmessage(event.target.value);
                              }}
                            />
                            <br />
                            <TextField
                              margin='dense'
                              id='reply'
                              value={reply}
                              label='Reply'
                              type='text'
                              fullWidth
                              variant='standard'
                              onChange={(event) => {
                                setreply(event.target.value);
                              }}
                            />
                            <br />
                            <Button onClick={ctaButtonHandler6}>submit</Button>
                            <Button type='submit' onClick={handleClose}>Close</Button>
                          </>

                          :
                          title === "FAQS" ?
                            <>
                              <TextField
                                autoFocus
                                margin='dense'
                                id='faqQuestion'
                                value={faqQuestion}
                                label='Faq Question'
                                type='text'
                                fullWidth
                                variant='standard'
                                onChange={(event) => {
                                  setfaqQuestion(event.target.value);
                                }}
                              />
                              <br />
                              <TextField
                                margin='dense'
                                id='faqAnswer'
                                value={faqAnswer}
                                label='Faq Answer'
                                type='text'
                                fullWidth
                                variant='standard'
                                onChange={(event) => {
                                  setfaqAnswer(event.target.value);
                                }}
                              />
                              <br />

                              <Button onClick={ctaButtonHandler7}>submit</Button>
                              <Button type='submit' onClick={handleClose}>Close</Button>
                            </>

                            :
                            ''

          }          <br />
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}

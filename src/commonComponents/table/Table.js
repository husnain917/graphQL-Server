//Import from Libraries
import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  Hidden,
} from '@mui/material';
//Import from Files
import GlobalSearch from '../globalSearch/GlobalSearch';
import { TableStyle } from './TableStyle';
import { UseTable } from './UseTable';
import FormModal from '../formModal/FormModal';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import CommonModal from '../commonModal/CommonModal';

export default function Table({
  data,
  title,
  tableHeadings,
  handleClickOpen,
  open,
  handleClose,
  anchorEl,
  handleAnchorClose,
  handleAnchorClick,
  openAnchor,
  name,
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
  ctaButtonHandlerEnroll,
  setpaymentMethod,
  loading,
  error,
  setStatus,
  role,
  phone,
  setRole,
  setPhone,
  ctaButtonHandler1,
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
  filterValue,

}) {
  const [
    {
      searchShow,
      setSearchShow,
      searchQuery,
      onTextChangeHandler,
      cancelSearch,
      searchingFor,
    },
  ] = UseTable();
  return (
    <>
      {/* Drop Down menu for filter Button */}
      <DropDownMenu
        handleAnchorClose={handleAnchorClose}
        anchorEl={anchorEl}
        openAnchor={openAnchor}
        title={title}
      />
      {/* Drop Down menu for filter Button */}

      {/* Form Modal */}
      <FormModal open={open} title={title} handleClose={handleClose}
        name={name}
        email={email}
        course={course}
        paymentMethod={paymentMethod}
        amount={amount}
        transactionId={transactionId}
        status={status}
        setName={setName}
        setEmail={setEmail}
        setCourse={setCourse}
        setamount={setamount}
        role={role}
        phone={phone}
        setRole={setRole}
        setPhone={setPhone}
        settransactionId={settransactionId}
        ctaButtonHandlerEnroll={ctaButtonHandlerEnroll}
        setpaymentMethod={setpaymentMethod}
        loading={loading}
        error={error}
        setStatus={setStatus}
        ctaButtonHandler1={ctaButtonHandler1}
        courseDesc={courseDesc}
        courseStatus={courseStatus}
        courseIntro={courseIntro}
        coursePrice={coursePrice}
        instructorId={instructorId}
        ctaButtonHandler2={ctaButtonHandler2}
        courseCategoryId={courseCategoryId}
        setcourseDesc={setcourseDesc}
        setcourseStatus={setcourseStatus}
        setcourseCategoryId={setcourseCategoryId}
        setcoursePrice={setcoursePrice}
        setcourseIntro={setcourseIntro}
        setinstructorId={setinstructorId}
        ctaButtonHandler3={ctaButtonHandler3}
        freelancingProfileUrl={freelancingProfileUrl}
        setfreelancingProfileUrl={setfreelancingProfileUrl}
        paymentProof={paymentProof}
        setpaymentProof={setpaymentProof}
        description={description}
        setdescription={setdescription}
        totalEarnedAmount={totalEarnedAmount}
        settotalEarnedAmount={settotalEarnedAmount}
        city={city}
        setcity={setcity}
        whyReject={whyReject}
        setwhyReject={setwhyReject}
        ctaButtonHandler4={ctaButtonHandler4}
        eventDate={eventDate}
        seteventDate={seteventDate}
        speakerId={speakerId}
        setspeakerId={setspeakerId}
        eventImage={eventImage}
        seteventImage={seteventImage}
        ctaButtonHandler5={ctaButtonHandler5}
        subject={subject}
        message={message}
        reply={reply}
        setsubject={setsubject}
        setmessage={setmessage}
        setreply={setreply}
        ctaButtonHandler6={ctaButtonHandler6}
        faqQuestion={faqQuestion}
        faqAnswer={faqAnswer}
        setfaqQuestion={setfaqQuestion}
        setfaqAnswer={setfaqAnswer}
        ctaButtonHandler7={ctaButtonHandler7}


      />
      {/* Form Modal */}

      <Toolbar disableGutters>
        <TableStyle.BoxElement searchShow>
          {/* Table Header For Big Screens */}

          <Hidden smDown>
            <TableStyle.SeachContainer>
              <Typography variant='h6' component='div' noW3rap={true}>
                {title}
              </Typography>
              <TableStyle.SearchAndBtnsContainer>
                <GlobalSearch
                  onChangeText={onTextChangeHandler}
                  placeholder="Search here..."
                  searchCancel={cancelSearch}
                />

                {
                  title === "FAQS" ?
                    ''
                    :
                    <TableStyle.FilterListIcon onClick={handleAnchorClick} />
                }

                <TableStyle.AddIcon onClick={handleClickOpen} />
              </TableStyle.SearchAndBtnsContainer>
            </TableStyle.SeachContainer>
          </Hidden>

          {/* Table Header For Small Screens */}

          <Hidden smUp>
            <TableStyle.MobileViewTableHeader searchShow={searchShow}>
              <Typography
                variant='h6'
                component='div'
                noWrap={true}
                sx={{ display: searchShow && 'none' }}
              >
                {/* All Students */}
                {title}
              </Typography>
              {searchShow && (
                <TableStyle.SearchBox>
                  <TableStyle.FilterListIcon />
                  <GlobalSearch
                    onChangeText={onTextChangeHandler}
                    placeholder='Search here...'
                    searchCancel={cancelSearch}
                  />
                  <IconButton
                    size='large'
                    disableFocusRipple
                    disableRipple
                    onClick={(val) => {
                      setSearchShow(!searchShow);
                      cancelSearch(val);
                    }}
                  >
                    <TableStyle.CloseIconBox>
                      <TableStyle.CloseIcon />
                    </TableStyle.CloseIconBox>
                  </IconButton>
                  <TableStyle.AddIcon onClick={handleClickOpen} />
                </TableStyle.SearchBox>
              )}
              {!searchShow && (
                <TableStyle.HeaderIconsContainer>
                  <TableStyle.FilterListIcon />
                  <IconButton
                    size='large'
                    color='inherit'
                    aria-label='search'
                    disableFocusRipple
                    disableRipple
                    onClick={() => setSearchShow(!searchShow)}
                  >
                    <TableStyle.SearchIcon />
                  </IconButton>
                  <TableStyle.AddIcon onClick={handleClickOpen} />
                </TableStyle.HeaderIconsContainer>
              )}
            </TableStyle.MobileViewTableHeader>
          </Hidden>
        </TableStyle.BoxElement>
      </Toolbar>

      {/* Table  */}

      <TableContainer component={Paper}>
        <TableStyle.CustomTable size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              {tableHeadings?.map((item) => {
                return <TableCell align='center'>{item && item}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data
                .filter(
                  searchingFor(searchQuery),
                )
                .map((row, i) => (
                  <TableStyle.CustomTableRow key={row?.i}>
                    {title === 'Courses' ? (
                      <>
                        <TableCell align='center' component='th' scope='row'>
                          {row?.courseName}
                        </TableCell>
                        <TableCell align='center'>{row?.courseDesc}</TableCell>
                        <TableCell align='center'>{row?.courseIntro}</TableCell>
                        <TableCell align='center'>{row?.courseStatus}</TableCell>
                        <TableCell align='center'>{row?.coursePrice}</TableCell>

                        <TableCell align='center'>
                          <Tooltip title='Delete'>
                            <IconButton aria-label='delete' size='small'>
                              <TableStyle.DeleteIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title='Update'>
                            <IconButton aria-label='update' size='small'>
                              <TableStyle.EditIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </>
                    ) : title === 'Enrollment Approval' ? (
                      <>
                        <>
                          <TableCell align='center' component='th' scope='row'>
                            {row?.studentName}
                          </TableCell>
                          <TableCell align='center'>{row?.email}</TableCell>
                          <TableCell align='center'>{row?.course}</TableCell>
                          <TableCell align='center'>
                            {row?.paymentMethod}
                          </TableCell>
                          <TableCell align='center'>{row?.amount}</TableCell>
                          <TableCell align='center'>
                            {row?.transactionId}
                          </TableCell>
                          <TableCell align='center'>{row?.status}</TableCell>

                          <TableCell align='center'>
                            <Tooltip title='Delete'>
                              <IconButton aria-label='delete' size='small'>
                                <TableStyle.DeleteIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title='Update'>
                              <IconButton aria-label='update' size='small'>
                                <TableStyle.EditIcon />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </>
                      </>
                    ) : title === 'Events' ? (
                      <>
                        <TableCell align='center' component='th' scope='row'>
                          {row?.eventName}
                        </TableCell>
                        <TableCell align='center'>{row?.eventDesc}</TableCell>
                        <TableCell align='center'>{row?.eventDate}</TableCell>
                        <TableCell align='center'>{row?.speakerId}</TableCell>
                        <TableCell align='center'>{row?.eventStatus}</TableCell>
                        <TableCell align='center'>{row?.eventImage}</TableCell>
                        <TableCell align='center'>
                          <Tooltip title='Delete'>
                            <IconButton aria-label='delete' size='small'>
                              <TableStyle.DeleteIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title='Update'>
                            <IconButton aria-label='update' size='small'>
                              <TableStyle.EditIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </>
                    ) : title === "Contact us" ? (
                      <>
                        <TableCell align='center' component='th' scope='row'>
                          {row?.name}
                        </TableCell>
                        <TableCell align='center'>{row?.subject}</TableCell>
                        <TableCell align='center'>
                          <CommonModal message={row?.message} />
                        </TableCell>
                        <TableCell align='center'>
                          <CommonModal message={row?.reply} />
                        </TableCell>
                        <TableCell align='center'>{row?.status}</TableCell>
                        <TableCell align='center'>
                          <Tooltip title='Delete'>
                            <IconButton aria-label='delete' size='small'>
                              <TableStyle.DeleteIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title='Update'>
                            <IconButton aria-label='update' size='small'>
                              <TableStyle.EditIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </>
                    )
                      : title === "FAQS" ? (
                        <>
                          <TableCell align='center' component='th' scope='row'>
                            {row?.createdAt}
                          </TableCell>
                          <TableCell align='center'><CommonModal question={row?.faqQuestion} /></TableCell>
                          <TableCell align='center'><CommonModal question={row?.faqAnswer} /></TableCell>
                          <TableCell align='center' component='th' scope='row'>
                            {row?.updateAt}
                          </TableCell>
                          <TableCell align='center'>
                            <Tooltip title='Delete'>
                              <IconButton aria-label='delete' size='small'>
                                <TableStyle.DeleteIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title='Update'>
                              <IconButton aria-label='update' size='small'>
                                <TableStyle.EditIcon />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </>
                      )
                        : title === "All Staff" ? (
                          <>
                            <TableCell align='center' component='th' scope='row'>
                              {row?.name}
                            </TableCell>
                            <TableCell align='center'>{row?.email}</TableCell>
                            <TableCell align='center'>{row?.role}</TableCell>
                            <TableCell align='center'>{row?.phone}</TableCell>
                            <TableCell align='center'>{row?.image}</TableCell>
                            <TableCell align='center'>
                              <Tooltip title='Delete'>
                                <IconButton aria-label='delete' size='small'>
                                  <TableStyle.DeleteIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title='Update'>
                                <IconButton aria-label='update' size='small'>
                                  <TableStyle.EditIcon />
                                </IconButton>
                              </Tooltip>
                            </TableCell>
                          </>
                        )
                          : title === "Success Stories" ? (
                            <>
                              <TableCell align='center' component='th' scope='row'>
                                {row?.city}
                              </TableCell>
                              <TableCell align='center'>{row?.freelancingProfileUrl}</TableCell>
                              <TableCell align='center'>{row?.paymentProof}</TableCell>
                              <TableCell align='center'>{row?.description}</TableCell>
                              <TableCell align='center'>{row?.status}</TableCell>
                              <TableCell align='center'>{row?.totalEarnedAmount}</TableCell>
                              <TableCell align='center'>{row?.whyReject}</TableCell>
                              <TableCell align='center'>
                                <Tooltip title='Delete'>
                                  <IconButton aria-label='delete' size='small'>
                                    <TableStyle.DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title='Update'>
                                  <IconButton aria-label='update' size='small'>
                                    <TableStyle.EditIcon />
                                  </IconButton>
                                </Tooltip>
                              </TableCell>
                            </>
                          )
                            : (
                              <>
                                <TableCell align='center' component='th' scope='row'>
                                  {row?.name}
                                </TableCell>
                                <TableCell align='center'>{row?.email}</TableCell>
                                <TableCell align='center'>{row?.status}</TableCell>
                                <TableCell align='center'>
                                  <Tooltip title='Delete'>
                                    <IconButton aria-label='delete' size='small'>
                                      <TableStyle.DeleteIcon />
                                    </IconButton>
                                  </Tooltip>
                                  <Tooltip title='Update'>
                                    <IconButton aria-label='update' size='small'>
                                      <TableStyle.EditIcon />
                                    </IconButton>
                                  </Tooltip>
                                </TableCell>
                              </>
                            )}
                  </TableStyle.CustomTableRow>
                ))}
          </TableBody>
        </TableStyle.CustomTable>
      </TableContainer>
    </>
  );
}

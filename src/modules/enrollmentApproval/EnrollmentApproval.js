import React from 'react';
import { Audio } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import Table from '../../commonComponents/table/Table';
import { CommonLoadingStyle } from '../../constants/CommonTableStyle';
import { useEnrollmentApproval } from './useEnrollmentApproval'
function EnrollmentApproval() {
    const [{ filterDataArray, loading, open, handleClickOpen, handleClose, error, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick, name,setStatus, email, course, paymentMethod, amount, transactionId, status, setName, setEmail, setCourse, setpaymentMethod, setamount, settransactionId, ctaButtonHandler }] = useEnrollmentApproval()
    return (
        <div>
            <>

                <ToastContainer />
                {
                    loading ?
                        <CommonLoadingStyle.LoaderContainer>
                            <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
                        </CommonLoadingStyle.LoaderContainer>
                        :
                        error ?
                            <p>Error</p>
                            :
                            <Table title={'Enrollment Approval'}

                                data={filterDataArray}
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
                                setStatus={setStatus}
                                settransactionId={settransactionId}
                                ctaButtonHandler={ctaButtonHandler}
                                setpaymentMethod={setpaymentMethod}
                                loading={loading}
                                error={error}
                                handleClickOpen={handleClickOpen}
                                open={open}
                                handleClose={handleClose}
                                anchorEl={anchorEl}
                                handleAnchorClose={handleAnchorClose}
                                handleAnchorClick={handleAnchorClick}
                                openAnchor={openAnchor}
                                tableHeadings={['Student Name', 'Email', 'Course', 'Payment Method', 'Amount', 'Transaction ID', 'Status', 'Actions']} />
                }
            </>
        </div>
    )
}

export default EnrollmentApproval;

import React from 'react';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import Table from '../../commonComponents/table/Table';
import { useEnrollmentApproval } from './useEnrollmentApproval';
function EnrollmentApproval() {
    const [
        {
            filterDataArray,
            loading,
            open,
            handleClickOpen,
            handleClose,
            error,
            openAnchor,
            anchorEl,
            handleAnchorClose,
            handleAnchorClick,
            name,
            setStatus,
            email,
            course,
            paymentMethod,
            amount,
            transactionId,
            status,
            setName,
            setEmail,
            setCourse,
            setpaymentMethod,
            setamount,
            settransactionId,
            ctaButtonHandlerEnroll,
            ctaDeleteHandlerEnroll,
            DeleteLoading,
            AddLoading,
            flag6,
            ctaUpdateEnroll,
            handleCloseUpdate,
            ctaUpdateHandlerEnroll,
            UpdateLoading
        },
    ] = useEnrollmentApproval();
    return (
        <div>
            <>
                <ToastContainer />
                {loading ? (
                    <CommonTableLoader />
                ) :
                    DeleteLoading ? (
                        <CommonTableLoader />
                    ) :
                        AddLoading ? (
                            <CommonTableLoader />
                        )
                            :
                            UpdateLoading ? (
                                <CommonTableLoader />
                            ) : (
                                <Table
                                    title={'Enrollment Approval'}
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
                                    ctaButtonHandlerEnroll={ctaButtonHandlerEnroll}
                                    ctaDeleteHandlerEnroll={ctaDeleteHandlerEnroll}
                                    setpaymentMethod={setpaymentMethod}
                                    loading={loading}
                                    error={error}
                                    flag={flag6}
                                    ctaUpdateEnroll={ctaUpdateEnroll}
                                    handleCloseUpdate={handleCloseUpdate}
                                    ctaUpdateHandlerEnroll={ctaUpdateHandlerEnroll}
                                    handleClickOpen={handleClickOpen}
                                    open={open}
                                    handleClose={handleClose}
                                    anchorEl={anchorEl}
                                    handleAnchorClose={handleAnchorClose}
                                    handleAnchorClick={handleAnchorClick}
                                    openAnchor={openAnchor}
                                    tableHeadings={[
                                        'Student Name',
                                        'Email',
                                        'Course',
                                        'Payment Method',
                                        'Amount',
                                        'Transaction ID',
                                        'Status',
                                        'Actions',
                                    ]}
                                />
                            )}
            </>
        </div>
    );
}

export default EnrollmentApproval;

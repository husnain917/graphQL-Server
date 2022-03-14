import React from 'react';
import { Audio } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import Table from '../../commonComponents/table/Table';
import { CommonLoadingStyle } from '../../constants/CommonTableStyle';
import { useEnrollmentApproval } from './useEnrollmentApproval'
function EnrollmentApproval() {
    const [{ filterDataArray, loading, open, error, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick }] = useEnrollmentApproval()
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

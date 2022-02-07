import React from 'react';
import { Audio } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import Table from '../../commonComponents/table/Table';
import { EnrollmentApprovalStyle } from './EnrollmentApprovalStyle';
import { useEnrollmentApproval } from './useEnrollmentApproval'
function EnrollmentApproval() {
    const [data, loading] = useEnrollmentApproval()
    return (
        <div>
            <>

                <ToastContainer />
                {
                    loading ?
                        <EnrollmentApprovalStyle.LoaderContainer>
                            <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
                        </EnrollmentApprovalStyle.LoaderContainer>
                        :
                        <Table title={'Enrollment Approval'} data={data}
                            tableHeadings={['Student Name', 'Email', 'Course', 'Payment Method', 'Amount', 'Transaction ID', 'Status', 'Actions']} />
                }
            </>
        </div>
    )
}

export default EnrollmentApproval;

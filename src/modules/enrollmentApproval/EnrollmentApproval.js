import React from 'react';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import Table from '../../commonComponents/table/Table';
import { UseEnrollmentApproval } from './UseEnrollmentApproval';
function EnrollmentApproval() {
    const [
        {
          loader,
          ADD_LOADING,
          GET_LOADING,
          DELETE_LOADING,
          UPDATE_LOADING,
          refacteredData,
          ctaFormHandler,
          ctaDeleteHandler,
          ctaUpdateHandler,
          formInputs,
          ctaEditButtonHandler
        },
      ] = UseEnrollmentApproval();
      if (
        GET_LOADING ||
        DELETE_LOADING ||
        UPDATE_LOADING ||
        ADD_LOADING ||
        loader
      ) {
        return <CommonTableLoader />;
      }
    return (
        <div>
            <>
               
                                <Table
                                    title={'Enrollment Approval'}
                                    tableHeadings={[
                                        'id',
                                        'Student Name',
                                        'Email',
                                        'Course',
                                        'Payment Method',
                                        'Amount',
                                        'Transaction ID',
                                        'Status',
                                        'Actions',
                                    ]}
                                    ctaEditButtonHandler={ctaEditButtonHandler}
                                    printedKeys={[
                                      {
                                        key: "id",
                                      },
                                      {
                                        key: "studentName",
                                      },
                                      {
                                        key: "email",
                                      },
                                      {
                                        key: "course",
                                      },
                                      {
                                          key:'amount'
                                      },
                                      {
                                        key: "paymentMethod",
                                      },
                                      {
                                        key: "transactionId",
                                      },
                                      {
                                        key: "status",
                                      },
                                      {
                                        type: "crud",
                                      },
                                      // {
                                      //   key: "postUrl",
                                      //   type: "image",
                                      // },
                                      // {
                                      //   key: "postDesc",
                                      //   type: "editor",
                                      // },
                                    ]}
                                    formInputs={formInputs}
                                    // {[
                                      // {
                                      //   type: "editor",
                                      //   name: "editor",
                                      // },
                                     
                            
                                      // {
                                      //   label: 'CategoryName',
                                      //   name: 'categoryName',
                                      //   type: 'text',
                                      // },
                                      // {
                                      //   label: 'createrName',
                                      //   name: 'createrName',
                                      //   type: 'text',
                                      // }
                                    // ]}
                                    filterdata={{
                                      key: "role",
                                      filterTag: ['All', 'PENDING', 'APPROVED','REJECT'],
                                    }}
                                    data={refacteredData}
                                    ctaFormHandler={ctaFormHandler}
                                    ctaDeleteHandler={ctaDeleteHandler}
                                    ctaUpdateHandler={ctaUpdateHandler}
                                />
                       
            </>
        </div>
    );
}

export default EnrollmentApproval;

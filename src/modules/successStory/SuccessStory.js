import React from 'react';
import Table from '../../commonComponents/table/Table';
import { useSuccessStory } from './useSuccessStory';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
export default function SuccessStory() {
  const [
    {
      filterDataArray,
      loading,
      open,
      handleClickOpen,
      handleClose,
      openAnchor,
      anchorEl,
      handleAnchorClose,
      handleAnchorClick,
      freelancingProfileUrl,
      setfreelancingProfileUrl,
      paymentProof,
      setpaymentProof,
      description,
      setdescription,
      status,
      setStatus,
      totalEarnedAmount,
      settotalEarnedAmount,
      city,
      setcity,
      whyReject,
      setwhyReject,
      ctaButtonHandler4,
      ctaDeleteHandlerStory,
      DeleteLoading,
      AddLoading,
      ctaUpdateStory,
      flag,
      handleCloseUpdate,
      ctaUpdateHandlerStory,
      UpdateLoading
    },
  ] = useSuccessStory();

  
  return (
    <>
      <ToastContainer />
      {loading ? 
    (
        <CommonTableLoader />
      ) :
        DeleteLoading ?
          <CommonTableLoader />
          :
          AddLoading ?
            <CommonTableLoader />
            :
            UpdateLoading ?
              <CommonTableLoader />

            :
            (
              <div>
                <Table
                  title={'Success Stories'}
                  tableHeadings={[
                    'city',
                    'freelancingProfileUrl',
                    'paymentProof',
                    'description',
                    'status',
                    'totalEarnedAmount',
                    'whyReject',
                    'Action',
                  ]}
                  data={filterDataArray}
                  freelancingProfileUrl={freelancingProfileUrl}
                  setfreelancingProfileUrl={setfreelancingProfileUrl}
                  paymentProof={paymentProof}
                  setpaymentProof={setpaymentProof}
                  description={description}
                  setdescription={setdescription}
                  status={status}
                  setStatus={setStatus}
                  totalEarnedAmount={totalEarnedAmount}
                  settotalEarnedAmount={settotalEarnedAmount}
                  city={city}
                  setcity={setcity}
                  whyReject={whyReject}
                  setwhyReject={setwhyReject}
                  ctaButtonHandler4={ctaButtonHandler4}
                  DeleteLoading={DeleteLoading}
                  ctaDeleteHandlerStory={ctaDeleteHandlerStory}
                  handleClickOpen={handleClickOpen}
                  ctaUpdateStory={ctaUpdateStory}
                  ctaUpdateHandlerStory={ctaUpdateHandlerStory}
                  open={open}
                  flag={flag}
                  handleClose={handleClose}
                  anchorEl={anchorEl}
                  handleAnchorClose={handleAnchorClose}
                  handleAnchorClick={handleAnchorClick}
                  openAnchor={openAnchor}
                  handleCloseUpdate={handleCloseUpdate}
                />
              </div>
            )}
    </>
  );
}

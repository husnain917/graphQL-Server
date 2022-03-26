import React from 'react';
import Table from '../../commonComponents/table/Table';
import { useFAQS } from './useFAQS';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
export default function FAQS() {
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
            faqAnswer,
            setfaqAnswer,
            faqQuestion,
            setfaqQuestion,
            ctaButtonHandler7,
            ctaDeleteHandlerFAQ,
            DeleteLoading,
            AddLoading
        },
    ] = useFAQS();
    return (
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
                ) : (
                    <Table
                        title='FAQS'
                        tableHeadings={[
                            'Created At',
                            'Faq Question',
                            'Faq Answer',
                            'Update At',
                            'Action',
                        ]}
                        data={filterDataArray}
                        faqQuestion={faqQuestion}
                        setfaqQuestion={setfaqQuestion}
                        faqAnswer={faqAnswer}
                        setfaqAnswer={setfaqAnswer}
                        ctaButtonHandler7={ctaButtonHandler7}
                        ctaDeleteHandlerFAQ={ctaDeleteHandlerFAQ}
                        handleClickOpen={handleClickOpen}
                        open={open}
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                        handleAnchorClose={handleAnchorClose}
                        handleAnchorClick={handleAnchorClick}
                        openAnchor={openAnchor}
                    />
                )}
        </>
    );
}

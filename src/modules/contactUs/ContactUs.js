import React from 'react';
import Table from '../../commonComponents/table/Table';
import useContactUs from './useContactUs';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
export default function ContactUs() {
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
            name,
            subject,
            status,
            message,
            reply,
            setName,
            setsubject,
            setStatus,
            setmessage,
            setreply,
            ctaButtonHandler6
        },
    ] = useContactUs();
    return (
        <div>
            <>
                <ToastContainer />
                {loading ? (
                    <CommonTableLoader/>
                ) : (
                    <Table
                        title='Contact us'
                        tableHeadings={[
                            'Name',
                            'Email',
                            'Subject',
                            'Message',
                            'Status',
                            'Actions',
                        ]}
                        data={filterDataArray}
                        name={name}
                        subject={subject}
                        status={status}
                        message={message}
                        reply={reply}
                        setName={setName}
                        setsubject={setsubject}
                        setStatus={setStatus}
                        setmessage={setmessage}
                        setreply={setreply}
                        ctaButtonHandler6={ctaButtonHandler6}
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
        </div>
    );
}

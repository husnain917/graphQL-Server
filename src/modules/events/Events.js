import React from 'react';
import { ToastContainer } from 'react-toastify';
import Table from '../../commonComponents/table/Table';
import { useEvents } from './useEvents';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
export default function Events() {
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
            setName,
            description,
            setdescription,
            status,
            setStatus,
            eventDate,
            seteventDate,
            speakerId,
            setspeakerId,
            eventImage,
            seteventImage,
            ctaButtonHandler5,
        },
    ] = useEvents();
    return (
        <div>
            <ToastContainer />
            {loading ? (
               <CommonTableLoader/>
            ) : (
                <Table
                    title={'Events'}
                    data={filterDataArray}
                    handleClickOpen={handleClickOpen}
                    open={open}
                    name={name}
                    setName={setName}
                    description={description}
                    setdescription={setdescription}
                    status={status}
                    setStatus={setStatus}
                    eventDate={eventDate}
                    seteventDate={seteventDate}
                    speakerId={speakerId}
                    setspeakerId={setspeakerId}
                    eventImage={eventImage}
                    seteventImage={seteventImage}
                    ctaButtonHandler5={ctaButtonHandler5}
                    handleClose={handleClose}
                    anchorEl={anchorEl}
                    handleAnchorClose={handleAnchorClose}
                    handleAnchorClick={handleAnchorClick}
                    openAnchor={openAnchor}
                    tableHeadings={[
                        'eventName',
                        'eventDesc',
                        'eventDate',
                        'speakerId',
                        'status',
                        'eventImage',
                        'Actions',
                    ]}
                />
            )}
        </div>
    );
}

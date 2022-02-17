import React from 'react';
import { Audio } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import Table from '../../commonComponents/table/Table';
import { EventsStyle } from './EventsStyle';
import { useEvents } from './useEvents'
export default function Events() {
    const [{ filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick }] = useEvents()
    return (
        <div>
            <ToastContainer />
            {
                loading ?
                    <EventsStyle.LoaderContainer>
                        <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
                    </EventsStyle.LoaderContainer>
                    :
                    <Table title={'Events'}
                        data={filterDataArray}
                        handleClickOpen={handleClickOpen}
                        open={open}
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                        handleAnchorClose={handleAnchorClose}
                        handleAnchorClick={handleAnchorClick}
                        openAnchor={openAnchor}
                        tableHeadings={['Title', 'Venue', 'Max Tickets', 'Date & Time', 'Event Type', 'Status', 'Speakers', 'Actions']} />
            }
        </div>

    )
}

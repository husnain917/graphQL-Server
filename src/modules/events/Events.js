import React from 'react';
import { Audio } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import Table from '../../commonComponents/table/Table';
import { EventsStyle } from './EventsStyle';
import { useEvents } from './useEvents'
export default function Events() {
    const [data, loading] = useEvents()
    return (
        <div>
            <ToastContainer />
            {
                loading ?
                    <EventsStyle.LoaderContainer>
                        <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
                    </EventsStyle.LoaderContainer>
                    :
                    <Table title={'Events'} data={data}
                        tableHeadings={['Title', 'Venue', 'Max Tickets', 'Date & Time', 'Event Type', 'Status', 'Speakers', 'Actions']} />
            }
        </div>

    )
}

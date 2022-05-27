import React from 'react';
import { ToastContainer } from 'react-toastify';
import Table from '../../commonComponents/table/Table';
import { UseEvents } from './UseEvents';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
export default function Events() {
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
            handleChange
        },
    ] = UseEvents();
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

            <Table
                title={'Events'}
                tableHeadings={[
                    'Id',
                    'Name',
                    'Description',
                    'Date',
                    'SpeakerId',
                    'Image',
                    'Status',
                    'Action',
                ]}
                printedKeys={[
                    {
                        key: "id",
                    },
                    {
                        key: "eventName",
                    },
                    {
                        key: "eventDesc",
                    },

                    {
                        key: "eventDate",
                    },

                    {
                        key: "speakerId",
                    },
                    {
                        key: "eventImage",
                    },
                    {
                        key: "eventStatus",
                    },
                    {
                        type: "crud",
                    }
                ]}
                formInputs={formInputs}
                filterdata={{
                    key: "role",
                    filterTag: ['All', 'PAST', 'UPCOMING'],
                }}
                data={refacteredData}
                ctaFormHandler={ctaFormHandler}
                handleChange={handleChange}
                ctaDeleteHandler={ctaDeleteHandler}
                ctaUpdateHandler={ctaUpdateHandler}
            />

        </div>
    );
}

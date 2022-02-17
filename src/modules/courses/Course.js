import React from 'react';
import { UseCourses } from './useCourses';
import Table from '../../commonComponents/table/Table';
import { CoursesStyle } from './CoursesStyle';
import { ToastContainer } from 'react-toastify';
import { Audio } from 'react-loader-spinner';
export default function Course() {
    const [{ filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick }] = UseCourses();
    return (
        <>
            <ToastContainer />
            {
                loading ?
                    <CoursesStyle.LoaderContainer>
                        <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
                    </CoursesStyle.LoaderContainer>
                    :
                    <Table title={'Courses'}
                        tableHeadings={['Name', 'trainer', 'status', 'Phone', 'Image', 'Actions']}
                        data={filterDataArray}
                        handleClickOpen={handleClickOpen}
                        open={open}
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                        handleAnchorClose={handleAnchorClose}
                        handleAnchorClick={handleAnchorClick}
                        openAnchor={openAnchor}
                    />
            }
        </>
    )
}

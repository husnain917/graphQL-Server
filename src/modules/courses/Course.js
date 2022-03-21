import React from 'react';
import { UseCourses } from './useCourses';
import Table from '../../commonComponents/table/Table';
import { ToastContainer } from 'react-toastify';
import { Audio } from 'react-loader-spinner';
import { CommonLoadingStyle } from '../../constants/CommonTableStyle';
export default function Course() {
    const [{ filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick }] = UseCourses();
    return (
        <>
            <ToastContainer />
            {
                loading ?
                    <CommonLoadingStyle.LoaderContainer>
                        <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
                    </CommonLoadingStyle.LoaderContainer>
                    :
                    <Table title={'Courses'}
                        tableHeadings={['Course Name', 'Course Desc', 'Course Intro','Course Status','Course Price','Actions']}
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

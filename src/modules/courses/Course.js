import React from 'react';
import { UseCourses } from './useCourses';
import Table from '../../commonComponents/table/Table';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
export default function Course() {
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
            courseDesc,
            courseStatus,
            courseCategoryId,
            coursePrice,
            courseIntro,
            instructorId,
            ctaButtonHandler2,
            setName,
            setcourseDesc,
            setcourseStatus,
            setcourseCategoryId,
            setcoursePrice,
            setcourseIntro,
            setinstructorId,
            ctaDeleteHandlerCourse,
            Deleteloading,
            AddLoading,
            ctaUpdateCourse,
            flag2,
            handleCloseUpdate,
            ctaUpdateHandlerCourse,
            UpdateLoading

        },
    ] = UseCourses();
    return (
        <>
            <ToastContainer />
            {loading ? (
                <CommonTableLoader />
            ) :
                Deleteloading ? (
                    <CommonTableLoader />
                ) :

                    AddLoading ? (
                        <CommonTableLoader />

                    )
                        :
                        UpdateLoading ? (
                            <CommonTableLoader />)
                            : (
                                <Table
                                    title={'Courses'}
                                    tableHeadings={[
                                        'Course Name',
                                        'Course Desc',
                                        'Course Intro',
                                        'Course Status',
                                        'Course Price',
                                        'Actions',
                                    ]}
                                    data={filterDataArray}
                                    name={name}
                                    courseDesc={courseDesc}
                                    status={courseStatus}
                                    courseIntro={courseIntro}
                                    coursePrice={coursePrice}
                                    instructorId={instructorId}
                                    ctaButtonHandler2={ctaButtonHandler2}
                                    courseCategoryId={courseCategoryId}
                                    setName={setName}
                                    setcourseDesc={setcourseDesc}
                                    setStatus={setcourseStatus}
                                    setcourseCategoryId={setcourseCategoryId}
                                    setcoursePrice={setcoursePrice}
                                    setcourseIntro={setcourseIntro}
                                    setinstructorId={setinstructorId}
                                    handleClickOpen={handleClickOpen}
                                    ctaDeleteHandlerCourse={ctaDeleteHandlerCourse}
                                    ctaUpdateCourse={ctaUpdateCourse}
                                    flag={flag2}
                                    handleCloseUpdate={handleCloseUpdate}
                                    ctaUpdateHandlerCourse={ctaUpdateHandlerCourse}
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

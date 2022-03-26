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
            Deleteloading

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
                ) : (
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
                        courseStatus={courseStatus}
                        courseIntro={courseIntro}
                        coursePrice={coursePrice}
                        instructorId={instructorId}
                        ctaButtonHandler2={ctaButtonHandler2}
                        courseCategoryId={courseCategoryId}
                        setName={setName}
                        setcourseDesc={setcourseDesc}
                        setcourseStatus={setcourseStatus}
                        setcourseCategoryId={setcourseCategoryId}
                        setcoursePrice={setcoursePrice}
                        setcourseIntro={setcourseIntro}
                        setinstructorId={setinstructorId}
                        handleClickOpen={handleClickOpen}
                        ctaDeleteHandlerCourse={ctaDeleteHandlerCourse}
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

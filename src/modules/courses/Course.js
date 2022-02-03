import React from 'react';
import { useCourses } from './useCourses';
import Table from '../../commonComponents/table/Table';
import { CoursesStyle } from './CoursesStyle';
import { ToastContainer } from 'react-toastify';
import { Audio } from 'react-loader-spinner';
export default function Course() {
    const [data, loading,tableHeading] = useCourses()
    return (
        <>
            <ToastContainer />
            {
                loading ?
                    <CoursesStyle.LoaderContainer>
                        <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
                    </CoursesStyle.LoaderContainer>
                    :
                    <Table data={data} title={'Courses'} tableHeading={tableHeading} />
            }
        </>
    )
}

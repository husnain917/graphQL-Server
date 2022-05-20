import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { Slide, toast } from 'react-toastify';
import { GET_COURSES, GET_EVENTS, GET_STAFF, GET_STUDENT, GET_SUCCESS_STORIES } from '../../lib/queries/AllQueries';
import { AppContext } from '../../State';
export default function UseDashboard() {
    // const student = (localStorage.getItem('studentCount'));
    // const success = (localStorage.getItem('successCount'));
    // const staff = (localStorage.getItem('staffCount'));
    // const course = (localStorage.getItem('courseCount'));
    // const event = (localStorage.getItem('eventCount'));
    // const admin = (localStorage.getItem('adminCount'));
    const student = 6
    const success = 6
    const staff = 6
    const course = 6
    const event = 6
    const admin = 6
    let { data: STAFF_DATA, loading: STAFF_LOADING, error: STAFF_ERROR } = useQuery(GET_STAFF);
    let { data: COURSE_DATA, loading: COURSE_LOADING, error: COURSE_ERROR } = useQuery(GET_COURSES);
    let { data: STUDENT_DATA, loading: STUDENT_LOADING, error: STUDENT_ERROR } = useQuery(GET_STUDENT);
    let { data: EVENTS_DATA, loading: EVENTS_LOADING, error: EVENTS_ERROR } = useQuery(GET_EVENTS);
    let { data: SUCCESS_DATA, loading: SUCCESS_LOADING, error: SUCCESS_ERROR } = useQuery(GET_SUCCESS_STORIES);

    let staffLength = STAFF_DATA?.findManyStaff?.length
    let studentLength = STUDENT_DATA?.findManyStudents?.length
    let successLength = SUCCESS_DATA?.findManySuccessStories?.length
    let eventLength = EVENTS_DATA?.findManyEvents?.length
    let courseLength = COURSE_DATA?.findManyCourses?.length
    // let staffLength = STAFF_DATA?.findManyStaff?.length

    // const length = STAFF_DATA?.findManyStaff?.filter((item) => {
    //     if (item.role === 'ADMIN') {
    //         return item.role
    //     }

    // })
    return [{  staffLength, studentLength, successLength, eventLength, courseLength, STAFF_LOADING, COURSE_LOADING, STUDENT_LOADING, EVENTS_LOADING, SUCCESS_LOADING }];
}
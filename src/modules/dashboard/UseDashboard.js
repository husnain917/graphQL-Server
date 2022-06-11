import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import FiltredData from '../../constants/FiltredRoles';
import {
    GET_COURSES,
    GET_ENROLLMENT,
    GET_EVENTS,
    GET_SUCCESS_STORIES
} from '../../lib/queries/AllQueries';
import { AppContext } from '../../State';
export default function UseDashboard() {
    const { state } = useContext(AppContext)
    let {
        data: COURSE_DATA,
        loading: COURSE_LOADING
    } = useQuery(GET_COURSES);
    let {
        data: EVENTS_DATA,
        loading: EVENTS_LOADING
    } = useQuery(GET_EVENTS);
    let {
        data: ENROLLEMTENT,
        LOADING: ENROLMENT_LOADING
    } = useQuery(GET_ENROLLMENT)
    let {
        data: SUCCESS_DATA,
        loading: SUCCESS_LOADING
    } = useQuery(GET_SUCCESS_STORIES);
    const [{
        student,
        teacher,
        admin,
        speakerList,
        courseBatch,
        USERS_LOADING,
        CATEGORY_LOADING,
        SPEAKERS_LOADING,
        BATCH_LOADING
    }] = FiltredData()
    let studentLength = student?.length
    let successLength = SUCCESS_DATA?.findManySuccessStories?.length
    let eventLength = EVENTS_DATA?.findManyEvents?.length
    let courseLength = COURSE_DATA?.findManyCourses?.length
    let TeacherLength = teacher?.length
    let AdminLength = admin?.length
    let speakerListLength = speakerList?.length
    let courseBatchlength = courseBatch?.length
    let enrollement = ENROLLEMTENT?.enrollmentApprovals?.length
    return [{
        AdminLength,
        TeacherLength,
        studentLength,
        successLength,
        courseBatchlength,
        enrollement,
        eventLength,
        state,
        courseLength,
        speakerListLength,
        ENROLMENT_LOADING,
        COURSE_LOADING,
        USERS_LOADING,
        EVENTS_LOADING,
        CATEGORY_LOADING,
        SPEAKERS_LOADING,
        SUCCESS_LOADING,
        BATCH_LOADING,
    }];
}
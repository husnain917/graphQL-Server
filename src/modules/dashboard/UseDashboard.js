import { useQuery } from '@apollo/client';
import FiltredData from '../../constants/FiltredRoles';
import { GET_COURSES, GET_EVENTS, GET_SUCCESS_STORIES, GET_USERS } from '../../lib/queries/AllQueries';
export default function UseDashboard() {

    let { data: COURSE_DATA, loading: COURSE_LOADING, error: COURSE_ERROR } = useQuery(GET_COURSES);
    let { data: EVENTS_DATA, loading: EVENTS_LOADING, error: EVENTS_ERROR } = useQuery(GET_EVENTS);
    let { data: SUCCESS_DATA, loading: SUCCESS_LOADING, error: SUCCESS_ERROR } = useQuery(GET_SUCCESS_STORIES);
    const [{ student, teacher, admin, LOADING: USERS_LOADING }] = FiltredData()
    let studentLength = student?.length
    let successLength = SUCCESS_DATA?.findManySuccessStories?.length
    let eventLength = EVENTS_DATA?.findManyEvents?.length
    let courseLength = COURSE_DATA?.findManyCourses?.length
    let TeacherLength = teacher?.length
    let AdminLength = admin?.length
    return [{ AdminLength, TeacherLength, studentLength, successLength, eventLength, courseLength, COURSE_LOADING, USERS_LOADING, EVENTS_LOADING, SUCCESS_LOADING }];
}
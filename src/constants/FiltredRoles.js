import { useQuery } from '@apollo/client'
import {
    GET_COURSES,
    GET_COURSE_BATCH,
    GET_COURSE_CATEGORY,
    GET_SPEAKERS,
    GET_USERS
} from '../lib/queries/AllQueries'

export default function FiltredData() {
    //ROLES OF STAFF AND STUDENTS
    const {
        data: USER_DATA,
        loading: LOADING
    } = useQuery(GET_USERS)
    const {
        data: COURSE_DATA,
        loading: COURSE_LOADING
    } = useQuery(GET_COURSES)
    const {
        data: CATEGORY_DATA,
        loading: CATEGORY_LOADING
    } = useQuery(GET_COURSE_CATEGORY)
    const {
        data: SPEAKERS,
        loading: SPEAKERS_LOADING
    } = useQuery(GET_SPEAKERS)
    const {
        data: COURSE_BATCH,
        loading: BATCH_LOADING
    } = useQuery(GET_COURSE_BATCH)


    const student = USER_DATA?.users?.filter((role) => {
        return role?.userRole === 'STUDENT'
    })
    const teacher = USER_DATA?.users?.filter((role) => {
        return role?.userRole === 'TEACHER'
    })
    const admin = USER_DATA?.users?.filter((role) => {
        return role?.userRole === 'ADMIN'
    })

    const speakerList = SPEAKERS?.speakers?.filter((item) => {
        return item
    })
    const courseBatch = COURSE_BATCH?.findManyCourseBatches?.filter((item) => {
        return item
    })


    return [{
        student,
        teacher,
        admin,
        speakerList,
        courseBatch,
        LOADING,
        CATEGORY_DATA,
        COURSE_LOADING,
        CATEGORY_LOADING,
        SPEAKERS_LOADING,
        COURSE_DATA,
        BATCH_LOADING
    }]
}

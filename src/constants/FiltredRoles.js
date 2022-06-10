import { useQuery } from '@apollo/client'
import { GET_COURSES, GET_COURSE_BATCH, GET_COURSE_CATEGORY, GET_SPEAKERS, GET_USERS } from '../lib/queries/AllQueries'

export default function FiltredData() {
    //ROLES OF STAFF AND STUDENTS
    const { data: USER_DATA, loading: LOADING } = useQuery(GET_USERS)
    const { data: COURSE_DATA, loading: COURSE_LOADING } = useQuery(GET_COURSES)
    const { data: CATEGORY_DATA } = useQuery(GET_COURSE_CATEGORY)
    const { data: SPEAKERS } = useQuery(GET_SPEAKERS)

    const { data: COURSE_BATCH } = useQuery(GET_COURSE_BATCH)
    const student = USER_DATA?.users?.filter((role) => {
        return role?.role === 'STUDENT'
    })
    const teacher = USER_DATA?.users?.filter((role) => {
        return role?.role === 'TEACHER'
    })
    const admin = USER_DATA?.users?.filter((role) => {
        return role?.role === 'ADMIN'
    })

    const speakerList = SPEAKERS?.speakers?.filter((item) => {
        return item
    })
    console.log("dpeaekr", speakerList);

    const courseBatch = COURSE_BATCH?.findManyCourseBatches?.filter((item) => {
        return item
    })
    console.log("bathc", courseBatch);


    return [{ student, teacher, admin, speakerList, courseBatch, LOADING, CATEGORY_DATA, COURSE_DATA }]
}

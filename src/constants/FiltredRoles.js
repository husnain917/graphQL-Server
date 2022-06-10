import { useQuery } from '@apollo/client'
import { GET_COURSE_CATEGORY, GET_USERS } from '../lib/queries/AllQueries'

export default function FiltredData() {
    //ROLES OF STAFF AND STUDENTS
    const { data, loading: LOADING } = useQuery(GET_USERS)
    const filtredRoles = []
    const roles = data?.users?.filter((role) => {
        return filtredRoles.push(role)
    })
    console.log(filtredRoles);

    filtredRoles.map((item) => {
        console.log(item.id);
    })






    const student = data?.users?.filter((role) => {
        return role?.role === 'STUDENT'
    })
    console.log("1122", student);
    const teacher = data?.users?.filter((role) => {
        return role?.role === 'TEACHER'
    })
    const admin = data?.users?.filter((role) => {
        return role?.role === 'ADMIN'
    })



    const { data: CATEGORY_DATA } = useQuery(GET_COURSE_CATEGORY)

    return [{ filtredRoles, student, teacher, admin, LOADING, CATEGORY_DATA }]
}

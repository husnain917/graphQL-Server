import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import {
    GET_COURSES,
    GET_COURSE_BATCH,
    GET_COURSE_CATEGORY,
    GET_SPEAKERS,
    GET_USERS,
    GET_USER_GROUP
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
    const {
        data: USER_GROUPS,
        loading: USER_GROUP_LOADING
    } = useQuery(GET_USER_GROUP)
    const student = USER_DATA?.users?.filter((role) => {
        return role.userGroup.userGroupRole === 'STUDENT'
    })
    const teacher = USER_DATA?.users?.filter((role) => {

        return role.userGroup.userGroupRole === 'TEACHER'
    })
    const admin = USER_DATA?.users?.filter((role) => {
        return role.userGroup.userGroupRole === 'ADMIN'
    })
    const userGroup = USER_GROUPS?.userGroups?.filter((role) => {
        if (role.userGroupRole === "ADMIN") {
            return role
        }
        else if (role.userGroupRole === "TEACHER") {
            return role
        }
        // else {
        //     return role.userGroupRole
        // }
    })
    const userGroupStudent = USER_GROUPS?.userGroups?.filter((role) => {
        if (role.userGroupRole === "STUDENT") {
            return role
        }
        // else {
        //     return role.userGroupRole
        // }
    })



    // const student = USER_DATA?.users?.map((role) => {
    //     return role?.userGroup?.map((item)=>{
    //         return item?.userGroupRole === "STUDENT"
    //     })
    // })
    // const teacher = USER_DATA?.users?.map((role) => {
    //     return role?.userGroup?.map((item)=>{
    //         return item?.userGroupRole === "TEACHER"
    //     })
    // })
    // const admin = USER_DATA?.users?.map((role) => {
    //     return role?.userGroup?.map((item)=>{
    //         return item?.userGroupRole === "ADMIN"
    //     })
    // })
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
        BATCH_LOADING,
        userGroup,
        userGroupStudent
    }]
}

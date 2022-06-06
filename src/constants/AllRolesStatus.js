import { useQuery } from "@apollo/client"
import { GET_USERS } from "../lib/queries/AllQueries"

export const BASIC_ENROLL_ROLES = [
    {
        value: "PENDING",
        label: "PENDING",
    },
    {
        value: "APPROVED",
        label: "APPROVED",
    },
    {
        value: "REJECT",
        label: "REJECT",
    },

]

export const BASIC_STAFF_ROLE = [
    {
        value: "ADMIN",
        label: "ADMIN",
    },
    {
        value: "TEACHER",
        label: "TEACHER",
    },
]

export const BASIC_COURSE_ROLE = [
    {
        value: "PUBLISH",
        label: "PUBLISH",
    },
    {
        value: "UNPUBLISH",
        label: "UNPUBLISH",
    },
]

export const BASIC_STUDENT_ROLE = [
    {
        value: "ACTIVE",
        label: "ACTIVE",
    },
    {
        value: "OFFLINE",
        label: "OFFLINE",
    },
]

export const BASIC_SUCCESS_ROLE = [
    {
        value: "PUBLISH",
        label: "PUBLISH",
    },
    {
        value: "UNPUBLISH",
        label: "UNPUBLISH",
    },
]

export const BASIC_EVENTS_ROLE = [
    {
        value: "PAST",
        label: "PAST",
    },
    {
        value: "UPCOMING",
        label: "UPCOMING",
    },
]


export const BASIC_CONTACT_ROLE = [
    {
        value: "UNSEEN",
        label: "UNSEEN",
    },
    {
        value: "CONTACTED",
        label: "CONTACTED",
    },
    {
        value: "DECLINE",
        label: "DECLINE",
    },
    {
        value: "USEFUL",
        label: "USEFUL",
    },
]




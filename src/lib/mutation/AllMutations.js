import { gql } from "@apollo/client";



export const ADD_ENROLMMENT_APPROVAL = gql`
mutation Mutation($data: [EnrollmentApprovalCreateManyInput!]!) {
  createManyEnrollmentApproval(data: $data) {
    count
  }
}
`;



export const ADD_STAFF = gql`
mutation CreateManyStaff($data: [StaffCreateManyInput!]!) {
  createManyStaff(data: $data) {
    count
  }
}`


export const ADD_COURSES = gql`
mutation Mutation($data: [CoursesCreateManyInput!]!) {
  createManyCourses(data: $data) {
    count
  }
}`
export const ADD_STUDENT = gql`
mutation CreateManyStudents($data: [StudentsCreateManyInput!]!) {
  createManyStudents(data: $data) {
    count
  }
}`

export const ADD_SUCCESS_STORY = gql`
mutation CreateManyStories($data: [SuccessStoriesCreateManyInput!]!) {
  createManySuccessStories(data: $data) {
    count
  }
}`

export const ADD_EVENTS = gql`
mutation CreateManyEvents($data: [EventsCreateManyInput!]!) {
  createManyEvents(data: $data) {
    count
    }
}`

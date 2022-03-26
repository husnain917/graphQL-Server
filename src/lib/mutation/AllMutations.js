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


export const ADD_CONTACT_US = gql`
mutation Mutation($data: [ContactUsCreateManyInput!]!) {
  createManyContactUs(data: $data) {
    count
  }
}`

export const ADD_FAQS = gql`
mutation Mutation($data: [FaqCreateManyInput!]!) {
  createManyFaq(data: $data) {
    count
  }
}`





//SINGLE DELETE MUTATIONS


export const DELETE_ENROLMMENT_APPROVAL = gql`
mutation DeleteEnrollmentApproval($where: EnrollmentApprovalWhereUniqueInput!) {
  deleteEnrollmentApproval(where: $where) {
    studentName
  }
}
`


export const DELETE_CONTACT = gql`
mutation DeleteMutation($where: ContactUsWhereUniqueInput!) {
  deleteContactUs(where: $where) {
    name
  }
}
`
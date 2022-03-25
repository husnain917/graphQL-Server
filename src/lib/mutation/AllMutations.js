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


export const GET_COURSES = gql`
mutation Mutation($data: [CoursesCreateManyInput!]!) {
  createManyCourses(data: $data) {
    count
  }
}`
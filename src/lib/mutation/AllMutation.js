import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    id
  }
}
`

export const ADD_ENROLMMENT_APPROVAL = gql`
mutation Mutation($data: [EnrollmentApprovalCreateManyInput!]!) {
  createManyEnrollmentApproval(data: $data) {
    count
  }
}
`;



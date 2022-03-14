import { gql } from "@apollo/client";

export const ADD_ENROLMMENT_APPROVAL = gql`
mutation Mutation($data: [EnrollmentApprovalCreateManyInput!]!) {
  createManyEnrollmentApproval(data: $data) {
    count
  }
}
`;
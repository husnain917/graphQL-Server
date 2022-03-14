import { gql } from '@apollo/client';

export const GET_DATA = gql`
  query Users {
  users {
    id
    name
    email
    password
    cnic
    
  }
}
`;


export const GET_ENROLLMENT = gql`
 query EnrollmentApprovals {
  enrollmentApprovals {
    id
    studentName
    email
    course
    paymentMethod
    amount
    transactionId
    status
  }
}
`;
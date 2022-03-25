import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    token
    id
    email
    name
    password
    cnic
    address
    role
    phone
    permission
    emailApproval
    successStoriesId
  }
}
`
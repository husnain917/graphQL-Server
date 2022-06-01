import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Mutation($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    token
    role
    name
    email
    id
    cnic
    address
    contact
    permission
    emailApproval
    successStoriesId
    organizationsId
    createdAt
    updateAt
  }
 
}
`


export const ORG_LOGIN = gql`
mutation OrganizationLogin($password: String!, $email: String!) {
  organizationLogin(password: $password, email: $email) {
    id
    name
    email
    address
    contact
    secretKeyId
    token
    role
    
  }
}`



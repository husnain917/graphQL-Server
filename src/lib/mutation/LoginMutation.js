import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    cnic
    id
    name
    email
    address
    contact
    permission
    emailApproval
    successStoriesId
    token
    createdAt
    updateAt
    organizationsId
    status
    userGroupId
    userGroup {
      userName
      id
      userGroupRole
      tabsPermission
      createdAt
      updateAt
    }
  }
}
`


export const ORG_LOGIN = gql`
# mutation OrganizationLogin($password: String!, $email: String!) {
#   organizationLogin(password: $password, email: $email) {
#     id
#     name
#     email
#     address
#     contact
#     secretKeyId
#     token
#     role
    
#   }
mutation OrganizationLogin($password: String!, $email: String!) {
  organizationLogin(password: $password, email: $email) {
    name
    id
    email
    role
    address
    contact
    secretKeyId
    token
    userGroup {
      userName
      userGroupRole
      tabsPermission
      createdAt
      updateAt
    }
    users {
      name
      email
      cnic
    } 
  }
}`



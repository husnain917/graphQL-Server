import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    id
    name
    email
    cnic
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
    userGroup {
      id
      userName
      userGroupRole
      tabsPermission
      createdAt
      updateAt
      organizationsId
    }
    userGroupId
    organizations {
      id
      name
      email
      role
      address
      contact
      secretKeyId
      token
      users {
        id
        name
        cnic
        email
        address
        contact
        permission
        emailApproval
        successStoriesId
      }
    }
  }
}
`


export const ORG_LOGIN = gql`
mutation CreateOrganization($password: String!, $email: String!) {
  organizationLogin(password: $password, email: $email) {
    id
    name
    email
    role
    address
    contact
    secretKeyId
    token
    users {
      id
      name
      email
      cnic
      address
      contact
      permission
      emailApproval
      successStoriesId
      token
      createdAt
      updateAt
      status
      organizationsId
      userGroupId
      userGroup {
        id
        userName
        userGroupRole
        tabsPermission
        createdAt
        updateAt
        organizationsId
      }
    }
    userGroup {
      id
      userName
      userGroupRole
      tabsPermission
      createdAt
      updateAt
      organizationsId
    }
  }
}
`



import { gql } from "@apollo/client";

export const LOGIN = gql`
# mutation Login($password: String!, $email: String!) {
#   login(password: $password, email: $email) {
#     token
#     id
#     email
#     name
#     password
#     cnic
#     address
#     role
#     contact
#     permission
#     emailApproval
#     successStoriesId
#   }
# }
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



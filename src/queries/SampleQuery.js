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
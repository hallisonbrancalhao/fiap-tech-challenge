import { gql } from 'apollo-angular';

export const CREATE_USER = gql`
mutation AddUser($user: CreateUserDto!) {
  register(input: $user) {
    email
    name
    password
  }
}
`

import { gql } from 'apollo-angular';
import { TypedDocumentNode } from '@apollo/client';
import { RegisterUser } from '@fiap-tech-challenge/shared-domain';

export interface CreateUserResult {
  "data": {
    "register": {
      "email": string,
      "name": string,
    }
  }
}

export interface CreateUserDto {
  user: RegisterUser
}

export const CREATE_USER: TypedDocumentNode<CreateUserResult, CreateUserDto> = gql`
mutation AddUser($user: CreateUserDto!) {
  register(input: $user) {
    email
    name
  }
}
`

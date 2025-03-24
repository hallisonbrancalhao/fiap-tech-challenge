import { gql } from 'apollo-angular';
import { TypedDocumentNode } from '@apollo/client';

export interface LoginUserDto {
  credentials: {
    email: string,
    password: string,
  },
}

export interface GetTokenResult {
  login: {
    accessToken: string;
  };
}

export const GET_TOKEN_QUERY: TypedDocumentNode<GetTokenResult, LoginUserDto> = gql`
  mutation GetToken($credentials: LoginUserDto!) {
    login(input: $credentials) {
      accessToken
    }
  }
`;

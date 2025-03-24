import { gql } from 'apollo-angular';
import { TypedDocumentNode } from '@apollo/client';
import { AuthUser } from '@fiap-tech-challenge/shared-domain';

export interface LoginUserDto {
  credentials: AuthUser
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

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VerifyToken
// ====================================================

export interface VerifyToken_tokenVerify_user_permissions {
  __typename: "PermissionDisplay";
  code: string;
  name: string;
}

export interface VerifyToken_tokenVerify_user {
  __typename: "User";
  id: string;
  email: string;
  isStaff: boolean;
  note: string | null;
  permissions: (VerifyToken_tokenVerify_user_permissions | null)[] | null;
}

export interface VerifyToken_tokenVerify {
  __typename: "VerifyToken";
  payload: any | null;
  user: VerifyToken_tokenVerify_user | null;
}

export interface VerifyToken {
  tokenVerify: VerifyToken_tokenVerify | null;
}

export interface VerifyTokenVariables {
  token: string;
}

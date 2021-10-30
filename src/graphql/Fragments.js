import { gql } from '@apollo/client';

export const IMAGE_FRAGMENT = gql`
  fragment Image on Image {
    uri
  }
`;

export const CATEGORY_FRAGMENT = gql`
  fragment Category on Category {
    name
  }
`;

export const EXPERT_FRAGMENT = gql`
  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;

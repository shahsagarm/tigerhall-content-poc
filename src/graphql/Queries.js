import { gql } from '@apollo/client';

import {
  IMAGE_FRAGMENT,
  CATEGORY_FRAGMENT,
  EXPERT_FRAGMENT,
} from './Fragments';

export const GET_CONTENT_CARDS = gql`
  ${IMAGE_FRAGMENT}
  ${CATEGORY_FRAGMENT}
  ${EXPERT_FRAGMENT}

  query {
    contentCards(filter: { limit: 20, keywords: "", types: [PODCAST] }) {
      edges {
        ... on Podcast {
          name
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }
`;

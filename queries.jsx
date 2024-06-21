import { gql } from '@apollo/client';

export const rocket = gql`
  query GetRockets {
    launchesPast {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;

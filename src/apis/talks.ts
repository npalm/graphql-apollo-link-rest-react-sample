import gql from 'graphql-tag';

export const GET_TALKS = gql`
  query {
    talks @rest(type: "Talk", path: "talks/") {
      title
      id @export(as: "id")
      speakers @rest(type: "Speaker", path: "talks/:id/speakers") {
        name
        id
      }
    }
  }
`;

export interface Talk {
  id: number;
  title: string;
  speakers: Speaker[];
}

export interface SpeakersData {
  speakers: Speaker[];
}

export interface Speaker {
  id: number;
  name: string;
}

export interface TalksData {
  talks: Talk[];
}

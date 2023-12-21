import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Movie} from './dataSlice';
import withLoading from './withLoading';

import {gql, useQuery} from '@apollo/client';

// const GET_PLAYERS = gql`
//   query {
//     players {
//       position
//       name
//       team
//       jerseyNumber
//       wonSuperBowl
//     }
//   }
// `;

const GET_AUTHORS = gql`
  query {
    authors {
      id
      firstName
      lastName
      books {
        id
        title
      }
    }
  }
`;

interface MovieProps {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const MoviesList: FC<MovieProps> = ({movies, status}) => {
  // const {data} = useQuery(GET_PLAYERS);
  // const {data} = useQuery(GET_AUTHORS);
  // console.log(data);
  // console.log(data.authors[0].books);

  return (
    <View>
      {status === 'succeeded' && <Text>{JSON.stringify(movies)}</Text>}
    </View>
  );
};

export default withLoading(MoviesList);

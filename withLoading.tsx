import React, {ComponentType, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {fetchMovies} from './dataSlice';
import {AppDispatch, RootState} from './store';
import {useDispatch, useSelector} from 'react-redux';

const withLoading = <P extends object>(Wrappedcomponent: ComponentType<P>) => {
  const WithLoading: React.FC<P> = props => {
    const {data, status} = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(fetchMovies());
    }, [dispatch]);

    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        {status === 'loading' ? (
          <Text>Loading...</Text>
        ) : (
          <Wrappedcomponent {...props} movies={data} status={status} />
        )}
      </SafeAreaView>
    );
  };

  return WithLoading;
};

export default withLoading;

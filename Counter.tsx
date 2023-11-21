import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from './store';
import {increment, decrement, incrementByAmount} from './counterSlice';
import {StyleSheet, Button, Text, SafeAreaView} from 'react-native';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="increment5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

export default Counter;

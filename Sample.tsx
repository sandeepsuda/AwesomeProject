import {useEffect} from 'react';
import React, {StyleSheet, SafeAreaView, Text} from 'react-native';

const Sample = ({
  count,
  startTimer,
  endTimer,
}: {
  count: number;
  startTimer: () => void;
  endTimer: () => void;
}) => {
  useEffect(() => {
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    if (count === 10) {
      endTimer();
    }
  }, [count, endTimer]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{count}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Sample;

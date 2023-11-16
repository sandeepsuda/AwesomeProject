import React, {FC, useEffect} from 'react';
import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';

const ErrorDisplay: FC = () => {
  // const [movies, setMovies] = useState<iMovie[]>([]);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container} testID="wrapper">
      <Text style={styles.textColor} testID="text">
        Error text
      </Text>
      <Button onPress={() => {}} title="click" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textColor: {
    color: 'red',
  },
});

export default ErrorDisplay;

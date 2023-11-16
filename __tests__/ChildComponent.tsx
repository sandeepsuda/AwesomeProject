import React from 'react';
import {View} from 'react-native';

const ChildComponent = ({children}: any) => {
  return <View testID="mocked-child-component">{children}</View>;
};

export default ChildComponent;

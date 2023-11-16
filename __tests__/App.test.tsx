/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
  it('should match snapshot', () => {
    const result = render(<App />).toJSON();
    expect(result).toMatchSnapshot();
  });
});

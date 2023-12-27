/**
 * @format
 */

import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
  it('should match snapshot', () => {
    const {getByTestId} = render(<App />);

    expect(getByTestId('container')).toBeOnTheScreen();
  });
});

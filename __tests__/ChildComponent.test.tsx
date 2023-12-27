import React from 'react';
import {render} from '@testing-library/react-native';
import ChildComponent from '../ChildComponent';

describe('Component', () => {
  it('renders the mocked child component correctly', () => {
    const {getByTestId} = render(<ChildComponent />);

    expect(getByTestId('mocked-child-component')).toBeOnTheScreen();
  });
});

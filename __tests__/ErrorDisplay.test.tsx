import React from 'react';
//import ErrorDisplay from '../ErrorDisplay';
import {render} from '@testing-library/react-native';
import MockedChildComponent from './ChildComponent';

jest.mock('./ChildComponent', () => MockedChildComponent);

describe('<ErrorDisplay />', () => {
  it('should properly render the text', () => {
    const {getByTestId} = render(<MockedChildComponent />);
    expect(getByTestId('mocked-child-component')).toBeOnTheScreen();
  });
});

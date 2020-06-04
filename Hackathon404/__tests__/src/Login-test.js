/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../../src/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
fetch = jest.fn(() => Promise.resolve());
const navigation = {navigate: jest.fn()};

it('renders correctly', async () => {
  const container = renderer.create(<Login navigation={navigation} />);
  expect(container).toMatchSnapshot();
});

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { render, fireEvent } from 'react-native-testing-library';
// import renderer from 'react-test-renderer';
// import AppNavigator from '../../src';

// // Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// describe('Testing react navigation', () => {
//   test('page contains the header and 10 items', async () => {
//     renderer.create(
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//     );
//   });
// });

/**
 * @format
 */

import 'react-native';
import React from 'react';
import AppNavigator from '../../src';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
fetch = jest.fn(() => Promise.resolve());

it('renders correctly', async () => {
  const container = renderer.create(<AppNavigator />);

  expect(container).toMatchSnapshot();
});

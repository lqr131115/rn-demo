/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from '@/store';
import Home from '@/pages/home';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

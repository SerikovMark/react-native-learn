import React, { Component } from 'react';
import { Platform } from 'react-native';
import { AppContainer } from './router';

import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';

import configureStore from './store';
import { persistStore} from 'redux-persist'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const store = configureStore();

persistStore(
  store,
  null,
  () => {
    store.getState() // if you want to get restoredState
  }
)

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
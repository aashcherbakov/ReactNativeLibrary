// React
import React, { Component } from 'react';

// React Native
import { View, Text } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// reducers
import reducers from './reducers';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <View>
          <Text>Hello World</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
